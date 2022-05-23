import { css, SerializedStyles } from '@emotion/react';
import { OpenModal } from '@Src/redux/actions/modal';
import { AtomButton, AtomImage, AtomText, AtomWrapper } from '@sweetsyui/ui';
import { IBoard } from 'graphql';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

interface MoleculeCardBoardAllType extends IBoard {
  customCSS?: SerializedStyles;
}

const MoleculeCardBoardAll: FC<MoleculeCardBoardAllType> = (props) => {
  const { customCSS } = props;
  const dispatch = useDispatch();
  return (
    <AtomWrapper
      customCSS={css`
        flex-basis: 250px;
        flex-grow: 1;
        height: 370px;
        background-color: #202026;
        justify-content: space-between;
        border-radius: 8px;
        padding: 10px;
        ${customCSS}
      `}
    >
      <AtomWrapper alignItems="center" padding="10px">
        <AtomImage
          src={`/images/board.png`}
          alt={`board-image`}
          customCSS={css`
            width: 100%;
            height: 220px;
            background-color: #1a1a1f;
            img {
              object-fit: contain;
              padding: 5px;
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
          Board
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
          Description: Add new board
        </AtomText>
      </AtomWrapper>

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
          dispatch(
            OpenModal({
              modal: true
            })
          );
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
  );
};
export default MoleculeCardBoardAll;
