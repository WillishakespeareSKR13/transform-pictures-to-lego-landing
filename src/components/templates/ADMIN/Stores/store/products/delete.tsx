import { useMutation } from '@apollo/client';
import { css } from '@emotion/react';
import { DELETEPRODUCT } from '@Src/apollo/client/query/products';
import {
  AtomButton,
  AtomIcon,
  AtomLoader,
  AtomModal,
  AtomText,
  AtomWrapper
} from '@sweetsyui/ui';
import { Dispatch, FC, SetStateAction, useEffect, useRef } from 'react';
import { ProductModalType } from './index';

interface ModalNewProductType {
  state: ProductModalType;
  setState: Dispatch<SetStateAction<ProductModalType>>;
}

const ModalDeleteProduct: FC<ModalNewProductType> = (props) => {
  const { state, setState } = props;
  const [EXEDELETEPRODUCT] = useMutation(DELETEPRODUCT, {
    onCompleted: () => {
      location.reload();
    }
  });

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setState?.({ ...state, openModal: false });
      }
    };

    document.addEventListener(`mousedown`, handleClickOutside, true);
    return () => {
      document.removeEventListener(`mousedown`, handleClickOutside, true);
    };
  }, [ref]);

  return (
    <AtomModal
      isOpen={state.openModal}
      componentProps={{
        wrapperProps: {
          refObject: ref,
          backgroundColor: '#2e2e35',
          padding: '0 30px'
        }
      }}
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
              color: #dfdfdf;
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
                border: 1px solid #dfdfdf;
                text-align: center;
                color: #dfdfdf;
                font-weight: 500;
                font-size: 14px;
                margin: 10px 0px;
              `}
            >
              CANCELAR
            </AtomButton>
            <AtomButton
              onClick={() => {
                EXEDELETEPRODUCT({
                  variables: {
                    id: state.id
                  }
                });
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
