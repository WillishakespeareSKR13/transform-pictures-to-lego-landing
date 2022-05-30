/* eslint-disable jsx-a11y/alt-text */
import React, { FC, useEffect, useState } from 'react';
import {
  Page,
  View,
  Document,
  StyleSheet,
  Text,
  usePDF,
  Image
} from '@react-pdf/renderer';
import PaymentModal from '@Src/components/@molecules/PaymentModalDashboard';
import { IBoard, IBoardSize } from 'graphql';
import { COLORTYPE } from '@Src/config';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems: 'center'
  },
  section: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 750,
    height: 750
  },
  mainUP: {
    width: '100%',
    height: 200,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  main: {
    width: '100%',
    height: 300,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
    alignItems: 'center'
  },
  text: {
    marginLeft: 5,
    fontSize: 18,
    marginRight: 10,
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'bold'
  },
  ImageLogo: {
    height: '80px',
    width: '200px',
    marginBottom: 20
  },
  colorsView: {
    width: '100%',
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  }
});
type AtomPdfProps = {
  imagesBlock: string[];
  images: string[];
  width?: string;
  height?: string;
  colors?: ColorType[];
  isPortrait?: boolean;
  payment: {
    board?: IBoard;
    size?: IBoardSize;
    isReady?: boolean;
    color?: COLORTYPE[];
  };
};

