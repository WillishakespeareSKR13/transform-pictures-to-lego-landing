/* eslint-disable jsx-a11y/alt-text */
import React, { FC, useEffect, useState } from 'react';
import {
  Page,
  View,
  Document,
  StyleSheet,
  // usePDF,
  Image,
  PDFDownloadLink
} from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  image: {
    width: 400,
    height: 400
  }
});

type AtomPdfProps = {
  images: string[];
};

export const AtomPdf: FC<AtomPdfProps> = (props) => {
  const { images } = props;
  return (
    <Document>
      {images?.map((image, index) => (
        <Page key={`${index + 1}`} size="A4" style={styles.page}>
          <View style={styles.section} key={index}>
            <Image src={image} style={styles.image} />
          </View>
        </Page>
      ))}
    </Document>
  );
};

type DocumentProps = {
  images: string[];
};

const DownloadPdf: FC<DocumentProps> = (props) => {
  const { images } = props;
  const [Document, setDocument] = useState(<AtomPdf images={images} />);
  useEffect(() => {
    setDocument(<AtomPdf images={images} />);
  }, [images]);
  return (
    <div>
      <PDFDownloadLink document={Document} fileName="somename.pdf">
        {({ loading }) => (loading ? 'cargando documento...' : 'Descargar!')}
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
