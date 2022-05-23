import { IProducts } from 'graphql';
import React, { FC } from 'react';
import { SerializedStyles } from '@emotion/utils';
import { AtomButton, AtomImage, AtomText, AtomWrapper } from '@sweetsyui/ui';
import { css } from '@emotion/react';
import { useAtom } from 'jotai';
import { ICart, setCartAtom } from '@Src/jotai/cart';

interface MoleculeCardProductType extends IProducts {
  customCSS?: SerializedStyles;
}

const MoleculeCardProduct: FC<MoleculeCardProductType> = (props) => {
  const [cart, setCart] = useAtom(setCartAtom);
  const { id, image, name, price, description, stock, customCSS } = props;
  return (
    <AtomWrapper
      customCSS={css`
        flex-basis: 250px;
        flex-grow: 1;
        height: 390px;
        background-color: #202026;
        justify-content: space-between;
        border-radius: 8px;
        padding: 10px;
        ${customCSS}
      `}
    >
      <AtomWrapper alignItems="center" padding="10px">
        <AtomImage
          src={`${image}`}
          alt={`${image}`}
          customCSS={css`
            width: 100%;
            height: 220px;
            background-color: #1a1a1f;
            img {
              object-fit: contain;
              padding: 10px;
            }
          `}
        />
      </AtomWrapper>
      <AtomWrapper padding="0 10px">
        <AtomText
          customCSS={css`
            color: #dfdfdf;
            font-size: 16px;
            font-weight: 600;
          `}
        >
          {name}
        </AtomText>
        <AtomText
          customCSS={css`
            color: #dfdfdf;
            font-weight: 600;
            font-size: 12px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          `}
        >
          Description: {description}
        </AtomText>
        <AtomText
          customCSS={css`
            color: #dfdfdf;
            font-weight: 600;
            font-size: 12px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          `}
        >
          price: {price}
        </AtomText>
        <AtomText
          customCSS={css`
            color: #dfdfdf;
            font-weight: 600;
            font-size: 12px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          `}
        >
          stock: {stock}
        </AtomText>
        <AtomButton
          customCSS={css`
            width: 100%;
            margin: 10px 10px 10px 0px;
            background-color: #f1576c;
            :hover {
              background-color: #d9364c;
            }
            transition: background-color 0.3s ease;
          `}
          onClick={() => {
            const product = Object.fromEntries(
              Object.entries(props).filter(
                ([key]) => !['customCSS', 'setState'].includes(key)
              )
            );
            const isCart = cart.find((item) => item.id === id);
            if (isCart) {
              setCart({
                key: 'ADDQUANTITY',
                payload: id
              });
            } else {
              setCart({
                key: 'ADDCART',
                payload: {
                  id: id,
                  type: 'PRODUCT',
                  quantity: 1,
                  product: product
                } as ICart
              });
            }
          }}
        >
          <AtomText
            customCSS={css`
              color: #dfdfdf;
              font-weight: 600;
              font-size: 12px;
            `}
          >
            Add to Cart
          </AtomText>
        </AtomButton>
      </AtomWrapper>
    </AtomWrapper>
  );
};
export default MoleculeCardProduct;
