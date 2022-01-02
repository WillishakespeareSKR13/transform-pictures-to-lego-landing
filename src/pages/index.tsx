/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @next/next/no-img-element */
import { css, SerializedStyles } from '@emotion/react';
import { AtomPage } from '@Src/components/@atoms';
import {
  AtomButton,
  AtomIcon,
  AtomImage,
  AtomInput,
  AtomText,
  AtomWrapper
} from '@sweetsyui/ui';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { NextPageFC } from 'next';
import Cropper from 'react-easy-crop';
import { useCallback, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import getCroppedImg from '@Src/utils/getCropImage';
import OrganismsLoadImage from '@Src/components/@organisms/OrganismsLoadImage';

const PageIndex: NextPageFC = () => {
  const [blob, setBlob] = useState('');
  const [file, setFile] = useState({} as File);
  const ref = useRef<HTMLImageElement>(null);
  const refInput = useRef<HTMLInputElement>(null);
  const [factor, setFactor] = useState(0.03125);
  const [selectedfactor, setSelectedFactor] = useState(0);
  const [croppedImage, setCroppedImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const onCropComplete = useCallback(
    async (_, croppedAreaPixels) => {
      try {
        if (file) {
          const croppedImage = await getCroppedImg(file, croppedAreaPixels, 0);
          ref.current?.setAttribute('data-src-original', croppedImage);
          setCroppedImage(croppedImage);
        }
      } catch (e) {
        console.error(e);
      }
    },
    [file]
  );

  useEffect(() => {
    if (ref.current) {
      const LEGO = require('legofy');
      LEGO?.transform(ref.current, {
        factor: factor
      });
    }
  });

  const formik = useFormik({
    initialValues: {
      imagefile: {} as File
    },
    validationSchema: Yup.object({
      imagefile: Yup.mixed()
        .required('Image is required')
        .test('file', 'The file must be an image', (value) =>
          value?.type?.includes('image')
        )
    }),
    onSubmit: (values) => {
      const { imagefile } = values;
      const blob = new Blob([imagefile], { type: 'image/png' });
      setBlob(URL.createObjectURL(blob));
      setFile(imagefile);
    }
  });

  return (
    <AtomPage>
      {blob === '' ? (
        <OrganismsLoadImage formik={formik} />
      ) : (
        <AtomWrapper
          customCSS={css`
            background-color: #f5f5f5;
            border-radius: 10px;
            margin: 30px;
            padding: 30px;
            width: 100%;
            height: 100%;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            align-items: center;
            justify-content: center;
          `}
        >
          <AtomWrapper justifyContent="center" alignItems="flex-end">
            <AtomWrapper
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              customCSS={css`
                img {
                  object-fit: cover;
                }
              `}
            >
              <AtomWrapper width="400px">
                <AtomWrapper
                  width="100%"
                  height="400px"
                  customCSS={css`
                    .reactEasyCrop_Container {
                      position: relative;
                      width: 100%;
                      height: 100%;
                    }
                    .reactEasyCrop_CropArea .reactEasyCrop_CropAreaGrid {
                      width: 100%;
                    }
                  `}
                >
                  <Cropper
                    image={blob}
                    crop={crop}
                    zoom={zoom}
                    aspect={4 / 3}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                  />
                </AtomWrapper>
              </AtomWrapper>
              <AtomWrapper
                maxWidth="calc(100% - 800px)"
                alignItems="center"
                justifyContent="center"
              >
                {[1, 2, 3, 4].map((i) => {
                  const base = Math.pow(2, i + 4);
                  const size = (10 * 0.1) / base;
                  return (
                    <AtomButton
                      key={`buttonSIZE${i}`}
                      onClick={() => {
                        setFactor(size);
                        setSelectedFactor(i - 1);
                      }}
                      customCSS={css`
                        background-color: #ed7001;
                        min-width: 50%;
                        margin: 10px 0px;
                      `}
                    >
                      {base}x{base}
                    </AtomButton>
                  );
                })}
              </AtomWrapper>
              <AtomWrapper
                width="max-content"
                flexWrap="wrap"
                flexDirection="row"
                justifyContent="space-between"
                position="relative"
              >
                <StyledImage
                  ref={ref}
                  alt="croppedImage`"
                  src={`${croppedImage}`}
                  customCSS={css`
                    width: 400px;
                    height: 400px;
                  `}
                />
                <AtomWrapper
                  position="absolute"
                  flexDirection="row"
                  flexWrap="wrap"
                  customCSS={css`
                    width: 100%;
                    height: 100%;
                    border: 2px solid #f5f5f5;
                  `}
                >
                  {Array.from(
                    { length: selectedfactor * 2 * (selectedfactor * 2) },
                    (_, i) => i
                  ).map((i) => (
                    <AtomWrapper
                      key={`Separator${i}`}
                      backgroundColor="transparent"
                      width={`${50 / selectedfactor}%`}
                      height={`${50 / selectedfactor}%`}
                      border="1px solid #f5f5f5"
                    />
                  ))}
                </AtomWrapper>
              </AtomWrapper>
            </AtomWrapper>
            <AtomWrapper
              margin="15px 0px 0px 0px"
              flexDirection="row"
              justifyContent="space-between"
            >
              <AtomButton
                backgroundColor="#ed7001"
                onClick={() => {
                  refInput.current?.click();
                }}
                customCSS={css`
                  input {
                    display: none;
                  }
                `}
              >
                CHANGE IMAGE
                <input
                  ref={refInput}
                  type="file"
                  onChange={(e) => {
                    if (e.target.files) {
                      const file = e?.target?.files[0];
                      const blob = new Blob([file], { type: 'image/png' });
                      setBlob(URL.createObjectURL(blob));
                      setFile(file);
                    }
                  }}
                />
              </AtomButton>
              <AtomButton
                backgroundColor="#ed7001"
                onClick={() => {
                  formik.validateForm();
                  formik.submitForm();
                }}
              >
                NEXT
              </AtomButton>
            </AtomWrapper>
          </AtomWrapper>
        </AtomWrapper>
      )}
    </AtomPage>
  );
};

export default PageIndex;

type styledImageProps = {
  customCSS?: SerializedStyles;
};
const StyledImage = styled.img<styledImageProps>`
  ${({ customCSS }) => customCSS}
`;
