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
  colors?: ColorType[];
};

export const AtomPdf: FC<AtomPdfProps> = (props) => {
  const { images, colors } = props;
  return (
    <Document>
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
            <Image src={image} style={styles.image} />
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
};

const DownloadPdf: FC<DocumentProps> = (props) => {
  const { images, colors } = props;
  const [Document, setDocument] = useState(
    <AtomPdf images={images} colors={colors} />
  );
  useEffect(() => {
    setDocument(<AtomPdf images={images} colors={colors} />);
  }, [images, colors]);
  return (
    <div>
      <PDFDownloadLink document={Document} fileName="somename.pdf">
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
