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
  useEffect,
  useRef,
  useState
} from 'react';
import styled from '@emotion/styled';
import getCroppedImg from '@Src/utils/getCropImage';
import OrganismsLoadImage from '@Src/components/@organisms/OrganismsLoadImage';
import DownloadPdf from '@Src/components/@atoms/AtomPdf';
// import { brick } from '@Src/utils/legobricks';
// const images = [
//   'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
//   'data:image/jpeg;base64,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'
// ];

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
          cropAndFilter(
            size,
            croppedImage,
            setCropImage,
            AllSizes[sizes][sizeSelected].x,
            AllSizes[sizes][sizeSelected].y,
            setLoading
          );
        }
      } catch (e) {
        console.error(e);
      }
    },
    [file]
  );

  useEffect(() => {
    cropAndFilter(
      size,
      croppedImage,
      setCropImage,
      AllSizes[sizes][sizeSelected].x,
      AllSizes[sizes][sizeSelected].y,
      setLoading
    );
  }, [size, croppedImage, sizes, sizeSelected]);

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
          <AtomButton>prueba</AtomButton>
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
                     <g transform="scale(${1})">
                         <image width="${w2}" height="${h2}" x="0" y="0" xlink:href="${canvas.toDataURL()}" />
                         <rect style="mix-blend-mode: ${blendMode}" fill="url(#bricks)" x="0" y="0" width="${w2}" height="${h2}" />
                     </g>
                  </svg>`;
        return `data:image/svg+xml;base64,${btoa(svg)}`;
      }
    );
    setState(getArray);
    setStateLoading(false);
  });
};
