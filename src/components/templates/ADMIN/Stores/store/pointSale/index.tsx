import { useQuery } from '@apollo/client';
import { css, SerializedStyles } from '@emotion/react';
import { GET_BOARDS } from '@Src/apollo/client/query/boards';
import { GETPRODUCTS } from '@Src/apollo/client/query/products';
import MoleculeCardBoard from '@Src/components/@molecules/moleculeCardBoard';
import MoleculeCardProduct from '@Src/components/@molecules/moleculeCardProduct';

export type ItemCardShopType = {
  id: string;
  image: string;
  name: string;
  variant?: string;
  price: number;
  quantity: number;
  type: string;
  customCSS?: SerializedStyles;
};

import {
  AtomButton,
  AtomLoader,
  AtomText,
  AtomWrapper,
  ItemCartShop
} from '@sweetsyui/ui';
import { IQueryFilter } from 'graphql';
import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';

const variablesSale = {
  tax: 0.16,
  discount: 200
};

const PointSale: FC = () => {
  const router = useRouter();
  const [cartShop, setCartShop] = useState<ItemCardShopType[]>([]);
  const { data: boards } = useQuery<IQueryFilter<'getBoards'>>(GET_BOARDS);
  const { data, loading } = useQuery<IQueryFilter<'getProducts'>>(GETPRODUCTS, {
    variables: {
      filter: {
        store: router?.query?.id?.[1]
      }
    }
  });
  //   console.log([query.id]?.flat().find((_, i) => i === 1));
  //   console.log(router?.query?.id?.[router.query.id.length - 2]);
  //   console.log(router?.query?.id?.[1]);
  //   console.log(boards?.getBoards);
  console.log(`cartshop`, cartShop);
  return (
    <AtomWrapper
      padding="10px 0"
      flexDirection="row"
      customCSS={css`
        height: calc(100vh - 140px);
        gap: 30px;
      `}
    >
      <AtomWrapper
        width="70%"
        height="100%"
        customCSS={css`
          overflow: auto;
          justify-content: flex-start;
          padding-right: 1rem;
        `}
      >
        <AtomWrapper
          height="max-content"
          customCSS={css`
            flex-direction: row;
            justify-content: flex-start;

            flex-wrap: wrap;
            gap: 1rem;
          `}
        >
          {loading ? (
            <AtomWrapper
              customCSS={css`
                width: 30.3%;
                height: 300px;
                background-color: #2e2e35;
                justify-content: space-between;
                border-radius: 8px;
              `}
            >
              <AtomLoader
                isLoading
                type="small"
                width="100%"
                height="100%"
                colorLoading="white"
              />
            </AtomWrapper>
          ) : (
            <>
              {boards?.getBoards?.map((board) => (
                <MoleculeCardBoard
                  key={board?.id}
                  {...board}
                  setState={setCartShop}
                />
              ))}
              {data?.getProducts?.map((product) => (
                <MoleculeCardProduct
                  key={product?.id}
                  {...product}
                  setState={setCartShop}
                />
              ))}
            </>
          )}
        </AtomWrapper>
      </AtomWrapper>
      <AtomWrapper width="30%" height="100%">
        <AtomWrapper
          maxHeight="770px"
          justifyContent="flex-start"
          customCSS={css`
            height: 770px;
            overflow-y: auto;
          `}
        >
          {cartShop.map((item) => (
            <ItemCartShop
              key={item.id}
              {...item}
              src={item.image}
              buttonProps={{
                onClick: () => {
                  setCartShop((cartShop) =>
                    cartShop.filter((_) => _.id !== item.id)
                  );
                }
              }}
              //setState={setCartShop}
            >
              <AtomWrapper
                flexDirection="row"
                width="100%"
                alignItems="center"
                customCSS={css`
                  gap: 1rem;
                `}
              >
                <AtomWrapper width={item.type !== 'Product' ? '100%' : '50%'}>
                  <AtomText color="#ffffff">{item.name}</AtomText>
                  <AtomText color="#ffffff">$ {item.price}</AtomText>
                </AtomWrapper>
                {item.type === 'Product' && (
                  <AtomWrapper
                    width="50%"
                    flexDirection="row"
                    alignItems="center"
                    customCSS={css`
                      gap: 0.5rem;
                    `}
                  >
                    <AtomButton
                      padding="0px 10px"
                      disabled={item.quantity === 1}
                      onClick={() => {
                        setCartShop(
                          cartShop.map((item) => {
                            if (item.id === item.id) {
                              return {
                                ...item,
                                quantity: item.quantity - 1
                              };
                            }
                            return item;
                          })
                        );
                      }}
                    >
                      <AtomText color="#ffffff">-</AtomText>
                    </AtomButton>
                    <AtomText color="#ffffff">{item.quantity}</AtomText>
                    <AtomButton
                      padding="0px 10px"
                      onClick={() => {
                        setCartShop(
                          cartShop.map((item) => {
                            if (item.id === item.id) {
                              return {
                                ...item,
                                quantity: item.quantity + 1
                              };
                            }
                            return item;
                          })
                        );
                      }}
                    >
                      <AtomText color="#ffffff">+</AtomText>
                    </AtomButton>
                  </AtomWrapper>
                )}
                {item.type === 'Board' && (
                  <AtomWrapper
                    width="50%"
                    alignItems="center"
                    customCSS={css`
                      gap: 0.5rem;
                    `}
                  >
                    <AtomText color="#ffffff">{item?.variant}</AtomText>
                  </AtomWrapper>
                )}
              </AtomWrapper>
            </ItemCartShop>
          ))}
        </AtomWrapper>
        <AtomWrapper
          height="100%"
          justifyContent="flex-end"
          customCSS={css`
            gap: 10px;
          `}
        >
          <AtomButton width="100%" backgroundColor="#eeeeee" color="#000000">
            Apply Coupon
          </AtomButton>
          <AtomWrapper
            flexDirection="row"
            flexWrap="wrap"
            customCSS={css`
              span {
                color: #ffffff;
                border: 1px solid #ffffff;
                padding: 5px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
              }
            `}
          >
            <AtomText width="70%">Subtotal</AtomText>
            <AtomText width="30%" align="right">
              {`$${cartShop.reduce((acc, item) => {
                return acc + item.price * item.quantity;
              }, 0)}`}
            </AtomText>
            <AtomText width="70%">Tax</AtomText>
            <AtomText width="30%" align="right" maxWidth="30%">
              {`$${
                (cartShop.reduce((acc, item) => {
                  return acc + item.price * item.quantity;
                }, 0) /
                  (variablesSale.tax + 1)) *
                variablesSale.tax
              }`}
            </AtomText>
            <AtomText
              width="70%"
              customCSS={css`
                color: #2eaade !important;
              `}
            >
              Discount
            </AtomText>
            <AtomText width="30%" align="right">
              $-0
            </AtomText>
            <AtomText width="100%">Coupon</AtomText>
            <AtomText width="70%">Grand Total</AtomText>
            <AtomText width="30%" align="right">
              $0
            </AtomText>
          </AtomWrapper>
          <AtomWrapper
            flexDirection="row"
            flexWrap="wrap"
            customCSS={css`
              gap: 10px 0;
              justify-content: space-between;
            `}
          >
            <AtomButton width="50%" backgroundColor="#f1576c" fontSize="10px">
              Select Customer
            </AtomButton>
            <AtomButton width="45%" backgroundColor="#f1576c" fontSize="10px">
              Pay
            </AtomButton>
          </AtomWrapper>
        </AtomWrapper>
      </AtomWrapper>
    </AtomWrapper>
  );
};
export default PointSale;
