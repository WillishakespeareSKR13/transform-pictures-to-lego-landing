import { css } from '@emotion/react';
import {
  AtomButton,
  AtomIcon,
  AtomLoader,
  AtomModal,
  AtomText,
  AtomWrapper
} from '@sweetsyui/ui';
import React, { Dispatch, FC, SetStateAction } from 'react';
import { ProductModalType } from './index';

interface ModalNewProductType {
  state: ProductModalType;
  setState: Dispatch<SetStateAction<ProductModalType>>;
}

const ModalDeleteProduct: FC<ModalNewProductType> = (props) => {
  const { state, setState } = props;

  return (
    <AtomModal
      isOpen={state.openModal}
      component={
        <AtomWrapper
          maxWidth="380px"
          alignItems="center"
          justifyContent="center"
        >
          <AtomLoader
            isLoading={false}
            backgroundColor="transparent"
            colorLoading="#f1576c"
          />
          <AtomIcon
            width="120px"
            height="120px"
            color={'#f1576c'}
            icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/JRO-0001/icons/Icon%20metro-warning.svg"
            customCSS={css`
              margin: 10px 0px 30px 0px;
            `}
          />
          <AtomText
            customCSS={css`
              text-align: center;
              color: #373737;
              font-weight: bold;
              font-size: 22px;
              line-height: 110%;
            `}
          >
            {'do you want to remove the product?'}
          </AtomText>
          <AtomText
            margin="20px 0px"
            fontSize="18px"
            fontWeight="bold"
            color="#7e7b7b"
            align="center"
          >
            {state?.name}
          </AtomText>
          <AtomWrapper width="100%">
            <AtomButton
              onClick={() => {
                setState({
                  openModal: false
                });
              }}
              customCSS={css`
                width: 100%;
                background-color: transparent;
                border: 1px solid #bfbfbf;
                text-align: center;
                color: #878787;
                font-weight: 500;
                font-size: 14px;
                margin: 10px 0px;
              `}
            >
              CANCELAR
            </AtomButton>
            <AtomButton
              onClick={() => {
                //   deleteArticle({
                //     variables: {
                //       input: {
                //         articleId: id
                //       }
                //     }
                //   });
              }}
              customCSS={css`
                width: 100%;
                background-color: ${'#f1576c'};
                border: 1px solid ${'#f1576c'};
                text-align: center;
                color: white;
                font-weight: 600;
                font-size: 14px;
                margin: 10px 0px;
              `}
            >
              {'BORRAR'}
            </AtomButton>
          </AtomWrapper>
        </AtomWrapper>
      }
    />
  );
};
export default ModalDeleteProduct;
