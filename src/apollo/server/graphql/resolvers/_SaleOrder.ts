import { Resolvers } from '@apollo/client';
import SaleOrder from '../../models/saleOrder';
import Stripe from 'stripe';

const stripe = new Stripe('sk_test_yzlw6HqnbaXA119soMjDkxVz00QguDKKBV', {
  apiVersion: '2020-08-27'
});

const PRODUCTS = [
  {
    product: 'VERTICAL',
    sizes: [
      {
        price: 420,
        product: 'SMALL'
      },
      {
        price: 840,
        product: 'MEDIUM'
      },
      {
        price: 1050,
        product: 'LARGE'
      },
      {
        price: 1400,
        product: 'XLARGE'
      },
      {
        price: 1750,
        product: 'JUMBO'
      }
    ]
  },
  {
    product: 'HORIZONTAL',
    sizes: [
      {
        price: 420,
        product: 'SMALL'
      },
      {
        price: 840,
        product: 'MEDIUM'
      },
      {
        price: 1050,
        product: 'LARGE'
      },
      {
        price: 1400,
        product: 'XLARGE'
      },
      {
        price: 1750,
        product: 'JUMBO'
      }
    ]
  },
  {
    product: 'SQUARE',

    sizes: [
      {
        price: 280,
        product: 'SMALL'
      },
      {
        price: 420,
        product: 'MEDIUM'
      },
      {
        price: 1120,
        product: 'LARGE'
      },
      {
        price: 1750,
        product: 'XLARGE'
      },
      {
        price: 2520,
        product: 'JUMBO'
      }
    ]
  },
  {
    product: 'PORTRAIT',

    sizes: [
      {
        price: 139,
        product: 'PORTRAIT'
      }
    ]
  }
];

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
    }
  },
  Mutation: {
    newSaleOrder: async (_, { input }) => {
      if (!input) throw new Error('No input');
      const isProduct = PRODUCTS.find(
        (product) => product.product === input.product
      );
      if (!isProduct) throw new Error('Product not found');
      const isSize = isProduct.sizes.find(
        (size) => size.product === input.size
      );
      if (!isSize) throw new Error('Size not found');

      const paymentIntent = await stripe.paymentIntents.create({
        amount: isSize.price,
        currency: 'usd',
        payment_method_types: ['card']
      });

      if (!paymentIntent) throw new Error('Payment intent not found');

      const saleOrder = await SaleOrder.create({
        ...input,
        price: isSize.price,
        quantity: 1,
        stripeId: paymentIntent.id,
        secret: paymentIntent.client_secret
      });
      if (!saleOrder) throw new Error('Error creating sale order');
      return saleOrder;
    }
  }
};

export default resolvers;