export const AtomPdf = (props: AtomPdfProps) => {
  const { images, imagesBlock, colors, width, height, isPortrait } = props;
  const stylesImg = StyleSheet.create({
    image: {
      width:
        750 / (Number(height) > Number(width) ? Number(height) : Number(width)),
      height:
        750 / (Number(height) > Number(width) ? Number(height) : Number(width))
    }
  });
  return (
    <Document>
      <Page style={styles.page} size={'A3'}>
        <Image style={styles.ImageLogo} src="/images/logo.png" />
        <View style={styles.section}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              width:
                Number(width) > Number(height)
                  ? (750 / Number(width)) * Number(width)
                  : (750 / Number(height)) * Number(width)
            }}
          >
            {imagesBlock.map((image, index) => (
              <View
                key={index}
                style={{
                  position: 'relative'
                }}
              >
                <Image style={stylesImg.image} src={image} />
              </View>
            ))}
          </View>
          <View style={styles.colorsView}>
            <View style={styles.mainUP}>
              {colors
                ?.map((color) =>
                  Object.entries(color).map(([_, value]) => ({
                    ...value,
                    count: Math.ceil(value.count / 156.25)
                  }))
                )
                .flat()
                .reduce((acc, curr) => {
                  const isColor = acc.find(
                    (color) => color.value === curr.value
                  );
                  return isColor
                    ? acc.map((e) =>
                        e.value === curr.value
                          ? { ...e, count: e.count + curr.count }
                          : e
                      )
                    : [...acc, curr];
                }, [] as { value: string; count: number; color: string; img: string }[])
                .map((color) => (
                  <View key={color.value} style={styles.mainContainer}>
                    <View
                      style={{
                        width: '25px',
                        height: '25px',
                        backgroundColor: color.value,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Image
                        src={
                          color?.img ??
                          'http://via.placeholder.com/300.jpg/transparent?text=W'
                        }
                        style={{
                          width: '15px',
                          height: '15px'
                        }}
                      />
                    </View>
                    <Text style={styles.text}>{color.count}</Text>
                  </View>
                ))}
            </View>
            <Text style={styles.text}>
              Total: {isPortrait ? 2500 : 1024 * Number(width) * Number(height)}
            </Text>
          </View>
        </View>
      </Page>
      {images?.map((image, index) => (
        <Page key={`${index + 1}`} size="A3" style={styles.page}>
          <Image style={styles.ImageLogo} src="/images/logo.png" />

          <View style={styles.section} key={index}>
            <View
              style={{
                width: '750px',
                height: '750px',
                position: 'relative'
              }}
            >
              <View
                style={{
                  width: '800px',
                  height: '20px',
                  flexDirection: 'row',
                  position: 'absolute',
                  left: `-${750 / (isPortrait ? 50 : 32)}px`,
                  top: `-${750 / (isPortrait ? 50 : 32)}px`
                }}
              >
                <View
                  style={{
                    width: `${750 / (isPortrait ? 50 : 32)}px`,
                    height: `${750 / (isPortrait ? 50 : 32)}px`
                  }}
                />
                {Array.from({ length: isPortrait ? 50 : 32 }, (_, idx) => (
                  <View
                    style={{
                      width: `${750 / (isPortrait ? 50 : 32)}px`,
                      height: `${750 / (isPortrait ? 50 : 32)}px`,
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Text
                      style={{
                        fontSize: `${isPortrait ? 6 : 9}px`,
                        fontWeight: 600,
                        color: 'black'
                      }}
                    >
                      {idx + 1}
                    </Text>
                  </View>
                ))}
              </View>
              <View
                style={{
                  height: '800px',
                  width: '20px',
                  flexDirection: 'column',
                  position: 'absolute',
                  left: `-${750 / (isPortrait ? 50 : 32)}px`,
                  top: `-${750 / (isPortrait ? 50 : 32)}px`
                }}
              >
                <View
                  style={{
                    width: `${750 / (isPortrait ? 50 : 32)}px`,
                    height: `${750 / (isPortrait ? 50 : 32)}px`
                  }}
                />
                {Array.from({ length: isPortrait ? 50 : 32 }, (_, idx) => (
                  <View
                    style={{
                      width: `${750 / (isPortrait ? 50 : 32)}px`,
                      height: `${750 / (isPortrait ? 50 : 32)}px`,
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Text
                      style={{
                        fontSize: `${isPortrait ? 6 : 9}px`,
                        fontWeight: 600,
                        color: 'black'
                      }}
                    >
                      {idx + 1}
                    </Text>
                  </View>
                ))}
              </View>

              <Image
                src={image}
                style={{
                  width: '750px',
                  height: '750px'
                }}
              />
            </View>

            <View style={styles.colorsView}>
              <View style={styles.main}>
                {Object.entries(colors?.[index] ?? {})
                  .map((color) => ({
                    ...color[1],
                    count: Math.ceil(color[1].count / 156.25)
                  }))
                  .filter((color) => color.count > 0)
                  .map((color) => (
                    <View key={color.value} style={styles.mainContainer}>
                      <View
                        style={{
                          width: '25px',
                          height: '25px',
                          backgroundColor: color.value,
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Image
                          src={
                            color?.img ??
                            'http://via.placeholder.com/300.jpg/transparent?text=W'
                          }
                          style={{
                            width: '15px',
                            height: '15px'
                          }}
                        />
                      </View>
                      <Text style={styles.text}>{color.count}</Text>
                    </View>
                  ))}
              </View>
              <Text style={styles.text}>Total: {isPortrait ? 2500 : 1024}</Text>
            </View>
          </View>
        </Page>
      ))}
    </Document>
  );
};

type ColorType = {
  [key: string]: { value: string; count: number; color: string; img: string };
};

type DocumentProps = {
  images: string[];
  imagesBlock: string[];
  colors?: ColorType[];
  width?: string;
  height?: string;
  isPortrait?: boolean;
  payment: {
    board?: IBoard;
    size?: IBoardSize;
    isReady?: boolean;
    color?: COLORTYPE[];
  };
};

const DownloadPdf: FC<DocumentProps> = (props) => {
  const { images, imagesBlock, colors, width, height, isPortrait, payment } =
    props;
  const [Document, setDocument] = useState(
    <AtomPdf
      imagesBlock={imagesBlock}
      images={images}
      colors={colors}
      height={height}
      width={width}
      isPortrait={isPortrait}
      payment={payment}
    />
  );
  useEffect(() => {
    setDocument(
      <AtomPdf
        imagesBlock={imagesBlock}
        images={images}
        colors={colors}
        height={height}
        width={width}
        isPortrait={isPortrait}
        payment={payment}
      />
    );
  }, [images, colors]);
  const pdf = usePDF({ document: Document });
  return (
    <div>
      <PaymentModal {...payment} pdf={pdf} />
      {/* <PDFDownloadLink
        document={Document}
        fileName={`${new Date().toLocaleString()}.pdf`}
      >
        {({ loading }) =>
          loading ? (
            <AtomButton
              width="200px"
              backgroundColor="#d6d6d7"
              color="#4a4a54"
              fontSize="12px"
              padding="10px 30px"
            >
              LOAD DOCUMENT
            </AtomButton>
          ) : (
            <>
              <PaymentModal {...payment} />
              <AtomButton
                width="200px"
                backgroundColor="#e95c10"
                fontSize="12px"
                padding="10px 30px"
              >
                DOWNLOAD
              </AtomButton>
            </>
          )
        }
      </PDFDownloadLink> */}
    </div>
  );
};

// const DownloadPdf2: FC<DocumentProps> = (props) => {
//   const { images } = props;
//   const [Document, setDocument] = useState(<AtomPdf images={images} />);
//   console.log(`Download`, images);
//   useEffect(() => {
//     setDocument(<AtomPdf images={images} />);
//   }, [images]);
//   const [instance] = usePDF({ document: Document });
//   if (instance.loading) return <div>Loading ...</div>;
//   if (instance.error)
//     return <div>Something went wrong:{`${instance.error}`}</div>;
//   return (
//     <>
//       <a href={`${instance.url}`} download="test.pdf">
//         Descargar
//       </a>
//     </>
//   );
// };

export default DownloadPdf;
