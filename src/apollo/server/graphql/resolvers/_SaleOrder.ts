import { Resolvers } from '@apollo/client';
import SaleOrder from '../../models/saleOrder';
import Product from '../../models/products';
import Board from '../../models/board';
import BoardSize from '../../models/boardSize';
import BoardSelected from '../../models/boardSelected';
import User from '../../models/users';
import Store from '../../models/store';
import StoreType from '../../models/storeTypes';
import ColorSaleOrder from '../../models/colorSaleOrder';
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
        .populate({
          path: 'board',
          populate: {
            path: 'board',
            populate: {
              path: 'type'
            }
          }
        })
        .populate({
          path: 'board',
          populate: {
            path: 'size',
            populate: {
              path: 'type'
            }
          }
        })
        .populate('store')
        .populate({
          path: 'colorsaleorder',
          populate: {
            path: 'colors',
            populate: {
              path: 'color'
            }
          }
        });
      if (!saleOrders) throw new Error('No sale orders found');
      return saleOrders;
    },
    getSaleOrderById: async (_, { id }) => {
      const saleOrder = await SaleOrder.findById(id)
        .populate('customer')
        .populate('product')
        .populate({
          path: 'board',
          populate: {
            path: 'board',
            populate: {
              path: 'type'
            }
          }
        })
        .populate({
          path: 'board',
          populate: {
            path: 'size',
            populate: {
              path: 'type'
            }
          }
        })
        .populate('store')
        .populate({
          path: 'colorsaleorder',
          populate: {
            path: 'colors',
            populate: {
              path: 'color'
            }
          }
        });
      if (!saleOrder) throw new Error('No sale order found');

      return saleOrder.toJSON();
    },
    paySaleOrder: async (_, { id }) => {
      const saleOrder = await SaleOrder.findById(id)
        .populate('customer')
        .populate('product')
        .populate({
          path: 'board',
          populate: {
            path: 'board',
            populate: {
              path: 'type'
            }
          }
        })
        .populate({
          path: 'board',
          populate: {
            path: 'size',
            populate: {
              path: 'type'
            }
          }
        })
        .populate('store')
        .populate({
          path: 'colorsaleorder',
          populate: {
            path: 'colors',
            populate: {
              path: 'color'
            }
          }
        });
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
      const { product, board, customer, store, colorsaleorder } = input;

      if (!product && !board) {
        throw new Error('Product or board is required');
      }

      const productExist = async () => {
        if (!product) {
          return null;
        }
        const products = product.map(async (e: string) => {
          if (e) {
            const findProduct = await Product.findById(e);
            if (!findProduct) throw new Error('Product not found');
            return findProduct;
          }
        });
        return (await Promise.all(products)).filter(
          (e) => typeof e !== 'undefined'
        );
      };

      const boardExist = async () => {
        if (!board) {
          return null;
        }
        const boards = board.map(
          async (e: { board: string; size: string; pdf: string }) => {
            if ((e.board && e.size, e.pdf)) {
              const findBoard = await Board.findById(e.board);
              const findBoardSize = await BoardSize.findById(e.size);
              if (!findBoard) throw new Error('Board not found');
              if (!findBoardSize) throw new Error('Board size not found');

              const createBoardSelected = await BoardSelected.create({
                board: findBoard,
                size: findBoardSize,
                pdf: e.pdf
              });

              const getBoardSelected = await BoardSelected.findById(
                createBoardSelected.id
              )
                .populate('board')
                .populate('size');

              if (!getBoardSelected)
                throw new Error('Board selected not found');

              return getBoardSelected;
            }
          }
        );
        return (await Promise.all(boards)).filter(
          (e) => typeof e !== 'undefined'
        );
      };

      const quantityExist = () => {
        const productQuantity = () => {
          return getProduct?.length ?? 0;
        };
        const boardQuantity = () => {
          return getBoard?.length ?? 0;
        };
        return productQuantity() + boardQuantity();
      };

      const priceExist = () => {
        const productPrice = () => {
          return getProduct?.reduce((a, b) => a + b.price, 0) ?? 0;
        };
        const boardPrice = () => {
          return getBoard?.reduce((a, b) => a + b.size.price, 0) ?? 0;
        };
        return productPrice() + boardPrice();
      };

      const currencyExist = () => {
        const productCurrency = () => {
          return getProduct?.reduce((a, b) => [...a, b.currency], []) ?? [];
        };
        const boardCurrency = () => {
          return getBoard?.reduce((a, b) => [...a, b.board.currency], []) ?? [];
        };
        const currency = [
          ...new Set([...productCurrency(), ...boardCurrency()])
        ];
        if (currency.length > 1) throw new Error('Currency not match');
        return currency[0] ?? 'USD';
      };

      const colorSaleOrderExist = async () => {
        if (!colorsaleorder) {
          return {};
        }
        const getColorSaleOrder = await ColorSaleOrder.findById(colorsaleorder);
        if (!getColorSaleOrder) throw new Error('Color sale order not found');
        return {
          colorsaleorder: getColorSaleOrder._id
        };
      };

      const getProduct = await productExist();
      const getBoard = await boardExist();
      const getQuantity = quantityExist();
      const getPrice = priceExist();
      const getCurrency = currencyExist();
      const getColorSaleOrder = await colorSaleOrderExist();

      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(getPrice),
        currency: getCurrency,
        payment_method_types: ['card']
      });

      if (!paymentIntent) throw new Error('Payment intent not found');

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
        stripeId: paymentIntent.id,
        secret: paymentIntent.client_secret,
        product: getProduct?.map((e) => e._id),
        board: getBoard?.map((e) => e._id),
        ...customerGet,
        ...getColorSaleOrder,
        store: storeGet._id,
        quantity: getQuantity,
        total: getPrice,
        currency: getCurrency
      });
      if (!saleOrder) throw new Error('Error creating sale order');
      const getSaleOrder = await SaleOrder.findById(saleOrder._id)
        .populate('customer')
        .populate('product')
        .populate({
          path: 'board',
          populate: {
            path: 'board',
            populate: {
              path: 'type'
            }
          }
        })
        .populate({
          path: 'board',
          populate: {
            path: 'size',
            populate: {
              path: 'type'
            }
          }
        })
        .populate('store')
        .populate({
          path: 'colorsaleorder',
          populate: {
            path: 'colors.color'
          }
        });

      return getSaleOrder;
    }
  }
};

export default resolvers;
