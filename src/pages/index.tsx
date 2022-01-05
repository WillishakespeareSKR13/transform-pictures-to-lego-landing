import { css, SerializedStyles } from '@emotion/react';
import { AtomPage } from '@Src/components/@atoms';
import { AtomButton, AtomLoader, AtomText, AtomWrapper } from '@sweetsyui/ui';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { NextPageFC } from 'next';
import Cropper from 'react-easy-crop';
import {
  createRef,
  Dispatch,
  SetStateAction,
  useCallback,
  useRef,
  useState
} from 'react';
import styled from '@emotion/styled';
import getCroppedImg from '@Src/utils/getCropImage';
import OrganismsLoadImage from '@Src/components/@organisms/OrganismsLoadImage';
import DownloadPdf from '@Src/components/@atoms/AtomPdf';
import { brick } from '@Src/utils/legobricks';

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
    x: 300,
    y: 400
  },
  HORIZONTAL: {
    x: 400,
    y: 200
  },
  SQUARE: {
    x: 400,
    y: 400
  }
};

const PageIndex: NextPageFC = () => {
  const [blob, setBlob] = useState('');
  const [file, setFile] = useState({} as File);
  const [croppedImage, setCroppedImage] = useState('');
  const [cropImage, setCropImage] = useState<string[]>([]);
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
              <AtomWrapper
                maxWidth="calc(100% - 800px)"
                alignItems="center"
                justifyContent="center"
              >
                <AtomWrapper
                  width="max-content"
                  flexDirection="row"
                  alignItems="center"
                  margin="0px 0px 15px 0px"
                >
                  <input
                    type="checkbox"
                    onChange={(e) => setShowBorder(e.target.checked)}
                  />
                  <AtomText
                    margin="0px 0px 0px 10px"
                    fontSize="14px"
                    fontWeight={600}
                  >
                    SHOW BORDERS
                  </AtomText>
                </AtomWrapper>
                <AtomWrapper
                  flexWrap="wrap"
                  justifyContent="space-evenly"
                  flexDirection="row"
                  margin="0px 0px 20px 0px"
                >
                  {Object.entries(AllSizes).map((e) => (
                    <AtomButton
                      key={`Item${e[0]}`}
                      backgroundColor={sizes === e[0] ? '#ed7001' : '#1482dc'}
                      margin="0px 0px 10px 0px"
                      onClick={() => {
                        setSizes(e[0] as keyof typeof AllSizes);
                        setSize(SizeImage[e[0] as keyof typeof SizeImage]);
                      }}
                    >
                      <AtomText
                        color="white"
                        fontSize="14px"
                        fontWeight={600}
                        cursor="pointer"
                      >
                        {e[0]}
                      </AtomText>
                    </AtomButton>
                  ))}
                </AtomWrapper>
                <AtomWrapper alignItems="center">
                  {AllSizes[sizes].map((e, i) => (
                    <AtomButton
                      key={e.title}
                      onClick={() => setSizeSelected(i)}
                      customCSS={css`
                        min-width: 60%;
                        background-color: ${sizeSelected === i
                          ? '#ed7001'
                          : '#1482dc'};
                        margin: 0px 0px 5px 0px;
                      `}
                    >
                      {sizes.substring(0, 1)} - {e.title}
                    </AtomButton>
                  ))}
                </AtomWrapper>
              </AtomWrapper>
              <AtomWrapper
                refObject={ref}
                customCSS={css`
                  flex-direction: row;
                  flex-wrap: wrap;
                  align-items: flex-start;
                  justify-content: flex-start;
                  width: ${size.x}px;
                  height: ${size.y}px;
                `}
              >
                {loading ? (
                  <AtomLoader
                    type="small"
                    width="100%"
                    height="400px"
                    isLoading
                    colorLoading="#ed7001"
                  />
                ) : (
                  cropImage.map((image) => (
                    <StyledImage
                      key={`image${image}`}
                      src={image}
                      alt="croppedImage"
                      customCSS={css`
                        ${showBorder &&
                        css`
                          border: 1px solid #ffffff;
                        `}
                        width: ${size.x / AllSizes[sizes][sizeSelected].x}px;
                        height: ${size.y / AllSizes[sizes][sizeSelected].y}px;
                      `}
                    />
                  ))
                )}
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
          <AtomButton
            onClick={() =>
              cropAndFilter(
                size,
                croppedImage,
                setCropImage,
                AllSizes[sizes][sizeSelected].x,
                AllSizes[sizes][sizeSelected].y,
                setLoading
              )
            }
          >
            Actualizar
          </AtomButton>
          <DownloadPdf images={cropImage} />
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
  setStateLoading: Dispatch<SetStateAction<boolean>>
) => {
  setStateLoading(true);
  const blobcreateImage = createImage(blob);
  setState([]);
  blobcreateImage.addEventListener('load', () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    const w2 = sizeCanvas.x / splitx;
    const h2 = sizeCanvas.y / splity;
    canvas.width = w2;
    canvas.height = h2;
    const size = sizeCanvas.x * ((5 * 0.05) / ((8 + splitx - 1) * splitx - 1));
    const blendMode = 'overlay';
    const small = { height: h2 / size, width: w2 / size };
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
        context.imageSmoothingEnabled = false;
        const x = -corrd[i].x,
          y = -corrd[i].y;
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
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                       height="${h2}" width="${w2}">
                       <defs>
                         <pattern id="bricks" patternUnits="userSpaceOnUse" width="${size}" height="${size}">
                             <image xlink:href="${brick}" width="${size}" height="${size}" x="0" y="0" />
                         </pattern>
                     </defs>
                     <g transform="scale(${1})">
                         <image width="${w2}" height="${h2}" x="0" y="0" xlink:href="${canvas.toDataURL()}" />
                         <rect style="mix-blend-mode: ${blendMode}" fill="url(#bricks)" x="0" y="0" width="${w2}" height="${h2}" />
                     </g>
                     </svg>`;
        const imagesvg = `data:image/svg+xml;base64,${btoa(svg)}`;
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
        setState((state) => [...new Set([...state, canvas2.toDataURL()])]);
      });
    });
    setStateLoading(false);
  });
};
