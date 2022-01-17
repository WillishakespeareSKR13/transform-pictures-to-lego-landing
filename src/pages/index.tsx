/* eslint-disable @typescript-eslint/no-explicit-any */
import { css, SerializedStyles } from '@emotion/react';
import { AtomPage } from '@Src/components/@atoms';
import { AtomButton, AtomLoader, AtomText, AtomWrapper } from '@sweetsyui/ui';
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

const AllSizes = {
  VERTICAL: [
    {
      aspect: 2 / 3,
      title: 'SMALL',
      x: 2,
      y: 3
    },
    {
      aspect: 2 / 3,
      title: 'MEDIUM',
      x: 3,
      y: 4
    },
    {
      aspect: 2 / 3,
      title: 'LARGE',
      x: 3,
      y: 5
    },
    {
      aspect: 2 / 3,
      title: 'XLARGE',
      x: 4,
      y: 5
    },
    {
      aspect: 2 / 3,
      title: 'JUMBO',
      x: 4,
      y: 6
    }
  ],
  HORIZONTAL: [
    {
      aspect: 3 / 2,
      title: 'SMALL',
      x: 3,
      y: 2
    },
    {
      aspect: 3 / 2,
      title: 'MEDIUM',
      x: 4,
      y: 3
    },
    {
      aspect: 3 / 2,
      title: 'LARGE',
      x: 5,
      y: 3
    },
    {
      aspect: 3 / 2,
      title: 'XLARGE',
      x: 5,
      y: 4
    },
    {
      aspect: 3 / 2,
      title: 'JUMBO',
      x: 6,
      y: 4
    }
  ],
  SQUARE: [
    {
      aspect: 3 / 3,
      title: 'SMALL',
      x: 2,
      y: 2
    },
    {
      aspect: 3 / 3,
      title: 'MEDIUM',
      x: 3,
      y: 3
    },
    {
      aspect: 3 / 3,
      title: 'LARGE',
      x: 4,
      y: 4
    },
    {
      aspect: 3 / 3,
      title: 'XLARGE',
      x: 5,
      y: 5
    },
    {
      aspect: 3 / 3,
      title: 'JUMBO',
      x: 6,
      y: 6
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
  }
};

type ColorType = {
  [key: string]: { value: string; count: number; color: string };
};

const PageIndex: NextPageFC = () => {
  const [blob, setBlob] = useState('');
  const [file, setFile] = useState({} as File);
  const [croppedImage, setCroppedImage] = useState('');
  const [cropImage, setCropImage] = useState<string[]>([]);
  const [colors, setColors] = useState<ColorType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const refInput = useRef<HTMLInputElement>(null);
  const ref = createRef();
  const [showBorder, setShowBorder] = useState(false);
  const [size, setSize] = useState({
    x: 400,
    y: 400
  });
  const [sizes, setSizes] = useState<keyof typeof AllSizes>('SQUARE');
  const [sizeSelected, setSizeSelected] = useState<number>(0);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [quantity, setQuantity] = useState(0);

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
                  margin="0px 0px 5px 25px"
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
                      margin="0px 10px"
                      key={`Item${e[0]}`}
                      backgroundColor={sizes === e[0] ? '#ed7001' : '#1482dc'}
                      padding="5px 5px"
                      width={
                        iconsSquare[e[0] as keyof typeof iconsSquare]?.width ||
                        '50px'
                      }
                      height={
                        iconsSquare[e[0] as keyof typeof iconsSquare]?.height ||
                        '50px'
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
                  ${AllSizes[sizes].find((_, i) => i === sizeSelected)?.title}`}
                </AtomText>
                <AtomWrapper
                  maxWidth="max-content"
                  alignItems="center"
                  flexWrap="wrap"
                  flexDirection="row"
                >
                  {AllSizes[sizes].map((e, i) => (
                    <AtomButton
                      key={e.title}
                      onClick={() => {
                        setSizeSelected(i);
                        setCropImage([]);
                      }}
                      customCSS={css`
                        padding: 8px 18px;
                        background-color: ${sizeSelected === i
                          ? '#ed7001'
                          : '#1482dc'};
                        margin: 0px 0px 0px 15px;
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
                  type="checkbox"
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
                    aspect={AllSizes[sizes][sizeSelected].aspect}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                  />
                </AtomWrapper>
              </AtomWrapper>
              <AtomButton
                onClick={() => {
                  cropAndFilter(
                    size,
                    croppedImage,
                    setCropImage,
                    AllSizes[sizes][sizeSelected].x,
                    AllSizes[sizes][sizeSelected].y,
                    setLoading,
                    setColors
                  );
                  setQuantity(
                    AllSizes[sizes][sizeSelected].x *
                      AllSizes[sizes][sizeSelected].y
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
                    width: ${(400 / AllSizes[sizes][sizeSelected].y) *
                    AllSizes[sizes][sizeSelected].x}px;
                    height: 400px;
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
                        <>
                          <StyledImage
                            key={`image${i}`}
                            src={image}
                            alt="croppedImage"
                            customCSS={css`
                              ${showBorder &&
                              css`
                                border: 1px solid #ffffff;
                              `}
                              width: ${400 / AllSizes[sizes][sizeSelected].y}px;
                              height: ${400 /
                              AllSizes[sizes][sizeSelected].y}px;

                              /* width: ${size.x /
                              AllSizes[sizes][sizeSelected].x}px;
                            height: ${size.y /
                              AllSizes[sizes][sizeSelected].y}px; */
                            `}
                          />
                          {/* {400 / AllSizes[sizes][sizeSelected].y} */}
                        </>
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
                <DownloadPdf images={cropImage} colors={colors} />
              )}
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

function createImage(src: string) {
  const image = new Image();
  image.setAttribute('src', src);
  return image;
}

const cropAndFilter = (
  sizeCanvas: { x: number; y: number },
  blob: string,
  setState: Dispatch<SetStateAction<string[]>>,
  splitx: number,
  splity: number,
  setStateLoading: Dispatch<SetStateAction<boolean>>,
  setColors: Dispatch<SetStateAction<ColorType[]>>
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
    const base = Math.pow(2, 2 + (splitx + splity) / 2);
    const factor = (10 * 0.1) / base;
    // const factor = 400 * sizes;
    // const size = sizeCanvas.x * ((5 * 0.05) / ((8 + splitx - 1) * splitx - 1));
    const size = w2 * ((splitx * factor) / 2);
    const blendMode = 'overlay';
    const small = { height: (h2 / size) * 2, width: (w2 / size) * 2 };
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
    getArray.map((image) => {
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
          scale: 8,
          palette: mypalette
        };
        // console.log(mypalette);
        const px = new Pixel(config);
        px.draw().pixelate().convertPalette().saveImage();
        const size = 12.5;

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
          setState((state) => [...state, canvas3.toDataURL()]);

          // setState((state) => [...new Set([...state, canvas2.toDataURL()])]);
        });
        // setState((state) => [...state, imagesvg]);
      });
    });
    // console.log(getArray);
  });
};
