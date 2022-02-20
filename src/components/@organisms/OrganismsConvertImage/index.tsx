import { css } from '@emotion/react';
import { AtomImage, AtomText, AtomWrapper } from '@sweetsyui/ui';
import { FC, useCallback, useContext, useMemo, useState } from 'react';
import { ContextFile } from '@Src/pages';
import getCroppedImg from '@Src/utils/getCropImage';
import Cropper from 'react-easy-crop';
import mapRange from '@Src/utils/mapRange';

const OrganismsConvertImage: FC = () => {
  const { file } = useContext(ContextFile);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedImage, setCroppedImage] = useState('');

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
        height: calc(100vh - 90px);
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        align-items: center;
        justify-content: space-between;
        @media (max-width: 820px) {
          flex-direction: column-reverse;
        }
      `}
    >
      <AtomWrapper
        customCSS={css`
          width: 350px;
          height: 100%;
          align-items: flex-start;
          justify-content: flex-start;
          @media (max-width: 820px) {
            width: 100%;
          }
          background-color: #202024;
        `}
      >
        <AtomWrapper
          width="300px"
          height="330px"
          customCSS={css`
            border-radius: 10px;
            overflow: hidden;
            position: relative;
            background-color: black;
            .reactEasyCrop_Container {
              position: relative;
              width: 100%;
              height: 100%;
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
              padding: 0px 20px;
              flex-direction: row;
              background-color: #313139;
              bottom: 40px;
              left: 50%;
              width: 100%;
              border-radius: 0px;
              height: 30px;
              z-index: 1;
              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
              input {
                margin: 0px 0px 0px 10px;
                width: 65%;
              }
              input[type='range'] {
                -webkit-appearance: none;
                background: #202024;
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
        </AtomWrapper>
      </AtomWrapper>
      <AtomWrapper
        customCSS={css`
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: flex-start;
          @media (max-width: 820px) {
            width: 100%;
          }
          background-color: #202024;
          img {
            --size: 30vw;
            width: var(--size);
            height: var(--size);
          }
        `}
      >
        <AtomImage src={croppedImage} alt="cropped" />
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default OrganismsConvertImage;
