import { useQuery } from '@apollo/client';
import { css, SerializedStyles } from '@emotion/react';
import { GET_BOARDS } from '@Src/apollo/client/query/boards';
import { GETPRODUCTS } from '@Src/apollo/client/query/products';
import { GETUSERS } from '@Src/apollo/client/query/user';
import MoleculeCardBoard from '@Src/components/@molecules/moleculeCardBoard';
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
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';

const variablesSale = {
  tax: 0.16
};

const PointSale: FC = () => {
  const [cart, setCart] = useAtom(setCartAtom);
  const [colors] = useAtom(colorsAtoms);
  const router = useRouter();
  const [seller, setSeller] = useState<string>('DEFAULT');
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

  const BOARD = (e: ICart) => {
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
                  {boards?.getBoards?.map((board) => (
                    <MoleculeCardBoard key={board?.id} {...board} />
                  ))}
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
            {cart.map((e) =>
              e.type === 'BOARD' ? <BOARD {...e} /> : <PRODUCT {...e} />
            )}
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
                        width: 15px;
                        height: 15px;
                        background-color: ${e.color};
                        border: 1px solid #eeeeee;
                      `}
                    />
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
                      {/* {e.count} */}
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
                {`$${cart.reduce((acc, item) => {
                  const price =
                    item.type === 'BOARD'
                      ? boards?.getBoards
                          ?.find((e) => e?.id === item.board?.id)
                          ?.sizes?.find((e) => e?.id === item.board?.size)
                          ?.price
                      : data?.getProducts?.find(
                          (e) => e?.id === item.product?.id
                        )?.price;

                  return acc + (price ?? 0);
                }, 0)}`}
              </AtomText>
              <AtomText width="70%">Tax</AtomText>
              <AtomText width="30%" align="right" maxWidth="30%">
                {`$${Math.ceil(
                  (cart.reduce((acc, item) => {
                    const price =
                      item.type === 'BOARD'
                        ? boards?.getBoards
                            ?.find((e) => e?.id === item.board?.id)
                            ?.sizes?.find((e) => e?.id === item.board?.size)
                            ?.price
                        : data?.getProducts?.find(
                            (e) => e?.id === item.product?.id
                          )?.price;

                    return acc + (price ?? 0);
                  }, 0) /
                    (variablesSale.tax + 1)) *
                    variablesSale.tax
                )}`}
              </AtomText>
              <AtomText width="70%">Grand Total</AtomText>
              <AtomText width="30%" align="right">
                $
                {Math.ceil(
                  (cart.reduce((acc, item) => {
                    const price =
                      item.type === 'BOARD'
                        ? boards?.getBoards
                            ?.find((e) => e?.id === item.board?.id)
                            ?.sizes?.find((e) => e?.id === item.board?.size)
                            ?.price
                        : data?.getProducts?.find(
                            (e) => e?.id === item.product?.id
                          )?.price;

                    return acc + (price ?? 0);
                  }, 0) /
                    (variablesSale.tax + 1)) *
                    variablesSale.tax
                ) +
                  cart.reduce((acc, item) => {
                    const price =
                      item.type === 'BOARD'
                        ? boards?.getBoards
                            ?.find((e) => e?.id === item.board?.id)
                            ?.sizes?.find((e) => e?.id === item.board?.size)
                            ?.price
                        : data?.getProducts?.find(
                            (e) => e?.id === item.product?.id
                          )?.price;

                    return acc + (price ?? 0);
                  }, 0)}
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
                onChange={(e) => setSeller(e.target.value)}
                options={dataUsers?.getUsers
                  ?.filter((e) => e?.role?.name === 'AGENT')
                  ?.map((e) => ({
                    id: `${e?.id}`,
                    label: `${e?.name}`,
                    value: `${e?.id}`
                  }))}
              />
              <AtomButton width="45%" backgroundColor="#f1576c" fontSize="10px">
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
    </>
  );
};
export default PointSale;
