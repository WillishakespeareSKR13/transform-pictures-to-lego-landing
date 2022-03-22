import { css, SerializedStyles } from '@emotion/react';
import { AtomButton, AtomImage, AtomText, AtomWrapper } from '@sweetsyui/ui';
import React, { Dispatch, FC, SetStateAction } from 'react';

export type ItemCardShopType = {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  type: string;
  customCSS?: SerializedStyles;
};

interface MoleculeItemCardShopType extends ItemCardShopType {
  setState: Dispatch<SetStateAction<ItemCardShopType[]>>;
}

const MoleculeItemCardShop: FC<MoleculeItemCardShopType> = (props) => {
  const { id, image, name, price, quantity, customCSS, setState } = props;
  return (
    <AtomWrapper
      customCSS={css`
        ${customCSS}
      `}
    >
      <AtomImage src={`${image}`} alt={`${image}`} />
      <AtomText>{name}</AtomText>
      <AtomText>{price}</AtomText>
      <AtomText>quantity: {quantity}</AtomText>
      <AtomButton
        onClick={() =>
          setState((state) =>
            state.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
          )
        }
      >
        +
      </AtomButton>
      <AtomButton
        disabled={quantity === 1}
        onClick={() =>
          setState((state) =>
            state.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
          )
        }
      >
        -
      </AtomButton>
    </AtomWrapper>
  );
};
export default MoleculeItemCardShop;
