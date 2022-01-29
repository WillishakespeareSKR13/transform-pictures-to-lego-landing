/* eslint-disable jsx-a11y/alt-text */
import React, { FC, useEffect, useState } from 'react';
import {
  Page,
  View,
  Document,
  StyleSheet,
  Text,
  // usePDF,
  Image,
  PDFDownloadLink
} from '@react-pdf/renderer';
import { AtomButton } from '@sweetsyui/ui';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  image: {
    width: 400,
    height: 400
  },
  main: {
    width: '100px',
    flexDirection: 'column',
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
    fontSize: 12,
    textAlign: 'center'
  }
});

type AtomPdfProps = {
  images: string[];
  width?: string;
  height?: string;
  colors?: ColorType[];
  isPortrait?: boolean;
};

export const AtomPdf: FC<AtomPdfProps> = (props) => {
  const { images, colors, width, height, isPortrait } = props;
  const stylesImg = StyleSheet.create({
    image: {
      width: 400 / Number(width),
      height: 400 / Number(width)
    }
  });
  return (
    <Document>
      <Page>
        <View style={styles.section}>
          <View style={styles.main}>
            {colors
              ?.map((color) =>
                Object.entries(color).map(([_, value]) => ({
                  ...value,
                  count: Math.round(value.count / 156.25)
                }))
              )
              .flat()
              .reduce((acc, curr) => {
                const isColor = acc.find((color) => color.value === curr.value);
                return isColor
                  ? acc.map((e) =>
                      e.value === curr.value
                        ? { ...e, count: e.count + curr.count }
                        : e
                    )
                  : [...acc, curr];
              }, [] as { value: string; count: number; color: string }[])
              .map((color) => (
                <View key={color.value} style={styles.mainContainer}>
                  <View
                    style={{
                      width: '20px',
                      height: '20px',
                      backgroundColor: color.value
                    }}
                  ></View>
                  <Text style={styles.text}>{color.count}</Text>
                </View>
              ))}
            <Text style={styles.text}>
              Total: {1024 * Number(width) * Number(height)}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              width:
                Number(width) > Number(height)
                  ? (400 / Number(height)) * Number(width)
                  : (400 / Number(width)) * Number(height) + Number(width) * 4
            }}
          >
            {images.map((image, index) => (
              <View
                key={index}
                style={{
                  position: 'relative',
                  border: '2px solid white'
                }}
              >
                <Image style={stylesImg.image} src={image} />
                <Text
                  style={{
                    position: 'absolute',
                    color: '#ffffff',
                    top: `${400 / Number(width) / 2 - 7}px`,
                    left: `${400 / Number(width) / 2 - 7}px`,
                    fontSize: 32
                  }}
                >
                  {index + 1}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
      {images?.map((image, index) => (
        <Page key={`${index + 1}`} size="A4" style={styles.page}>
          <View style={styles.section} key={index}>
            <View style={styles.main}>
              {Object.entries(colors?.[index] ?? {})
                .map((color) => ({
                  ...color[1],
                  count: Math.round(color[1].count / 156.25)
                }))
                .filter((color) => color.count > 0)
                .map((color) => (
                  <View key={color.value} style={styles.mainContainer}>
                    <View
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: color.value
                      }}
                    ></View>
                    <Text style={styles.text}>{color.count}</Text>
                  </View>
                ))}
              <Text style={styles.text}>Total: {1024}</Text>
            </View>

            {/* <Text style={styles.text}>
              {Object.entries(colors?.find((_, idx) => idx === index) ?? {})
                .map((color) => ({
                  ...color[1],
                  count: Math.round(color[1].count / 156.25)
                }))
                .filter((color) => color.count > 0)
                .reduce((acc, color) => acc + color.count, 0)}
            </Text> */}
            <View
              style={{
                width: '440px',
                height: '440px'
              }}
            >
              <View
                style={{
                  width: '440px',
                  height: '20px',
                  flexDirection: 'row',
                  padding: '0px 0px 0px 20px',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                {Array.from({ length: isPortrait ? 50 : 32 }, (_, idx) => (
                  <Text
                    style={{
                      fontSize: `${isPortrait ? 6 : 9}px`,
                      fontWeight: 600
                    }}
                  >
                    {idx + 1}
                  </Text>
                ))}
              </View>
              <View
                style={{
                  width: '440px',
                  height: '420px',
                  flexDirection: 'row'
                }}
              >
                <View
                  style={{
                    width: '20px',
                    height: '420px',
                    padding: '0px 0px 0px 0px',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  {Array.from({ length: isPortrait ? 50 : 32 }, (_, idx) => (
                    <Text
                      style={{
                        fontSize: `${isPortrait ? 6 : 9}px`,
                        fontWeight: 600
                      }}
                    >
                      {idx + 1}
                    </Text>
                  ))}
                </View>
                <Image
                  src={image}
                  style={{
                    width: '420px',
                    height: '420px'
                  }}
                />
              </View>
            </View>
          </View>
        </Page>
      ))}
    </Document>
  );
};

type ColorType = {
  [key: string]: { value: string; count: number; color: string };
};

type DocumentProps = {
  images: string[];
  colors?: ColorType[];
  width?: string;
  height?: string;
  isPortrait?: boolean;
};

const DownloadPdf: FC<DocumentProps> = (props) => {
  const { images, colors, width, height, isPortrait } = props;
  const [Document, setDocument] = useState(
    <AtomPdf
      images={images}
      colors={colors}
      height={height}
      width={width}
      isPortrait={isPortrait}
    />
  );
  useEffect(() => {
    setDocument(
      <AtomPdf
        images={images}
        colors={colors}
        height={height}
        width={width}
        isPortrait={isPortrait}
      />
    );
  }, [images, colors]);
  return (
    <div>
      <PDFDownloadLink
        document={Document}
        fileName={`${new Date().toLocaleString()}.pdf`}
      >
        {({ loading }) =>
          loading ? (
            <AtomButton backgroundColor="#ed7001">LOAD DOCUMENT</AtomButton>
          ) : (
            <AtomButton backgroundColor="#ed7001">DOWNLOAD</AtomButton>
          )
        }
      </PDFDownloadLink>
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
