import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { css, SerializedStyles } from '@emotion/react';
import { NEWCOLORSALEORDER } from '@Src/apollo/client/mutation/color';
import { NEWSALEORDERCASH } from '@Src/apollo/client/mutation/saleOrder';
import { GET_BOARDS } from '@Src/apollo/client/query/boards';
import { GETPRODUCTS } from '@Src/apollo/client/query/products';
import { PAYSALEORDERCASH } from '@Src/apollo/client/query/saleOrder';
import { GETUSERS } from '@Src/apollo/client/query/user';
// import MoleculeCardBoard from '@Src/components/@molecules/moleculeCardBoard';
import MoleculeCardBoardAll from '@Src/components/@molecules/moleculeCardBoardAll';
import MoleculeCardProduct from '@Src/components/@molecules/moleculeCardProduct';
import PageIndex from '@Src/components/pages/index';
import { colorsAtoms, ICart, setCartAtom } from '@Src/jotai/cart';
import { RootStateType } from '@Src/redux/reducer';

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
  AtomIcon,
  AtomImage,
  AtomInput,
  AtomLoader,
  AtomModal,
  AtomText,
  AtomWrapper
} from '@sweetsyui/ui';
import { IQueryFilter } from 'graphql';
import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useRouter } from 'next/router';
import React, { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';

const cashAtom = atom(null as null | number);
const cashTempAtom = atom(null as null | number);
const payAtom = atom(false);
const payedAtom = atom(false);
const paymentsAtom = atom(null as null | string);
const cartOnlyBoardAtom = atom((get) =>
  get(setCartAtom).filter((e) => e.type === 'BOARD')
);
const cartOnlyProductAtom = atom((get) =>
  get(setCartAtom).filter((e) => e.type !== 'BOARD')
);
const sellerAtom = atom('DEFAULT');
const taxAtom = atom(0);
const discountAtom = atom(0);

const cardTaxAtom = atom(0);

const PointSale: FC = () => {
  const [pay, setPay] = useAtom(payAtom);
  const [payments, setPayments] = useAtom(paymentsAtom);
  const [payed, setPayed] = useAtom(payedAtom);
  const [cash, setCash] = useAtom(cashAtom);
  const [cashTemp, setCashTemp] = useAtom(cashTempAtom);
  const [cart, setCart] = useAtom(setCartAtom);
  const cartOnlyBoard = useAtomValue(cartOnlyBoardAtom);
  const cartOnlyProduct = useAtomValue(cartOnlyProductAtom);
  const [cardTax, setCardTax] = useAtom(cardTaxAtom);
  const [colors] = useAtom(colorsAtoms);
  const router = useRouter();
  const params = useParams();
  const [seller, setSeller] = useAtom(sellerAtom);
  const modal = useSelector((state: RootStateType) => state.modal);
  const { data: boards } = useQuery<IQueryFilter<'getBoards'>>(GET_BOARDS);
  const { data, loading } = useQuery<IQueryFilter<'getProducts'>>(GETPRODUCTS, {
    variables: {
      filter: {
        store: router?.query?.id?.[1]
      }
    }
  });

  const { data: dataUsers } = useQuery<IQueryFilter<'getUsers'>>(GETUSERS, {
    variables: {
      skip: !router?.query?.id?.[1],
      filter: {
        store: router?.query?.id?.[1]
      }
    }
  });

  const [EXENEWSALEORDER, { loading: load1 }] = useMutation(NEWSALEORDERCASH);
  const [EXENEWCOLORSALEORDER, { loading: load2 }] =
    useMutation(NEWCOLORSALEORDER);
  const [LAZYPAYSALEORDERCASH, { loading: load3 }] =
    useLazyQuery(PAYSALEORDERCASH);

  const [discount, setDiscount] = useAtom(discountAtom);

  const [tax, setTax] = useAtom(taxAtom);

  const SubTotal = useMemo(
    () =>
      cart.reduce((acc, item) => {
        const price =
          item.type === 'BOARD'
            ? boards?.getBoards
                ?.find((e) => e?.id === item.board?.id)
                ?.sizes?.find((e) => e?.id === item.board?.size)?.price
            : data?.getProducts?.find((e) => e?.id === item.product?.id)?.price;
        const priceQuantity = (price ?? 0) * item.quantity;
        return acc + (priceQuantity ?? 0);
      }, 0),
    [cart.length, boards?.getBoards?.length, data?.getProducts?.length]
  );
  const Discount = useMemo(
    () => Number((SubTotal * (discount / 100)).toFixed(2)),
    [SubTotal, discount]
  );

  const Tax = useMemo(
    () => Number((SubTotal * (tax / 100)).toFixed(2)),
    [SubTotal, tax]
  );

  return (
    <>
      <AtomWrapper
        padding="10px 0"
        flexDirection="row"
        customCSS={css`
          min-height: calc(100vh - 140px);
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
                <AtomText
                  customCSS={css`
                    font-size: 25px;
                    font-weight: bold;
                    color: #fff;
                  `}
                >
                  Boards
                </AtomText>
                <AtomWrapper
                  customCSS={css`
                    width: 100%;
                    height: max-content;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    gap: 15px;
                  `}
                >
                  <MoleculeCardBoardAll />
                </AtomWrapper>
                <AtomText
                  customCSS={css`
                    font-size: 25px;
                    font-weight: bold;
                    color: #fff;
                  `}
                >
                  Bricks & Products
                </AtomText>
                <AtomWrapper
                  customCSS={css`
                    width: 100%;
                    height: max-content;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    gap: 15px;
                  `}
                >
                  {data?.getProducts?.map((product) => (
                    <MoleculeCardProduct key={product?.id} {...product} />
                  ))}
                </AtomWrapper>
              </>
            )}
          </AtomWrapper>
        </AtomWrapper>
        <AtomWrapper
          width="30%"
          height="100%"
          customCSS={css`
            gap: 30px;
          `}
        >
          <AtomWrapper
            maxHeight="770px"
            justifyContent="flex-start"
            customCSS={css`
              height: 770px;
              overflow-y: auto;
              gap: 10px;
            `}
          >
            {cartOnlyBoard.map((e) => (
              <BOARD key={e.id} {...e} boards={boards} />
            ))}
            {cartOnlyProduct.map((e) => (
              <PRODUCT key={e.id} {...e} />
            ))}
          </AtomWrapper>

          <AtomWrapper
            height="100%"
            justifyContent="flex-end"
            customCSS={css`
              gap: 10px;
            `}
          >
            <AtomWrapper
              customCSS={css`
                width: 100%;
                flex-wrap: wrap;
                flex-direction: row;
                justify-content: flex-start;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 5px;
              `}
            >
              {colors.map((e) => {
                const nameColor = data?.getProducts?.find(
                  (p) => p?.color?.id === e.id
                )?.name;
                return (
                  <AtomWrapper
                    key={e.color}
                    customCSS={css`
                      flex-direction: row;
                      max-width: max-content;
                      gap: 4px;
                    `}
                  >
                    <AtomWrapper
                      customCSS={css`
                        width: 25px;
                        height: 25px;
                        padding: 4px;
                        background-color: ${e.color};
                        border: 1px solid #eeeeee;
                      `}
                    >
                      <AtomImage src={e.img} alt={e.img} />
                    </AtomWrapper>
                    <AtomText
                      customCSS={css`
                        ${e.rest > 0
                          ? css`
                              color: #e42222;
                            `
                          : css`
                              color: #14cf68;
                            `}
                        font-size: 10px;
                        font-weight: bold;
                      `}
                    >
                      {e.rest > 0 ? e.rest : `+${Math.abs(e.rest)}`} {nameColor}
                    </AtomText>
                  </AtomWrapper>
                );
              })}
            </AtomWrapper>
            {colors.length > 0 && (
              <AtomButton
                onClick={() => {
                  const AddedColor = colors.map((e) => ({
                    ...e,
                    add: Math.ceil(e.rest / 50)
                  }));
                  AddedColor?.map((e) => {
                    const product = data?.getProducts?.find(
                      (color) => color?.color?.id === e.id
                    );
                    const isCart = cart.find((item) => item.id === product?.id);
                    if (isCart) {
                      Array.from({ length: Math.abs(e.add) }, () => {
                        setCart({
                          key: e.add > 0 ? 'ADDQUANTITY' : 'REMOVEQUANTITY',
                          payload: product?.id
                        });
                      });
                    } else {
                      setCart({
                        key: 'ADDCART',
                        payload: {
                          id: product?.id,
                          type: 'PRODUCT',
                          quantity: Math.abs(e.add),
                          product: product
                        } as ICart
                      });
                    }
                  });
                }}
                width="100%"
                backgroundColor="#eeeeee"
                color="#000000"
              >
                Add All Colors
              </AtomButton>
            )}
            <AtomWrapper
              flexDirection="row"
              flexWrap="wrap"
              customCSS={css`
                span {
                  font-size: 12px;
                  background-color: #202026;
                  border-radius: 4px;
                  border: 2px solid #2e2e35;
                  color: #ffffff;
                  padding: 8px 15px;

                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                }
              `}
            >
              <AtomText width="70%">Subtotal</AtomText>
              <AtomText width="30%" align="right">
                {`$${SubTotal}`}
              </AtomText>
              <AtomText
                width="70%"
                customCSS={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  gap: 20px;
                `}
              >
                Discount
                <AtomWrapper
                  customCSS={css`
                    flex-direction: row;
                    gap: 10px;
                  `}
                >
                  <AtomInput
                    value={`${discount}`}
                    onChange={(e) => setDiscount(e.target.value)}
                    type="number"
                    customCSS={css`
                      input {
                        color: #ffffff;
                        background-color: #2e2e35;
                        :focus {
                          background-color: #fe6a6a;
                        }
                        border: none;
                        border-radius: 2px;
                      }
                      height: 18px;
                      width: 50px;
                    `}
                  />
                  %
                </AtomWrapper>
              </AtomText>
              <AtomText width="30%" align="right" maxWidth="30%">
                -${Discount}
              </AtomText>
              <AtomText
                width="70%"
                customCSS={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  gap: 20px;
                `}
              >
                Tax
                <AtomWrapper
                  customCSS={css`
                    flex-direction: row;
                    gap: 10px;
                  `}
                >
                  <AtomInput
                    value={`${tax}`}
                    onChange={(e) => setTax(e.target.value)}
                    type="number"
                    customCSS={css`
                      input {
                        color: #ffffff;
                        background-color: #2e2e35;
                        :focus {
                          background-color: #fe6a6a;
                        }
                        border: none;
                        border-radius: 2px;
                      }
                      height: 18px;
                      width: 50px;
                    `}
                  />
                  %
                </AtomWrapper>
              </AtomText>
              <AtomText width="30%" align="right" maxWidth="30%">
                ${Tax}
              </AtomText>
              <AtomText width="70%">Grand Total</AtomText>
              <AtomText width="30%" align="right">
                ${SubTotal - Discount + Tax}
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
              <AtomInput
                labelWidth="45%"
                customCSS={css`
                  select {
                    background-color: #f1576c;
                    color: #ffffff;
                    border: none;
                    height: 31px;
                    font-size: 10px;
                  }
                `}
                type="select"
                value={seller}
                // selecciona una opcion (ingles)
                defaultText="Select a option"
                onChange={(e) => setSeller(e.target.value)}
                options={dataUsers?.getUsers
                  ?.filter((e) => e?.role?.name === 'AGENT')
                  ?.map((e) => ({
                    id: `${e?.id}`,
                    label: `${e?.name}`,
                    value: `${e?.id}`
                  }))}
              />
              <AtomButton
                width="45%"
                backgroundColor="#f1576c"
                fontSize="10px"
                onClick={() => setPay(true)}
                disabled={seller === 'DEFAULT' || cart.length === 0}
              >
                Pay
              </AtomButton>
            </AtomWrapper>
          </AtomWrapper>
        </AtomWrapper>
      </AtomWrapper>
      <AtomModal
        componentProps={{
          wrapperProps: {
            width: 'max-content',
            height: 'max-content',
            backgroundColor: '#313139'
          }
        }}
        isOpen={modal.modal}
        component={<PageIndex />}
      />
      <AtomModal
        componentProps={{
          wrapperProps: {
            backgroundColor: '#2e2e35'
          }
        }}
        isOpen={pay}
        component={
          <AtomWrapper>
            {payed ? (
              <>
                {payments === 'CASH' && (
                  <AtomWrapper
                    customCSS={css`
                      max-width: 700px;
                      align-self: center;
                      align-items: center;
                      width: 100%;
                      height: 100%;
                      gap: 20px;
                    `}
                  >
                    <AtomWrapper flexDirection="row" padding="0 30px">
                      <AtomWrapper width="50%">
                        <AtomWrapper
                          maxHeight="300px"
                          justifyContent="flex-start"
                          customCSS={css`
                            gap: 10px;
                            overflow-y: scroll;
                          `}
                        >
                          {cartOnlyBoard.map((e) => (
                            <BOARD key={e.id} {...e} boards={boards} />
                          ))}
                          {cartOnlyProduct.map((e) => (
                            <PRODUCT key={e.id} {...e} />
                          ))}
                        </AtomWrapper>
                      </AtomWrapper>

                      <AtomWrapper
                        width="50%"
                        height="100%"
                        alignItems="flex-end"
                      >
                        <AtomWrapper
                          flexDirection="row"
                          flexWrap="wrap"
                          customCSS={css`
                            span {
                              font-size: 12px;
                              background-color: #202026;
                              border-radius: 4px;
                              border: 2px solid #2e2e35;
                              color: #ffffff;
                              padding: 8px 15px;

                              text-overflow: ellipsis;
                              overflow: hidden;
                              white-space: nowrap;
                            }
                          `}
                        >
                          <AtomText width="70%">Subtotal</AtomText>
                          <AtomText width="30%" align="right">
                            {`$${SubTotal}`}
                          </AtomText>
                          <AtomText
                            width="70%"
                            customCSS={css`
                              display: flex;
                              flex-direction: row;
                              align-items: center;
                              gap: 20px;
                            `}
                          >
                            Discount
                            <AtomWrapper
                              customCSS={css`
                                flex-direction: row;
                                gap: 10px;
                              `}
                            >
                              <AtomInput
                                value={`${discount}`}
                                onChange={(e) => setDiscount(e.target.value)}
                                type="number"
                                customCSS={css`
                                  input {
                                    color: #ffffff;
                                    background-color: #2e2e35;
                                    :focus {
                                      background-color: #fe6a6a;
                                    }
                                    border: none;
                                    border-radius: 2px;
                                  }
                                  height: 18px;
                                  width: 50px;
                                `}
                              />
                              %
                            </AtomWrapper>
                          </AtomText>
                          <AtomText width="30%" align="right" maxWidth="30%">
                            -${Discount}
                          </AtomText>
                          <AtomText
                            width="70%"
                            customCSS={css`
                              display: flex;
                              flex-direction: row;
                              align-items: center;
                              gap: 20px;
                            `}
                          >
                            Tax
                            <AtomWrapper
                              customCSS={css`
                                flex-direction: row;
                                gap: 10px;
                              `}
                            >
                              <AtomInput
                                value={`${tax}`}
                                onChange={(e) => setTax(e.target.value)}
                                type="number"
                                customCSS={css`
                                  input {
                                    color: #ffffff;
                                    background-color: #2e2e35;
                                    :focus {
                                      background-color: #fe6a6a;
                                    }
                                    border: none;
                                    border-radius: 2px;
                                  }
                                  height: 18px;
                                  width: 50px;
                                `}
                              />
                              %
                            </AtomWrapper>
                          </AtomText>
                          <AtomText width="30%" align="right" maxWidth="30%">
                            ${Tax}
                          </AtomText>
                          <AtomText width="70%">Grand Total</AtomText>
                          <AtomText width="30%" align="right">
                            ${SubTotal - Discount + Tax}
                          </AtomText>
                          <AtomText
                            width="100%"
                            customCSS={css`
                              display: flex;
                              flex-direction: row;
                              align-items: center;
                              gap: 20px;
                            `}
                          >
                            Client payment
                            <AtomInput
                              height="22px"
                              labelWidth="100%"
                              type="number"
                              autoFocus
                              value={`${cashTemp}`}
                              placeholder="$0.00"
                              onChange={(e) => setCashTemp(e.target.value)}
                              onBlur={() => setCash(cashTemp)}
                              customCSS={css`
                                input {
                                  color: #ffffff;
                                  border: none;
                                  border-radius: 2px;
                                  background-color: #2e2e35;
                                  :focus {
                                    background-color: #fe6a6a;
                                  }
                                }
                                height: 18px;
                                width: 100%;
                              `}
                            />
                          </AtomText>

                          <AtomText width="70%">Change</AtomText>
                          <AtomText
                            width="30%"
                            align="right"
                            customCSS={css`
                              color: ${Number(cash) < SubTotal - Discount + Tax
                                ? '#a83240'
                                : '#22b620'} !important;
                            `}
                          >
                            ${Number(cash) - SubTotal - Discount + Tax}
                          </AtomText>
                        </AtomWrapper>
                      </AtomWrapper>
                    </AtomWrapper>
                    <AtomWrapper
                      flexDirection="row"
                      alignItems="flex-end"
                      customCSS={css`
                        gap: 50px;
                      `}
                    >
                      <AtomButton
                        onClick={() => {
                          setPay(!pay);
                          setPayments('');
                          setPayed(false);
                        }}
                      >
                        CANCEL
                      </AtomButton>
                      <AtomButton
                        loading={load2 || load1 || load3}
                        disabled={Number(cash) < SubTotal - Discount + Tax}
                        onClick={() => {
                          EXENEWCOLORSALEORDER({
                            variables: {
                              input: {
                                colors: colors?.map((color) => ({
                                  color: color.id,
                                  quantity: color.count
                                }))
                              }
                            }
                          }).then((e) => {
                            const id = e.data.newColorSaleOrder.id;
                            EXENEWSALEORDER({
                              variables: {
                                input: {
                                  store: params.id,
                                  customer: seller,
                                  board: cart
                                    ?.filter((e) => e.type === 'BOARD')
                                    .map((e) => ({
                                      board: e?.board?.id,
                                      size: e?.board?.size,
                                      pdf: e?.board?.pdf
                                    })),
                                  product: cart
                                    ?.filter((e) => e.type === 'PRODUCT')
                                    .map((e) => e?.product?.id),
                                  colorsaleorder: [id],
                                  price: SubTotal - Discount + Tax,
                                  productQuantity: cart
                                    ?.filter((e) => e.type === 'PRODUCT')
                                    .map((e) => ({
                                      id: e?.product?.id,
                                      quantity: e.quantity
                                    }))
                                }
                              }
                            }).then((e) => {
                              LAZYPAYSALEORDERCASH({
                                variables: {
                                  id: e.data.newSaleOrderCash.id
                                }
                              }).then(
                                () =>
                                  (window.location.href = `http://${
                                    location.host
                                  }/dashboard/${
                                    Array.isArray(router?.query?.id)
                                      ? router?.query?.id?.join('/')
                                      : ''
                                  }/ticket/${e.data.newSaleOrderCash.id.toString()}`)
                              );
                            });
                          });
                        }}
                      >
                        PAY
                      </AtomButton>
                    </AtomWrapper>
                  </AtomWrapper>
                )}
                {payments === 'CARD' && (
                  <AtomWrapper
                    key="card"
                    customCSS={css`
                      max-width: 700px;
                      align-self: center;
                      align-items: center;
                      width: 100%;
                      height: 100%;
                      gap: 20px;
                    `}
                  >
                    <AtomWrapper flexDirection="row" padding="0 30px">
                      <AtomWrapper width="50%">
                        <AtomWrapper
                          maxHeight="300px"
                          justifyContent="flex-start"
                          customCSS={css`
                            gap: 10px;
                            overflow-y: scroll;
                          `}
                        >
                          {cartOnlyBoard.map((e) => (
                            <BOARD key={e.id} {...e} boards={boards} />
                          ))}
                          {cartOnlyProduct.map((e) => (
                            <PRODUCT key={e.id} {...e} />
                          ))}
                        </AtomWrapper>
                      </AtomWrapper>

                      <AtomWrapper
                        width="50%"
                        height="100%"
                        alignItems="flex-end"
                      >
                        <AtomWrapper
                          flexDirection="row"
                          flexWrap="wrap"
                          customCSS={css`
                            span {
                              font-size: 12px;
                              background-color: #202026;
                              border-radius: 4px;
                              border: 2px solid #2e2e35;
                              color: #ffffff;
                              padding: 8px 15px;

                              text-overflow: ellipsis;
                              overflow: hidden;
                              white-space: nowrap;
                            }
                          `}
                        >
                          <AtomText width="70%">Subtotal</AtomText>
                          <AtomText width="30%" align="right">
                            {`$${SubTotal}`}
                          </AtomText>
                          <AtomText
                            width="70%"
                            customCSS={css`
                              display: flex;
                              flex-direction: row;
                              align-items: center;
                              gap: 20px;
                            `}
                          >
                            Discount
                            <AtomWrapper
                              customCSS={css`
                                flex-direction: row;
                                gap: 10px;
                              `}
                            >
                              <AtomInput
                                value={`${discount}`}
                                onChange={(e) => setDiscount(e.target.value)}
                                type="number"
                                customCSS={css`
                                  input {
                                    color: #ffffff;
                                    background-color: #2e2e35;
                                    :focus {
                                      background-color: #fe6a6a;
                                    }
                                    border: none;
                                    border-radius: 2px;
                                  }
                                  height: 18px;
                                  width: 50px;
                                `}
                              />
                              %
                            </AtomWrapper>
                          </AtomText>
                          <AtomText width="30%" align="right" maxWidth="30%">
                            -${Discount}
                          </AtomText>
                          <AtomText
                            width="70%"
                            customCSS={css`
                              display: flex;
                              flex-direction: row;
                              align-items: center;
                              gap: 20px;
                            `}
                          >
                            Tax
                            <AtomWrapper
                              customCSS={css`
                                flex-direction: row;
                                gap: 10px;
                              `}
                            >
                              <AtomInput
                                value={`${tax}`}
                                onChange={(e) => setTax(e.target.value)}
                                type="number"
                                customCSS={css`
                                  input {
                                    color: #ffffff;
                                    background-color: #2e2e35;
                                    :focus {
                                      background-color: #fe6a6a;
                                    }
                                    border: none;
                                    border-radius: 2px;
                                  }
                                  height: 18px;
                                  width: 50px;
                                `}
                              />
                              %
                            </AtomWrapper>
                          </AtomText>
                          <AtomText width="30%" align="right" maxWidth="30%">
                            ${Tax}
                          </AtomText>
                          <AtomText width="70%">Grand Total</AtomText>
                          <AtomText width="30%" align="right">
                            ${SubTotal - Discount + Tax}
                          </AtomText>
                          <AtomText
                            width="100%"
                            customCSS={css`
                              display: flex;
                              flex-direction: row;
                              align-items: center;
                              gap: 20px;
                            `}
                          >
                            Tax Card
                            <AtomInput
                              height="22px"
                              labelWidth="100%"
                              type="number"
                              autoFocus
                              value={`${cardTax}`}
                              placeholder="$0.00"
                              onChange={(e) => setCardTax(e.target.value)}
                              customCSS={css`
                                input {
                                  color: #ffffff;
                                  border: none;
                                  border-radius: 2px;
                                  background-color: #2e2e35;
                                  :focus {
                                    background-color: #fe6a6a;
                                  }
                                }
                                height: 18px;
                                width: 100%;
                              `}
                            />
                          </AtomText>

                          <AtomText width="70%">To Pay</AtomText>
                          <AtomText
                            width="30%"
                            align="right"
                            customCSS={css`
                              color: #22b620 !important;
                            `}
                          >
                            ${SubTotal - Discount + Tax + Number(cardTax)}
                          </AtomText>
                        </AtomWrapper>
                      </AtomWrapper>
                    </AtomWrapper>
                    <AtomWrapper
                      flexDirection="row"
                      alignItems="flex-end"
                      customCSS={css`
                        gap: 50px;
                      `}
                    >
                      <AtomButton
                        onClick={() => {
                          setPay(!pay);
                          setPayments('');
                          setPayed(false);
                        }}
                      >
                        CANCEL
                      </AtomButton>
                      <AtomButton
                        loading={load2 || load1 || load3}
                        onClick={() => {
                          EXENEWCOLORSALEORDER({
                            variables: {
                              input: {
                                colors: colors?.map((color) => ({
                                  color: color.id,
                                  quantity: color.count
                                }))
                              }
                            }
                          }).then((e) => {
                            const id = e.data.newColorSaleOrder.id;
                            EXENEWSALEORDER({
                              variables: {
                                input: {
                                  store: params.id,
                                  customer: seller,
                                  board: cart
                                    ?.filter((e) => e.type === 'BOARD')
                                    .map((e) => ({
                                      board: e?.board?.id,
                                      size: e?.board?.size,
                                      pdf: e?.board?.pdf
                                    })),
                                  product: cart
                                    ?.filter((e) => e.type === 'PRODUCT')
                                    .map((e) => e?.product?.id),
                                  colorsaleorder: [id],
                                  price:
                                    SubTotal - Discount + Tax + Number(cardTax),
                                  productQuantity: cart
                                    ?.filter((e) => e.type === 'PRODUCT')
                                    .map((e) => ({
                                      id: e?.product?.id,
                                      quantity: e.quantity
                                    }))
                                }
                              }
                            }).then((e) => {
                              LAZYPAYSALEORDERCASH({
                                variables: {
                                  id: e.data.newSaleOrderCash.id
                                }
                              }).then(
                                () =>
                                  (window.location.href = `http://${
                                    location.host
                                  }/dashboard/${
                                    Array.isArray(router?.query?.id)
                                      ? router?.query?.id?.join('/')
                                      : ''
                                  }/ticket/${e.data.newSaleOrderCash.id.toString()}`)
                              );
                            });
                          });
                        }}
                      >
                        PAY
                      </AtomButton>
                    </AtomWrapper>
                  </AtomWrapper>
                )}
              </>
            ) : (
              <AtomWrapper
                customCSS={css`
                  max-width: 700px;
                  align-items: center;
                  justify-content: center;
                  align-self: center;
                  width: 100%;
                  height: 100%;
                `}
              >
                <AtomWrapper
                  customCSS={css`
                    align-items: center;
                    justify-content: center;
                  `}
                >
                  <AtomText
                    customCSS={css`
                      color: #ffffff;
                      font-size: 20px;
                    `}
                  >
                    Payment Method
                  </AtomText>
                </AtomWrapper>
                <AtomWrapper
                  flexDirection="row"
                  height="max-content"
                  justifyContent="space-between"
                  alignItems="center"
                  customCSS={css`
                    gap: 40px;
                    padding: 40px 0;
                  `}
                >
                  {[
                    { id: 1, name: 'Cash', value: 'CASH' },
                    { id: 2, name: 'Debit/Credit Card', value: 'CARD' }
                  ].map((e) => (
                    <AtomButton
                      key={e.id}
                      onClick={() => setPayments(e.value)}
                      customCSS={css`
                        height: 300px;
                        flex-basis: 300px;
                        flex-grow: 1;
                        background-color: transparent;
                        border: 1px solid #f1576c;
                        font-size: 18px;
                        font-weight: 500;
                        ${payments === e.value &&
                        css`
                          background-color: #f1576c;
                        `}
                      `}
                    >
                      {e.name}
                    </AtomButton>
                  ))}
                </AtomWrapper>
                <AtomWrapper
                  customCSS={css`
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                  `}
                >
                  <AtomButton
                    backgroundColor="#f1576c"
                    onClick={() => {
                      setPay(!pay);
                      setPayments('');
                    }}
                  >
                    CANCEL
                  </AtomButton>
                  <AtomButton
                    disabled={!payments}
                    backgroundColor="#f1576c"
                    onClick={() => setPayed(true)}
                  >
                    PAY
                  </AtomButton>
                </AtomWrapper>
              </AtomWrapper>
            )}
          </AtomWrapper>
        }
      />
    </>
  );
};
export default PointSale;

import { useParams } from 'react-router-dom';

const BOARD = (e: ICart) => {
  const { boards } = e;
  const setCart = useSetAtom(setCartAtom);
  const board = boards?.getBoards?.find((x) => x?.id === e.id);
  const size = board?.sizes?.find((x) => x?.id === e.board?.size);
  return (
    <AtomWrapper
      key={e.id}
      customCSS={css`
        width: 100%;
        padding: 15px 20px;
        flex-direction: row;
        background-color: #202026;
        border-radius: 4px;
        gap: 20px;
        color: #fff;
        font-weight: bold;
      `}
    >
      <AtomImage
        customCSS={css`
          width: 60px;
          height: 60px;
        `}
        src={board?.image ?? 'http://via.placeholder.com/300x300'}
        alt={e.id}
      />
      <AtomWrapper
        customCSS={css`
          width: calc(100% - 80px);
          display: flex;
          flex-direction: column;
        `}
      >
        <AtomText
          customCSS={css`
            font-size: 12px;
            font-weight: bold;
            color: #fff;
            margin-bottom: 10px;
          `}
        >
          {board?.description} {size?.title}
        </AtomText>
        <AtomWrapper
          customCSS={css`
            display: flex;
            flex-direction: row;
            width: max-content;
            gap: 10px;
          `}
        >
          <AtomText color="#ffffff">{e.quantity}</AtomText>

          <AtomButton
            padding="4px"
            onClick={() =>
              setCart({
                key: 'REMOVECART',
                payload: board?.id
              })
            }
          >
            <AtomIcon
              width="13px"
              height="13px"
              icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/icons8-basura.svg"
              color="#ffffff"
            />
          </AtomButton>
        </AtomWrapper>
      </AtomWrapper>
    </AtomWrapper>
  );
};

const PRODUCT = (e: ICart) => {
  const setCart = useSetAtom(setCartAtom);
  const { image, name } = e?.product ?? {};
  return (
    <AtomWrapper
      key={e.id}
      customCSS={css`
        width: 100%;
        padding: 15px 20px;
        flex-direction: row;
        background-color: #202026;
        border-radius: 4px;
        gap: 20px;
        color: #fff;
        font-weight: bold;
      `}
    >
      <AtomImage
        customCSS={css`
          width: 60px;
          height: 60px;
        `}
        src={image ?? 'http://via.placeholder.com/300x300'}
        alt={e.id}
      />
      <AtomWrapper
        customCSS={css`
          width: calc(100% - 80px);
          display: flex;
          flex-direction: column;
        `}
      >
        <AtomText
          customCSS={css`
            font-size: 12px;
            font-weight: bold;
            color: #fff;
            margin-bottom: 10px;
          `}
        >
          {name}
        </AtomText>
        <AtomWrapper
          customCSS={css`
            display: flex;
            flex-direction: row;
            width: max-content;
            gap: 10px;
          `}
        >
          <AtomButton
            padding="0px 10px"
            disabled={e.quantity <= 1}
            onClick={() =>
              setCart({
                key: 'REMOVEQUANTITY',
                payload: e.id
              })
            }
          >
            <AtomText color="white">-</AtomText>
          </AtomButton>
          <AtomText color="#ffffff">{e.quantity}</AtomText>
          <AtomButton
            padding="0px 10px"
            onClick={() =>
              setCart({
                key: 'ADDQUANTITY',
                payload: e.id
              })
            }
          >
            <AtomText color="white">+</AtomText>
          </AtomButton>
          <AtomButton
            padding="4px"
            onClick={() =>
              setCart({
                key: 'REMOVECART',
                payload: e.id
              })
            }
          >
            <AtomIcon
              width="13px"
              height="13px"
              icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/icons8-basura.svg"
              color="white"
            />
          </AtomButton>
        </AtomWrapper>
      </AtomWrapper>
    </AtomWrapper>
  );
};
