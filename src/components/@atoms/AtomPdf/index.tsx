import React, { FC, useEffect, useState } from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  usePDF,
  Image
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
  // console.log(`images que entran`, images);
  return (
    <Document>
      {images.length > 0 ? (
        images.map((image, index) => (
          <Page key={`${index + 1}`} size="A4" style={styles.page}>
            <View style={styles.section} key={index}>
              <Image src={image} style={styles.image} />
            </View>
          </Page>
        ))
      ) : (
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>No hay imagenes</Text>
          </View>
        </Page>
      )}
    </Document>
  );
};

type DocumentProps = {
  images: string[];
};
const DownloadPdf: FC<DocumentProps> = (props) => {
  const { images } = props;
  const [FechtImage, setFechtImage] = useState<string[]>([]);
  useEffect(() => {
    const prueba = async () => {
      const allimages = await Promise.all(
        images.map((image) =>
          fetch(image)
            .then((res) => res.blob())
            .then((blob) => URL.createObjectURL(blob))
        )
      );
      setFechtImage(allimages);
    };
    prueba();
  }, [images]);
  // console.log(`images que entran en donwload`, images);
  // console.log(`images fechtimage`, FechtImage);
  const Document = <AtomPdf images={FechtImage} />;

  const [instance] = usePDF({ document: Document });
  if (instance.loading) return <div>Loading ...</div>;
  if (instance.error)
    return <div>Something went wrong:{`${instance.error}`}</div>;
  return (
    <>
      <AtomPdf images={FechtImage} />;
      <a href={`${instance.url}`} download="test.pdf">
        Download
      </a>
    </>
  );
};

export default DownloadPdf;
