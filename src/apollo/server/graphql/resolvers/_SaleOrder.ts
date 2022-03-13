import { Resolvers } from '@apollo/client';
import SaleOrder from '../../models/saleOrder';
import Product from '../../models/products';
import Board from '../../models/board';
import Stripe from 'stripe';

const stripe = new Stripe('sk_test_yzlw6HqnbaXA119soMjDkxVz00QguDKKBV', {
  apiVersion: '2020-08-27'
});

const resolvers: Resolvers = {
  Query: {
    getSaleOrders: async () => {
      const saleOrders = await SaleOrder.find({});
      if (!saleOrders) throw new Error('No sale orders found');
      return saleOrders;
    },
    getSaleOrderById: async (_, { id }) => {
      const saleOrder = await SaleOrder.findById(id);
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
      const { product, board, quantity } = input;

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
      const saleOrder = await SaleOrder.create({
        ...id,
        total: isId.price * quantity,
        quantity: quantity,
        currency: isId.currency,
        stripeId: paymentIntent.id,
        secret: paymentIntent.client_secret
      });
      if (!saleOrder) throw new Error('Error creating sale order');
      return saleOrder;
    }
  }
};

export default resolvers;
