import { css, SerializedStyles } from '@emotion/react';
import { OpenModal } from '@Src/redux/actions/modal';
import { AtomButton, AtomImage, AtomText, AtomWrapper } from '@sweetsyui/ui';
import { AnimatePresence } from 'framer-motion';
import { IBoard } from 'graphql';
import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

interface MoleculeCardBoardType extends IBoard {
  customCSS?: SerializedStyles;
}

const variants = {
  hidden: { opacity: 0 },
  visible: ({ delay }: { delay: number }) => ({
    opacity: 1,
    transition: {
      delay,
      duration: 1
    }
  })
};
const MoleculeCardBoard: FC<MoleculeCardBoardType> = (props) => {
  const { id, image, title, description, customCSS, sizes, currency, type } =
    props;
  const dispatch = useDispatch();
  const [show, setshow] = useState(false);
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
      {!show ? (
        <>
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
              {title}
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
              {/* price: {price} */}
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
              {/* stock: {stock} */}
            </AtomText>
          </AtomWrapper>
        </>
      ) : (
        <AtomWrapper
          maxHeight="300px"
          alignItems="center"
          customCSS={css`
            gap: 10px;
          `}
        >
          <AnimatePresence>
            {sizes
              ?.slice()
              ?.sort((a, b) => (a?.priority ?? 0) - (b?.priority ?? 0))
              ?.map((size, index) => (
                <AtomButton
                  width="95%"
                  height="60px"
                  custom={{ delay: (index + 1) * 0.1 }}
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  key={size?.id}
                  onClick={() => {
                    setshow(false);
                    dispatch(
                      OpenModal({
                        id: id,
                        size: type?.name,
                        sizeType: size?.type?.name,
                        modal: true
                      })
                    );
                  }}
                  customCSS={css`
                    background-color: #f1576c;
                    :hover {
                      background-color: #d9364c;
                    }
                    transition: background-color 0.3s ease;
                  `}
                >
                  <AtomText
                    customCSS={css`
                      font-size: 12px;
                      text-overflow: ellipsis;
                      color: #dfdfdf;
                      font-weight: bold;
                    `}
                  >
                    {`${size?.type?.name} $${size?.price} ${currency}`}
                  </AtomText>
                </AtomButton>
              ))}
          </AnimatePresence>
        </AtomWrapper>
      )}
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
        onClick={() => setshow(!show)}
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
  );
};
export default MoleculeCardBoard;
