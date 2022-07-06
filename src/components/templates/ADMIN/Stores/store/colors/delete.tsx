import { useMutation } from '@apollo/client';
import { css } from '@emotion/react';
import { DELETECOLOR } from '@Src/apollo/client/mutation/color';
import {
  AtomButton,
  AtomIcon,
  AtomImage,
  AtomLoader,
  AtomModal,
  AtomText,
  AtomWrapper
} from '@sweetsyui/ui';
import { Dispatch, FC, SetStateAction, useEffect, useRef } from 'react';
import { ColorModalType } from './index';

interface ModalDeleteColorType {
  state: ColorModalType;
  setState: Dispatch<SetStateAction<ColorModalType>>;
}

const ModalDeleteColor: FC<ModalDeleteColorType> = (props) => {
  const { state, setState } = props;
  const [EXEDELETECOLOR] = useMutation(DELETECOLOR, {
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
          height: 'max-content',
          padding: '10 30px'
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
            {'do you want to remove the color?'}
          </AtomText>
          <AtomWrapper
            flexDirection="row"
            alignItems="center"
            customCSS={css`
              gap: 0 20px;
            `}
          >
            <AtomWrapper
              customCSS={css`
                justify-content: center;
                align-items: center;
                background-color: ${state?.color};
              `}
            >
              <AtomImage
                src={`${state?.icon}`}
                alt={`${state?.icon}`}
                height="200px"
                width="200px"
                customCSS={css`
                  overflow: hidden;
                  border-radius: 4px;
                `}
              />
            </AtomWrapper>
            <AtomWrapper justifyContent="center">
              <AtomText
                margin="20px 0px"
                fontSize="18px"
                fontWeight="bold"
                color="#7e7b7b"
                align="center"
              >
                {state?.color}
              </AtomText>
              <AtomText
                fontSize="18px"
                fontWeight="bold"
                color="#7e7b7b"
                align="center"
              >
                {state?.name}
              </AtomText>
            </AtomWrapper>
          </AtomWrapper>
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
              CANCEL
            </AtomButton>
            <AtomButton
              onClick={() => {
                EXEDELETECOLOR({
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
              DELETE
            </AtomButton>
          </AtomWrapper>
        </AtomWrapper>
      }
    />
  );
};
export default ModalDeleteColor;
