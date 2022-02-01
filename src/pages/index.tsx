/* eslint-disable @typescript-eslint/no-explicit-any */
import { css, SerializedStyles } from '@emotion/react';
import { AtomPage } from '@Src/components/@atoms';
import { AtomLoader, AtomText, AtomWrapper } from '@sweetsyui/ui';
import * as Yup from 'yup';
import Pixel from '@Utils/pixelit';
import { useFormik } from 'formik';
import { NextPageFC } from 'next';
import Cropper from 'react-easy-crop';
import {
  createRef,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import styled from '@emotion/styled';
import getCroppedImg from '@Src/utils/getCropImage';
import OrganismsLoadImage from '@Src/components/@organisms/OrganismsLoadImage';
import DownloadPdf from '@Src/components/@atoms/AtomPdf';
import { brick } from '@Src/utils/legobricks';
import color from '@Src/utils/colors';
import AtomModalImage from '@Src/components/@atoms/AtomModalImage';
import AtomButton from '@Src/components/@atoms/AtomButton';

const AllSizes = {
  VERTICAL: [
    {
      aspect: 2 / 3,
      title:
        'Small - 2 x 3 (6 total boards) 51.20cm x 76.80cm / 20.16in x 30.24in',
      x: 2,
      y: 3,
      isPortrait: false
    },
    {
      aspect: 3 / 4,
      title:
        'Medium - 3 x 4 (12 total boards) 76.80cm x 102.40cm / 30.24in x 40.32in',
      x: 3,
      y: 4,
      isPortrait: false
    },
    {
      aspect: 3 / 5,
      title:
        'Large - 3 x 5 (15 total boards) 76.80cm x 128cm / 30.24in x 50.40in',
      x: 3,
      y: 5,
      isPortrait: false
    },
    {
      aspect: 4 / 5,
      title:
        'XLarge - 4 x 5 (20 total boards) 102.40cm x 128cm / 40.32in x 50.40in',
      x: 4,
      y: 5,
      isPortrait: false
    },
    {
      aspect: 4 / 6,
      title:
        'Jumbo - 4 x 6 (24 total boards) 102.40cm x 153.60cm / 40.32in x 60.48in',
      x: 4,
      y: 6,
      isPortrait: false
    }
  ],
  HORIZONTAL: [
    {
      aspect: 3 / 2,
      title:
        'Small - 3 x 2 (6 total boards) 76.80cm x 51.20cm / 30.24in x 20.16in ',
      x: 3,
      y: 2,
      isPortrait: false
    },
    {
      aspect: 4 / 3,
      title:
        'Medium - 4 x 3 (12 total boards) 102.40cm x 76.80cm / 40.32in x 30.24',
      x: 4,
      y: 3,
      isPortrait: false
    },
    {
      aspect: 5 / 3,
      title:
        'Large - 5 x 3 (15 total boards) 128cm x 76.80cm / 50.40in x 30.24in',
      x: 5,
      y: 3,
      isPortrait: false
    },
    {
      aspect: 5 / 4,
      title:
        'XLarge - 5 x 4 (20 total boards) 128cm x 102.40cm / 50.40in x 40.32in',
      x: 5,
      y: 4,
      isPortrait: false
    },
    {
      aspect: 6 / 4,
      title:
        'Jumbo - 6 x 4 (24 total boards) 153.60cm x 102.40cm / 60.48in x 40.32in',
      x: 6,
      y: 4,
      isPortrait: false
    }
  ],
  SQUARE: [
    {
      aspect: 3 / 3,
      title:
        'Small -  2 x 2 (4 total boards) 51.20cm x 51.20cm / 20.16in x 20.16in',
      x: 2,
      y: 2,
      isPortrait: false
    },
    {
      aspect: 3 / 3,
      title:
        'Medium - 3 x 3 (9 total boards) 76.80cm x 76.80cm / 30.24in x 30.24in',
      x: 3,
      y: 3,
      isPortrait: false
    },
    {
      aspect: 3 / 3,
      title:
        'Large - 4 x 4 (16 total boards) 102.40cm x 102.40cm / 40.32in x 40.32in',
      x: 4,
      y: 4,
      isPortrait: false
    },
    {
      aspect: 3 / 3,
      title:
        'XLarge - 5 x 5 (25 total boards) 128cm x 128cm / 50.40in x 50.40in',
      x: 5,
      y: 5,
      isPortrait: false
    },
    {
      aspect: 3 / 3,
      title:
        'Jumbo - 6 x 6 (36 total boards) 153.60cm x 153.60cm / 60.40in x 60.40in',
      x: 6,
      y: 6,
      isPortrait: false
    }
  ],
  PORTRAIT: [
    {
      aspect: 3 / 3,
      title:
        'Portait - 1 x 1 (1 total boards) 51.20cm x 51.20cm / 20.16in x 20.16in',
      x: 1,
      y: 1,
      isPortrait: true
    }
  ]
};

const SizeImage = {
  VERTICAL: {
    x: 400,
    y: 400
  },
  HORIZONTAL: {
    x: 400,
    y: 400
  },
  SQUARE: {
    x: 400,
    y: 400
  },
  PORTRAIT: {
    x: 400,
    y: 400
  }
};

const iconsSquare = {
  VERTICAL: {
    width: '40px',
    height: '60px'
  },
  HORIZONTAL: {
    width: '60px',
    height: '40px'
  },
  SQUARE: {
    width: '40px',
    height: '40px'
  },
  PORTRAIT: {
    width: '40px',
    height: '40px'
  }
};

type ColorType = {
  [key: string]: { value: string; count: number; color: string };
};

const PageIndex: NextPageFC = () => {
  const [blob, setBlob] = useState('');
  const [file, setFile] = useState({} as File);
  const [croppedImage, setCroppedImage] = useState('');
  const [cropImage, setCropImage] = useState<
    {
      id: number;
      image: string;
    }[]
  >([]);
  const [colors, setColors] = useState<ColorType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const refInput = useRef<HTMLInputElement>(null);
  const ref = createRef();
  const [showBorder, setShowBorder] = useState(true);
  const [size, setSize] = useState({
    x: 400,
    y: 400
  });
  const [sizes, setSizes] = useState<keyof typeof AllSizes>('SQUARE');
  const [sizeSelected, setSizeSelected] = useState<number>(0);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [quantity, setQuantity] = useState(0);
  const [modalImage, setModalImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const onCropComplete = useCallback(
    async (_, croppedAreaPixels) => {
      try {
        if (file) {
          const croppedImage = await getCroppedImg(file, croppedAreaPixels, 0);
          setCroppedImage(croppedImage);
        }
      } catch (e) {
        console.error(e);
      }
    },
    [file]
  );

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

  useEffect(() => {
    if (cropImage.length === quantity) {
      setLoading(false);
    }
  }, [cropImage, quantity]);

  // console.log(cropImage);

  return (
    <>
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
                maxWidth="100%"
                flexDirection="row"
                alignItems="flex-end"
                justifyContent="flex-start"
                margin="0px 0px 20px 0px"
              >
                <AtomWrapper maxWidth="max-content">
                  <AtomText
                    color="#262626"
                    margin="0px 0px 5px 20px"
                    fontSize="22px"
                    fontWeight={600}
                  >
                    Layout Menu
                  </AtomText>
                  <AtomText
                    margin="0px 0px 5px 20px"
                    fontSize="12px"
                    fontWeight={600}
                  >
                    {`
                  Size: 
                  ${Object.entries(AllSizes).find((e) => sizes === e[0])?.[0]}`}
                  </AtomText>
                  <AtomWrapper
                    margin="0px 0px 0px 10px"
                    maxWidth="max-content"
                    flexWrap="wrap"
                    justifyContent="space-evenly"
                    flexDirection="row"
                    alignItems="flex-end"
                  >
                    {Object.entries(AllSizes).map((e) => (
                      <AtomButton
                        disabled={loading}
                        margin="0px 10px"
                        key={`Item${e[0]}`}
                        backgroundColor={sizes === e[0] ? '#ed7001' : '#1482dc'}
                        padding="5px 5px"
                        width={
                          iconsSquare[e[0] as keyof typeof iconsSquare]
                            ?.width || '50px'
                        }
                        height={
                          iconsSquare[e[0] as keyof typeof iconsSquare]
                            ?.height || '50px'
                        }
                        onClick={() => {
                          setSizes(e[0] as keyof typeof AllSizes);
                          setSize(SizeImage[e[0] as keyof typeof SizeImage]);
                          setCropImage([]);
                        }}
                      >
                        <AtomWrapper
                          width="100%"
                          height="100%"
                          borderRadius="5px"
                          border="2px solid white"
                          alignItems="center"
                          justifyContent="center"
                          cursor="pointer"
                        >
                          {e[0]?.substring(0, 1).toUpperCase()}
                        </AtomWrapper>
                      </AtomButton>
                    ))}
                  </AtomWrapper>
                </AtomWrapper>
                <AtomWrapper maxWidth="max-content">
                  <AtomText
                    margin="0px 0px 5px 15px"
                    fontSize="12px"
                    fontWeight={600}
                  >
                    {`
                  Size: 
                  ${
                    AllSizes[sizes].find(
                      (_, i) => i === (sizes === 'PORTRAIT' ? 0 : sizeSelected)
                    )?.title
                  }`}
                  </AtomText>
                  <AtomWrapper
                    maxWidth="max-content"
                    alignItems="center"
                    flexWrap="wrap"
                    flexDirection="row"
                  >
                    {AllSizes[sizes].map((e, i) => (
                      <AtomButton
                        disabled={loading}
                        key={e.title}
                        backgroundColor={
                          sizeSelected === i ? '#ed7001' : '#1482dc'
                        }
                        onClick={() => {
                          setSizeSelected(i);
                          setCropImage([]);
                        }}
                        customCSS={css`
                          padding: 8px 18px;
                          margin: 0px 0px 0px 15px;
                          ${sizes === 'PORTRAIT' &&
                          css`
                            opacity: 0;
                          `}
                        `}
                      >
                        {e.title.substring(0, 1)}
                      </AtomButton>
                    ))}
                  </AtomWrapper>
                </AtomWrapper>
                <AtomWrapper
                  width="max-content"
                  flexDirection="row"
                  alignItems="center"
                  margin="0px 0px 0px 20px"
                >
                  <input
                    disabled={loading}
                    type="checkbox"
                    checked={showBorder}
                    onChange={(e) => setShowBorder(e.target.checked)}
                  />
                  <AtomText
                    margin="0px 0px 0px 10px"
                    fontSize="12px"
                    fontWeight={600}
                  >
                    SHOW BORDERS
                  </AtomText>
                </AtomWrapper>
              </AtomWrapper>
              <AtomWrapper
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                customCSS={css`
                  min-height: 400px;
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
                      position: relative;
                      background-color: #3c3c3c;
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
                      aspect={
                        AllSizes[sizes][sizes === 'PORTRAIT' ? 0 : sizeSelected]
                          ?.aspect
                      }
                      onCropChange={setCrop}
                      onCropComplete={onCropComplete}
                      onZoomChange={setZoom}
                    />
                    <AtomWrapper
                      customCSS={css`
                        align-items: center;
                        justify-content: space-between;
                        padding: 0px 20px;
                        flex-direction: row;
                        background-color: white;
                        bottom: 40px;
                        left: 50%;
                        width: 100%;
                        border-radius: 0px;
                        height: 40px;
                        z-index: 1;
                        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                        input {
                          margin: 0px 0px 0px 10px;
                          width: 70%;
                        }
                      `}
                    >
                      <AtomText fontWeight={600}>{`Zoom: ${zoom}`}</AtomText>
                      <input
                        type="range"
                        min="1"
                        max="3"
                        value={zoom}
                        onChange={(e) => setZoom(Number(e.target.value))}
                      />
                    </AtomWrapper>
                  </AtomWrapper>
                </AtomWrapper>
                <AtomButton
                  disabled={loading}
                  onClick={() => {
                    cropAndFilter(
                      size,
                      croppedImage,
                      setCropImage,
                      AllSizes[sizes][sizes === 'PORTRAIT' ? 0 : sizeSelected]
                        .x,
                      AllSizes[sizes][sizes === 'PORTRAIT' ? 0 : sizeSelected]
                        .y,
                      setLoading,
                      setColors,
                      AllSizes[sizes][sizes === 'PORTRAIT' ? 0 : sizeSelected]
                        .isPortrait
                    );
                    setQuantity(
                      AllSizes[sizes][sizes === 'PORTRAIT' ? 0 : sizeSelected]
                        .x *
                        AllSizes[sizes][sizes === 'PORTRAIT' ? 0 : sizeSelected]
                          .y
                    );
                  }}
                >
                  TRANSFORM
                </AtomButton>

                {cropImage.length === 0 && !loading ? (
                  <AtomWrapper
                    customCSS={css`
                      width: 400px;
                      height: 400px;
                      align-items: center;
                      justify-content: center;
                      background-color: #cccccc;
                    `}
                  >
                    <AtomText
                      fontWeight={600}
                      fontSize="22px"
                      color="white"
                      align="center"
                    >
                      TRANSFORM IMAGE TO DOWNLOAD
                    </AtomText>
                  </AtomWrapper>
                ) : (
                  <AtomWrapper
                    customCSS={css`
                      ${AllSizes[sizes][sizes === 'PORTRAIT' ? 0 : sizeSelected]
                        .y >
                      AllSizes[sizes][sizes === 'PORTRAIT' ? 0 : sizeSelected].x
                        ? css`
                            width: ${(400 /
                              AllSizes[sizes][
                                sizes === 'PORTRAIT' ? 0 : sizeSelected
                              ].y) *
                            AllSizes[sizes][
                              sizes === 'PORTRAIT' ? 0 : sizeSelected
                            ].x}px;
                            height: 400px;
                          `
                        : css`
                            height: ${(400 /
                              AllSizes[sizes][
                                sizes === 'PORTRAIT' ? 0 : sizeSelected
                              ].x) *
                            AllSizes[sizes][
                              sizes === 'PORTRAIT' ? 0 : sizeSelected
                            ].y}px;
                            width: 400px;
                          `}

                      align-items: center;
                      justify-content: center;
                      background-color: #cccccc;
                    `}
                  >
                    {loading ? (
                      <AtomLoader
                        isLoading
                        colorLoading="#ed7001"
                        type="small"
                        width="100%"
                        height="100%"
                      />
                    ) : (
                      <AtomWrapper
                        refObject={ref}
                        customCSS={css`
                          flex-direction: row;
                          flex-wrap: wrap;
                          align-items: flex-start;
                          justify-content: flex-start;
                          width: max-content;
                          height: max-content;
                        `}
                      >
                        {cropImage.map((image, i) => (
                          <AtomButton
                            key={`image${i}`}
                            customCSS={css`
                              display: flex;
                              padding: 0px;
                            `}
                            onClick={() => {
                              setModalImage(true);
                              setSelectedImage(i);
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
                                ${AllSizes[sizes][
                                  sizes === 'PORTRAIT' ? 0 : sizeSelected
                                ].y >
                                AllSizes[sizes][
                                  sizes === 'PORTRAIT' ? 0 : sizeSelected
                                ].x
                                  ? css`
                                      width: ${400 /
                                      AllSizes[sizes][
                                        sizes === 'PORTRAIT' ? 0 : sizeSelected
                                      ].y}px;
                                      height: ${400 /
                                      AllSizes[sizes][
                                        sizes === 'PORTRAIT' ? 0 : sizeSelected
                                      ].y}px;
                                    `
                                  : css`
                                      width: ${400 /
                                      AllSizes[sizes][
                                        sizes === 'PORTRAIT' ? 0 : sizeSelected
                                      ].x}px;
                                      height: ${400 /
                                      AllSizes[sizes][
                                        sizes === 'PORTRAIT' ? 0 : sizeSelected
                                      ].x}px;
                                    `} /* width: ${size.x /
                                AllSizes[sizes][
                                  sizes === 'PORTRAIT' ? 0 : sizeSelected
                                ].x}px;
                            height: ${size.y /
                                AllSizes[sizes][
                                  sizes === 'PORTRAIT' ? 0 : sizeSelected
                                ].y}px; */
                              `}
                            />
                            {/* {400 / AllSizes[sizes][sizes === 'PORTRAIT'?0:sizeSelected].y} */}
                          </AtomButton>
                        ))}
                      </AtomWrapper>
                    )}
                  </AtomWrapper>
                )}
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
                {cropImage.length === 0 ? (
                  <AtomButton backgroundColor="#ed7001">
                    TRANSFORM IMAGE TO DOWNLOAD
                  </AtomButton>
                ) : (
                  <DownloadPdf
                    images={cropImage.map((image) => image.image)}
                    colors={colors}
                    height={`${
                      AllSizes[sizes][sizes === 'PORTRAIT' ? 0 : sizeSelected].y
                    }`}
                    width={`${
                      AllSizes[sizes][sizes === 'PORTRAIT' ? 0 : sizeSelected].x
                    }`}
                    isPortrait={
                      AllSizes[sizes][sizes === 'PORTRAIT' ? 0 : sizeSelected]
                        .isPortrait
                    }
                  />
                )}
              </AtomWrapper>
            </AtomWrapper>
          </AtomWrapper>
        )}
      </AtomPage>
      <AtomModalImage
        state={modalImage}
        setState={setModalImage}
        selected={selectedImage}
        setSelected={setSelectedImage}
        images={cropImage
          .sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0))
          .map((image) => image.image)}
      />
    </>
  );
};

