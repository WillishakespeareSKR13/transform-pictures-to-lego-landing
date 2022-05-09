import { css } from '@emotion/react';
import {
  AtomButton,
  AtomIcon,
  AtomImage,
  AtomModal,
  AtomText,
  AtomWrapper
} from '@sweetsyui/ui';

import { Dispatch, FC, SetStateAction } from 'react';

type AtomModalImageProps = {
  images?: string[];
  state?: boolean;
  setState?: Dispatch<SetStateAction<boolean>>;
  selected?: number;
  setSelected?: Dispatch<SetStateAction<number>>;
};

const spring = {
  x: { type: `spring`, damping: 20, stiffness: 180, when: `afterChildren` },
  default: { duration: 0.45 }
};

const animation = {
  transition: spring,
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

const AtomModalImage: FC<AtomModalImageProps> = (props) => {
  const { images, selected, setSelected, state, setState } = props;

  return (
    <AtomModal
      isOpen={state}
      componentProps={{
        containerProps: {
          customCSS: css`
            position: fixed;
            width: 100vw;
            height: 100vh;
            left: 0;
            top: 0;
            background-color: #0000008a;
            backdrop-filter: blur(12px);
            z-index: 9000;
          `
        },
        wrapperProps: {
          width: 'max-content',
          height: 'max-content',
          backgroundColor: 'transparent',
          position: 'relative'
        }
      }}
      component={
        <>
          <AtomButton
            onClick={() => setState?.(false)}
            customCSS={css`
              padding: 0px;
              background-color: transparent;
              position: absolute;
              right: 0;
              top: -50px;
              z-index: 9999;
              * {
                color: #fff;
                font-size: 24px;
                font-weight: bold;
              }
            `}
          >
            <AtomText>X</AtomText>
          </AtomButton>
          <AtomWrapper
            maxWidth="100%"
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
          >
            <AtomButton
              padding="0px 0px"
              backgroundColor="transparent"
              customCSS={css`
                margin-right: 22px;
              `}
              onClick={() => {
                const newSelected = (selected ?? 0) - 1;
                const length = (images?.length ?? 0) - 1;
                setSelected?.(newSelected < 0 ? length : newSelected);
              }}
            >
              <AtomIcon
                height="30px"
                icon="https://storage.googleapis.com/cdn-bucket-ixulabs-commons/frontend-library/icons/arrowleft.svg"
                color="white"
                customCSS={css`
                  transform: rotate(180deg);
                `}
              />
            </AtomButton>
            {images?.find((_, idx) => idx === selected) && (
              <AtomImage
                {...animation}
                key={selected}
                height="70vh"
                width="60vw"
                alt="image"
                src={`${images?.find((_, idx) => idx === selected)}`}
                customCSS={css`
                  img {
                    object-fit: contain;
                  }
                `}
              />
            )}
            <AtomButton
              padding="0px 0px"
              backgroundColor="transparent"
              customCSS={css`
                margin-left: 22px;
              `}
              onClick={() => {
                const newSelected = (selected ?? 0) + 1;
                const length = (images?.length ?? 0) - 1;
                setSelected?.(newSelected > length ? 0 : newSelected);
              }}
            >
              <AtomIcon
                height="30px"
                icon="https://storage.googleapis.com/cdn-bucket-ixulabs-commons/frontend-library/icons/arrowleft.svg"
                color="white"
              />
            </AtomButton>
          </AtomWrapper>
          <AtomWrapper
            flexDirection="row"
            width="max-content"
            maxWidth="90vw"
            // flexWrap="wrap"
            margin="60px 0px -30px 0px"
            padding="0px 0px 5px 0px"
            overflowX="scroll"
            alignItems="flex-start"
            justifyContent="flex-start"
            customCSS={css`
              ::-webkit-scrollbar {
                height: 4px;
              }
            `}
          >
            <AtomWrapper
              flexDirection="row"
              width="max-content"
              maxWidth="max-content"
              padding="0px 0px"
            >
              {images?.map((image, idx) => (
                <AtomButton
                  key={image}
                  customCSS={css`
                    display: flex;
                    padding: 0px;
                    margin: 5px 5px;
                    border-radius: 4px;
                    overflow: hidden;
                    background-color: transparent;
                    border: 2px solid
                      ${idx === selected ? '#ff306eca' : 'transparent'};
                  `}
                  onClick={() => {
                    setSelected?.(idx);
                  }}
                >
                  <AtomImage
                    height="40px"
                    width="40px"
                    alt="image"
                    src={`${image}`}
                    customCSS={css`
                      /* cursor: pointer; */
                      img {
                        /* cursor: pointer; */
                        object-fit: contain;
                      }
                    `}
                  />
                </AtomButton>
              ))}
            </AtomWrapper>
          </AtomWrapper>
        </>
      }
    />
  );
};

export default AtomModalImage;
