import { IProducts } from 'graphql';
import React, { Dispatch, FC, SetStateAction } from 'react';
import { SerializedStyles } from '@emotion/utils';
import { AtomButton, AtomImage, AtomText, AtomWrapper } from '@sweetsyui/ui';
import { css } from '@emotion/react';
import { ItemCardShopType } from '@Src/components/templates/ADMIN/Stores/store/pointSale';

interface MoleculeCardProductType extends IProducts {
  setState: Dispatch<SetStateAction<ItemCardShopType[]>>;
  customCSS?: SerializedStyles;
}

const MoleculeCardProduct: FC<MoleculeCardProductType> = (props) => {
  const { id, image, name, price, description, stock, customCSS, setState } =
    props;
  return (
    <AtomWrapper
      customCSS={css`
        width: 32%;
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
            width: 220px;
            height: 220px;
            background-color: #1a1a1f;
          `}
        />
      </AtomWrapper>
      <AtomWrapper padding="0 5%">
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
            setState((prev) => {
              const isExist = prev.find((item) => item.id === id);
              return isExist
                ? prev.map((item) =>
                    item.id === id
                      ? { ...item, quantity: item.quantity + 1 }
                      : item
                  )
                : [
                    ...prev,
                    {
                      id: `${id}`,
                      image: `${image}`,
                      name: `${name}`,
                      price: price ?? 0,
                      quantity: 1,
                      type: 'Product'
                    }
                  ];
            });
          }}
        >
          <AtomText
            customCSS={css`
              color: #dfdfdf;
              font-weight: 600;
              font-size: 12px;
            `}
          >
            add in cart
          </AtomText>
        </AtomButton>
      </AtomWrapper>
    </AtomWrapper>
  );
};
export default MoleculeCardProduct;