export default PageIndex;

type styledImageProps = {
  customCSS?: SerializedStyles;
};
const StyledImage = styled.img<styledImageProps>`
  ${({ customCSS }) => customCSS}
`;

function createImage(src: string) {
  const image = new Image();
  image.setAttribute('src', src);
  return image;
}

const cropAndFilter = (
  sizeCanvas: { x: number; y: number },
  blob: string,
  setState: Dispatch<
    SetStateAction<
      {
        id: number;
        image: string;
      }[]
    >
  >,
  splitx: number,
  splity: number,
  setStateLoading: Dispatch<SetStateAction<boolean>>,
  setColors: Dispatch<SetStateAction<ColorType[]>>,
  isPortrait: boolean
) => {
  setStateLoading(true);
  const blobcreateImage = createImage(blob);
  setState([]);
  setColors([]);
  blobcreateImage.addEventListener('load', () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    const w2 = sizeCanvas.x;
    const h2 = sizeCanvas.y;
    canvas.width = w2;
    canvas.height = h2;
    // const base = Math.pow(2, 2 + (splitx + splity) / 2);
    // const factor = (10 * 0.1) / base;
    // const factor = 400 * sizes;
    // const size = sizeCanvas.x * ((5 * 0.05) / ((8 + splitx - 1) * splitx - 1));
    // const size = w2 * ((splitx * factor) / 2);
    const blendMode = 'normal';
    const small = { height: h2, width: w2 };
    // const small = { height: h2, width: w2 };
    const corrd = Array.from({ length: splity }, (_, a1i) => a1i)
      .map((ai) =>
        Array.from({ length: splitx }, (_, a2i) => a2i).map((bi) => ({
          x: w2 * bi,
          y: h2 * ai
        }))
      )
      .flat();
    const getArray = Array.from({ length: splity * splitx }, (_, i) => i).map(
      (i) => {
        // setState((state) => [...new Set([...state, url])]);
        // console.log(url);
        // context.imageSmoothingEnabled = false;
        const x = -corrd[i].x;
        const y = -corrd[i].y;
        context.drawImage(
          blobcreateImage,
          0,
          0,
          small.width * 1,
          small.height * 1
        );
        context.rect(0, 0, w2, h2);
        context.drawImage(
          canvas,
          0,
          0,
          small.width * 1,
          small.height * 1,
          x,
          y,
          w2 * splitx,
          h2 * splity
        );

        return canvas.toDataURL('image/png');

        const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                       height="${h2}" width="${w2}">
                       <defs>
                         <pattern id="bricks" patternUnits="userSpaceOnUse" width="${
                           (800 - 87.5 * ((splitx + splity) / 2 - 2)) * 0.03125
                         }" height="${
          (800 - 87.5 * ((splitx + splity) / 2 - 2)) * 0.03125
        }">
                             <image xlink:href="${brick}" width="${
          (800 - 87.5 * ((splitx + splity) / 2 - 2)) * 0.03125
        }" height="${
          (800 - 87.5 * ((splitx + splity) / 2 - 2)) * 0.03125
        }" x="0" y="0" />
                         </pattern>
                     </defs>
                     <g transform="scale(${1})">
                         <image width="${w2}" height="${h2}" x="0" y="0" xlink:href="${canvas.toDataURL()}" />
                         <rect style="mix-blend-mode: ${blendMode}" fill="url(#bricks)" x="0" y="0" width="${w2}" height="${h2}" />
                     </g>
                     </svg>`;
        const imagesvg = `data:image/svg+xml;base64,${btoa(svg)}`;
        // const imagesvg = canvas.toDataURL();
        return imagesvg;
      }
    );
    getArray.map((image, idx) => {
      const imgElement = createImage(image);
      imgElement.addEventListener('load', () => {
        const canvas2 = document.createElement('canvas');
        const context2 = canvas2.getContext('2d') as CanvasRenderingContext2D;
        canvas2.width = w2;
        canvas2.height = h2;
        context2.drawImage(imgElement, 0, 0);
        const mypalette = color.map((c) => {
          const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
            c.hex
          ) ?? ['0', '0', '0'];

          return [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16)
          ];
        });
        const config = {
          to: canvas2,
          from: imgElement,
          scale: isPortrait ? 12.5 : 8,
          palette: mypalette
        };
        // console.log(mypalette);
        const px = new Pixel(config);
        px.draw().pixelate().convertPalette().saveImage();
        const size = isPortrait ? 8 : 12.5;

        const data = context2.getImageData(0, 0, w2, h2).data;
        // console.log(data.length);

        function rgb2hex(rgb: string) {
          const rgb2 = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/) ?? [
            '0',
            '0',
            '0'
          ];
          function hex(x: string) {
            return ('0' + parseInt(x).toString(16)).slice(-2);
          }
          return '#' + hex(rgb2[1]) + hex(rgb2[2]) + hex(rgb2[3]);
        }

        const colorList: string[] = [];
        for (let i = 0, n = data.length; i < n; i += 4) {
          // const r = data[i];
          // const g = data[i + 1];
          // const b = data[i + 2];
          //If you need the alpha value it's data[i + 3]
          // const hex = rgb2hex('rgb(' + r + ',' + g + ',' + b + ')');

          const colorSim = (
            rgbColor: string | any[],
            compareColor: number[]
          ) => {
            let i;
            let max;
            let d = 0;
            for (i = 0, max = rgbColor.length; i < max; i++) {
              d +=
                (rgbColor[i] - compareColor[i]) *
                (rgbColor[i] - compareColor[i]);
            }
            return Math.sqrt(d);
          };

          const similarColor = (actualColor: number[], palette: any[]) => {
            let selectedColor: string[] = [];
            let currentSim = colorSim(actualColor, palette[0]);
            let nextColor;
            palette.forEach((color: any[]) => {
              nextColor = colorSim(actualColor, color);
              if (nextColor <= currentSim) {
                selectedColor = color;
                currentSim = nextColor;
              }
            });
            const hex = rgb2hex(
              'rgb(' +
                selectedColor[0] +
                ',' +
                selectedColor[1] +
                ',' +
                selectedColor[2] +
                ')'
            );
            return hex;
          };
          colorList.push(
            similarColor([data[i], data[i + 1], data[i + 2]], mypalette)
          );
        }

        setColors((colorState) => [
          ...colorState,
          colorList.reduce((acc, curr) => {
            // const isColor = color.find((g) => g.hex === curr);
            const isRepeat = acc[curr] ? true : false;
            // console.log(curr);
            return {
              ...acc,
              [curr]: {
                color: curr,
                value: curr,
                count: isRepeat ? acc[curr].count + 1 : 1
              }
            };
          }, {} as ColorType)
        ]);
        // console.log((400 - 87.5 * ((splitx + splity) / 2 - 2)) * 0.03125);
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                       height="${h2}" width="${w2}">
                       <defs>
                          <pattern id="bricks" patternUnits="userSpaceOnUse" width="${size}" height="${size}">
                                <image xlink:href="${brick}" width="${size}" height="${size}" x="0" y="0" />
                            </pattern>
                     </defs>
                     <g transform="scale(${1})">
                         <image width="${w2}" height="${h2}" x="0" y="0" xlink:href="${canvas2.toDataURL()}" />
                         <rect style="mix-blend-mode: ${blendMode}" fill="url(#bricks)" x="0" y="0" width="${w2}" height="${h2}" />
                     </g>
                     </svg>`;
        const imagesvg = `data:image/svg+xml;base64,${btoa(svg)}`;
        // const imagesvg = canvas.toDataURL();
        // return imagesvg;
        const imgElement3 = createImage(imagesvg);
        imgElement3.addEventListener('load', () => {
          const canvas3 = document.createElement('canvas');
          const context3 = canvas3.getContext('2d') as CanvasRenderingContext2D;
          canvas3.width = w2;
          canvas3.height = h2;
          context3.drawImage(imgElement3, 0, 0);
          setState((state) =>
            [
              ...state,
              {
                id: idx,
                image: canvas3.toDataURL()
              }
            ].sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0))
          );

          // setState((state) => [...new Set([...state, canvas2.toDataURL()])]);
        });
        // setState((state) => [...state, imagesvg]);
      });
    });
    // console.log(getArray);
  });
};
