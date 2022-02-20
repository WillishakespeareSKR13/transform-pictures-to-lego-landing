import { css } from '@emotion/react';
import {
  AtomInput,
  AtomLoader,
  AtomTabs,
  AtomText,
  AtomWrapper
} from '@sweetsyui/ui';
import { FC, useCallback, useContext, useMemo, useState } from 'react';
import { ContextFile } from '@Src/pages';
import getCroppedImg from '@Src/utils/getCropImage';
import Cropper from 'react-easy-crop';
import mapRange from '@Src/utils/mapRange';
import CONFIG, {
  COLORTYPE,
  CONFIGKEYS,
  CONFIGKEYSSIZE,
  CROPPEDIMAGE,
  SELECTEDCONFIG
} from '@Src/config';
import AtomButton from '@Src/components/@atoms/AtomButton';
import { StyledImage } from './styles';
import { cropAndFilter } from '@Src/utils/pixelit';

const OrganismsConvertImage: FC = () => {
  const { file } = useContext(ContextFile);
  const [selected, setSelected] = useState<CONFIGKEYS>('SQUARE');
  const [selectedSize, setSelectedSize] = useState<CONFIGKEYSSIZE>('SMALL');
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedImage, setCroppedImage] = useState('');
  const [showBorder, setShowBorder] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState('DEFAULT');
  const [cropImages, setCropImages] = useState<CROPPEDIMAGE>([]);
  const [colors, setColors] = useState<COLORTYPE[]>([]);
  const [quantity, setQuantity] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  console.warn(setSelectedRoom, colors);

  const loading = useMemo(
    () => cropImages.length !== quantity,
    [cropImages, quantity]
  );

  const selectedConfig = useMemo(
    () =>
      CONFIG.find(({ key }) => key === selected)?.sizes.find(
        ({ key }) => key === selectedSize
      ),
    [selected, selectedSize]
  ) as SELECTEDCONFIG;

  const blob = useMemo(
    () =>
      file ? URL.createObjectURL(new Blob([file], { type: 'image/png' })) : '',
    [file]
  );

  const onCropComplete = useCallback(
    async (_, croppedAreaPixels) =>
      setCroppedImage(
        file
          ? await getCroppedImg(file, croppedAreaPixels, 0).catch(() => ``)
          : ``
      ),
    [file]
  );

  return (
    <AtomWrapper
      customCSS={css`
        border-radius: 10px;
        width: 100%;
        gap: 30px;
        flex-direction: row;
        min-height: calc(100vh - 90px);
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        align-items: flex-start;
        justify-content: space-between;
        @media (max-width: 820px) {
          flex-direction: column-reverse;
        }
      `}
    >
      <AtomWrapper
        customCSS={css`
          width: 350px;
          height: max-content;
          align-items: flex-start;
          justify-content: flex-start;
          @media (max-width: 820px) {
            width: 100%;
          }
          background-color: #202024;
          box-shadow: 0px 0px 10px rgba(16, 16, 16, 0.563);
        `}
      >
        <AtomWrapper
          width="320px"
          height="max-content"
          customCSS={css`
            border-radius: 10px;
            overflow: hidden;
            position: relative;
            background-color: black;
            .reactEasyCrop_Container {
              position: relative;
              width: 320px;
              height: 350px;
            }
            .reactEasyCrop_CropArea .reactEasyCrop_CropAreaGrid {
              width: 100%;
            }
            .reactEasyCrop_CropArea {
            }
          `}
        >
          <Cropper
            image={blob}
            crop={crop}
            zoom={zoom}
            aspect={3 / 3}
            zoomSpeed={0.1}
            cropSize={{ width: 220, height: 220 }}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={(e) => setZoom(Number(e.toFixed(2)))}
            objectFit="vertical-cover"
          />
          <AtomWrapper
            customCSS={css`
              align-items: center;
              justify-content: space-between;
              padding: 5px 20px 0px 20px;
              flex-direction: row;
              background-color: #202024;
              bottom: 40px;
              left: 50%;
              width: 100%;
              border-radius: 0px;
              height: 40px;
              z-index: 1;
              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
              input {
                margin: 0px 0px 0px 10px;
                width: 65%;
              }
              input[type='range'] {
                -webkit-appearance: none;
                background: #313139;
                border-radius: 10px;
              }
              input[type='range']::-webkit-slider-thumb {
                -webkit-appearance: none;
              }

              input[type='range']:focus {
                outline: none;
              }

              input[type='range']::-ms-track {
                cursor: pointer;

                background: transparent;
                border-color: transparent;
                color: transparent;
              }

              input[type='range']::-webkit-slider-thumb {
                -webkit-appearance: none;
                height: 12px;
                width: 12px;
                border-radius: 50%;
                background: #ffffff;
                cursor: pointer;
              }

              input[type='range']::-moz-range-thumb {
                height: 36px;
                width: 16px;
                border-radius: 3px;
                background: #ffffff;
                cursor: pointer;
              }

              input[type='range']::-ms-thumb {
                height: 36px;
                width: 16px;
                border-radius: 3px;
                background: #ffffff;
                cursor: pointer;
              }
            `}
          >
            <AtomText
              color="white"
              fontSize="12px"
              fontWeight={600}
            >{`Zoom: ${Number(
              mapRange(zoom, 1, 3, 0, 100).toFixed(0)
            )}%`}</AtomText>
            <input
              type="range"
              min="1"
              max="3"
              step="0.05"
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
            />
          </AtomWrapper>
          <AtomTabs
            componentsProps={{
              tabsProps: {
                buttonActiveProps: {
                  customCSS: css`
                    flex-grow: 1;
                    background-color: #4a4a54;
                    padding: 8px 40px;
                    span {
                      font-size: 12px;
                    }
                  `
                },
                buttonDisabledProps: {
                  customCSS: css`
                    flex-grow: 1;
                    background-color: #313139;
                    padding: 8px 40px;
                    span {
                      font-size: 12px;
                    }
                  `
                },
                wrapperProps: {
                  customCSS: css`
                    padding: 5px 10px;
                    background-color: #202024;
                    justify-content: center;
                    align-items: center;
                  `
                }
              },
              contentProps: {
                wrapperProps: {
                  customCSS: css`
                    border: none;
                    background-color: #202024;
                  `
                }
              }
            }}
            tabs={[
              {
                id: 'size',
                title: 'Size',
                content: (
                  <AtomWrapper
                    customCSS={css`
                      padding: 0px 10px;
                    `}
                  >
                    <AtomWrapper
                      customCSS={css`
                        justify-content: space-between;
                        align-items: center;
                        flex-wrap: wrap;
                        margin: 5px 0px;
                        border-radius: 5px;
                        overflow: hidden;
                        flex-direction: row;
                      `}
                    >
                      {CONFIG.map((size) => (
                        <AtomButton
                          disabled={loading || isLoading}
                          key={size.id}
                          onClick={() => {
                            setSelected(size.key as CONFIGKEYS);
                            setSelectedSize(
                              size.sizes[0].key as CONFIGKEYSSIZE
                            );
                            setCropImages([]);
                            setQuantity(0);
                          }}
                          customCSS={css`
                            padding: 3px;
                            cursor: pointer;
                            flex-grow: 1;
                            border-radius: 0px;
                            justify-content: center;
                            align-items: center;
                            background-color: ${size.key === selected
                              ? '#4a4a54'
                              : '#313139'};
                          `}
                        >
                          <AtomWrapper
                            customCSS={css`
                              cursor: pointer;
                              border-radius: 1px;
                              padding: 8px 30px;
                              justify-content: center;
                              align-items: center;
                            `}
                          >
                            <AtomText
                              color="white"
                              fontWeight={600}
                              fontSize="12px"
                              customCSS={css`
                                cursor: pointer;
                              `}
                            >
                              {size.key}
                            </AtomText>
                          </AtomWrapper>
                        </AtomButton>
                      ))}
                    </AtomWrapper>
                    <AtomWrapper
                      customCSS={css`
                        border-radius: 2px;
                        margin: 5px 0px;
                        border-radius: 5px;
                        overflow: hidden;
                        justify-content: space-between;
                        align-items: center;
                        flex-wrap: wrap;
                        flex-direction: row;
                      `}
                    >
                      {CONFIG.find((size) => size.key === selected)?.sizes.map(
                        (size) => (
                          <AtomButton
                            disabled={loading || isLoading}
                            key={size.id}
                            onClick={() => {
                              setSelectedSize(size.key as CONFIGKEYSSIZE);
                              setCropImages([]);
                              setQuantity(0);
                            }}
                            customCSS={css`
                              padding: 3px;
                              cursor: pointer;
                              flex-grow: 1;
                              border-radius: 0px;
                              justify-content: center;
                              align-items: center;
                              background-color: ${size.key === selectedSize
                                ? '#4a4a54'
                                : '#313139'};
                            `}
                          >
                            <AtomWrapper
                              customCSS={css`
                                cursor: pointer;
                                border-radius: 1px;
                                padding: 8px 30px;
                                justify-content: center;
                                align-items: center;
                              `}
                            >
                              <AtomText
                                color="white"
                                fontWeight={600}
                                fontSize="12px"
                                customCSS={css`
                                  cursor: pointer;
                                `}
                              >
                                {size.key.slice(0, 1).toUpperCase()}
                              </AtomText>
                            </AtomWrapper>
                          </AtomButton>
                        )
                      )}
                    </AtomWrapper>
                    <AtomWrapper
                      customCSS={css`
                        margin: 5px 0px;
                        justify-content: space-between;
                        align-items: center;
                        flex-wrap: wrap;
                        flex-direction: row;
                      `}
                    >
                      <AtomButton
                        disabled={loading || isLoading}
                        width="100%"
                        backgroundColor="#e95c10"
                        onClick={() => {
                          cropAndFilter(
                            croppedImage,
                            setCropImages,
                            selectedConfig.x,
                            selectedConfig.y,
                            setIsLoading,
                            setColors,
                            selectedConfig.isPortrait
                          );
                          setQuantity(selectedConfig.x * selectedConfig.y);
                        }}
                      >
                        PIXELIT
                      </AtomButton>
                    </AtomWrapper>
                  </AtomWrapper>
                )
              },
              {
                id: 'shape',
                title: 'Shape',
                content: <></>
              }
            ]}
          />
        </AtomWrapper>
      </AtomWrapper>
      <AtomWrapper
        customCSS={css`
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;
          @media (max-width: 820px) {
            width: 100%;
          }
        `}
      >
        <AtomWrapper
          customCSS={css`
            width: 600px;
            align-items: center;
            justify-content: center;
            background-color: #202024;
            box-shadow: 0px 0px 10px rgba(16, 16, 16, 0.563);
            }
          `}
        >
          <AtomText
            customCSS={css`
              width: 100%;
              color: white;
              font-size: 12px;
              font-weight: 600;
              margin: 15px 0px;
              padding: 0px 20px;
            `}
          >
            {
              CONFIG.find((size) => size.key === selected)?.sizes.find(
                (size) => size.key === selectedSize
              )?.title
            }
          </AtomText>
          {loading || isLoading ? (
            <AtomLoader
              isLoading
              colorLoading="#e95c10"
              type="small"
              customCSS={css`
                width: 600px;
                height: 600px;
              `}
            />
          ) : (
            <AtomWrapper
              customCSS={css`
                flex-direction: row;
                flex-wrap: wrap;
                width: 600px;
                height: 600px;
                align-items: center;
                justify-content: center;
                background-color: #313139;
              `}
            >
              {cropImages.length > 0 ? (
                <>
                  {cropImages.map((image, i) => (
                    <AtomButton
                      key={`image${i}`}
                      customCSS={css`
                        display: flex;
                        padding: 0px;
                      `}
                      onClick={() => {
                        // setModalImage(true);
                        // setSelectedImage(i);
                      }}
                    >
                      <StyledImage
                        src={image.image}
                        alt="croppedImage"
                        customCSS={css`
                          ${showBorder &&
                          css`
                            border: 1px solid #ffffff;
                          `}
                          ${selectedConfig.y > selectedConfig.x
                            ? css`
                                width: ${600 / selectedConfig.y}px;
                                height: ${600 / selectedConfig.y}px;
                              `
                            : css`
                                width: ${600 / selectedConfig.x}px;
                                height: ${600 / selectedConfig.x}px;
                              `}
                        `}
                      />
                    </AtomButton>
                  ))}
                </>
              ) : (
                <AtomWrapper
                  justifyContent="center"
                  alignItems="center"
                  width="max-content"
                >
                  <AtomText
                    color="#4a4a54"
                    fontSize="28px"
                    fontWeight={600}
                    customCSS={css`
                      text-align: center;
                    `}
                  >
                    Pixelit your image
                  </AtomText>
                </AtomWrapper>
              )}
            </AtomWrapper>
          )}

          <AtomInput
            type="select"
            errorHeight="0px"
            value={selectedRoom}
            labelWidth="250px"
            defaultText="Pick a demo room"
            customCSS={css`
              select {
                border: 3px solid #202024;
                background-color: #313139;
                option {
                  color: #4a4a54;
                }
              }
              margin-top: -10px;
            `}
          />
          <AtomWrapper
            flexDirection="row"
            justifyContent="flex-end"
            alignItems="center"
            padding="0px 20px 20px 20px"
          >
            <AtomInput
              type="checkbox"
              checked={showBorder}
              onChange={() => setShowBorder(!showBorder)}
              customCSS={css`
                span {
                  display: none;
                }
                div {
                  font-size: 14px;
                  font-weight: 600;
                  color: #4a4a54;
                }
              `}
            >
              Show Borders
            </AtomInput>
            <AtomButton
              disabled={loading || isLoading}
              backgroundColor="#e95c10"
              customCSS={css`
                margin-left: 20px;
                font-size: 12px;
              `}
              onClick={() => {
                console.warn('clicked');
              }}
            >
              DOWNLOAD
            </AtomButton>
          </AtomWrapper>
        </AtomWrapper>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default OrganismsConvertImage;
