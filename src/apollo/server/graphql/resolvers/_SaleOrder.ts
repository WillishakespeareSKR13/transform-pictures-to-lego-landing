import { Resolvers } from '@apollo/client';
import SaleOrder from '../../models/saleOrder';
import Product from '../../models/products';
import Board from '../../models/board';
import User from '../../models/users';
import Store from '../../models/store';
import StoreType from '../../models/storeTypes';
import Stripe from 'stripe';

const stripe = new Stripe('sk_test_yzlw6HqnbaXA119soMjDkxVz00QguDKKBV', {
  apiVersion: '2020-08-27'
});

const resolvers: Resolvers = {
  Query: {
    getSaleOrders: async (_, { filter }) => {
      const saleOrders = await SaleOrder.find({
        ...filter
      })
        .populate('customer')
        .populate('product')
        .populate('board')
        .populate('store');
      if (!saleOrders) throw new Error('No sale orders found');

      return saleOrders;
    },
    getSaleOrderById: async (_, { id }) => {
      const saleOrder = await SaleOrder.findById(id)
        .populate('customer')
        .populate('product')
        .populate('board')
        .populate('store');
      if (!saleOrder) throw new Error('No sale order found');

      return saleOrder;
    },
    paySaleOrder: async (_, { id }) => {
      const saleOrder = await SaleOrder.findById(id);
      if (!saleOrder) throw new Error('No sale order found');
      const paymentRetrieve = await stripe.paymentIntents.retrieve(
        saleOrder.stripeId
      );
      if (!paymentRetrieve) throw new Error('Payment intent not found');
      if (paymentRetrieve.status !== 'succeeded')
        throw new Error('Payment intent not succeeded');
      saleOrder.status = 'PAID';
      saleOrder.save();
      return saleOrder;
    }
  },
  Mutation: {
    newSaleOrder: async (_, { input }) => {
      const { product, board, quantity, customer, store } = input;

      if (!product && !board) {
        throw new Error('Product or board is required');
      }

      const isId = product
        ? await Product.findById(product)
        : await Board.findById(board);
      if (!isId) throw new Error(`${product ? 'Product' : 'Board'} not found`);

      const paymentIntent = await stripe.paymentIntents.create({
        amount: isId.price * quantity,
        currency: isId.currency.toLowerCase(),
        payment_method_types: ['card']
      });

      if (!paymentIntent) throw new Error('Payment intent not found');

      const id = product
        ? {
            product: isId._id
          }
        : {
            board: isId._id
          };
      const customerExist = async () => {
        if (!customer) {
          return {};
        }
        const customerExist = await User.findById(customer).populate('role');
        if (!customerExist) throw new Error('Customer does not exist');
        if (!['AGENT', 'OWNER', 'ADMIN'].includes(customerExist.role.name))
          throw new Error('Customer is not an agent');
        return { customer: customerExist._id };
      };
      const storeTypeExist = async () => {
        if (!store) {
          const typeExist = await StoreType.findOne({ name: 'WEBSITE' });
          if (!typeExist)
            throw new Error('First create a StoreType named WEBSITE');

          const storeExist = await Store.findOne({ storeType: typeExist.id });
          if (!storeExist) throw new Error('First create a Store');

          return storeExist;
        }
        const storeExist = await Store.findById(store);

        return storeExist;
      };

      const customerGet = await customerExist();
      const storeGet = await storeTypeExist();

      const saleOrder = await SaleOrder.create({
        ...id,
        total: isId.price * quantity,
        quantity: quantity,
        currency: isId.currency,
        stripeId: paymentIntent.id,
        secret: paymentIntent.client_secret,
        ...customerGet,
        store: storeGet._id
      });
      if (!saleOrder) throw new Error('Error creating sale order');
      const getSaleOrder = await SaleOrder.findById(saleOrder._id)
        .populate('customer')
        .populate('product')
        .populate('board')
        .populate('store');
      return getSaleOrder;
    }
  }
};

export default resolvers;
