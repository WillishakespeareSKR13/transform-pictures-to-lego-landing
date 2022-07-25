/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/alt-text */
import { AtomButton, AtomText } from '@sweetsyui/ui';
import { css } from '@emotion/react';
import {
  Document,
  Image,
  Page,
  PDFDownloadLink,
  StyleSheet,
  Text,
  View
} from '@react-pdf/renderer';
import { useQuery } from '@apollo/client';
import { IQueryFilter, ISaleOrder } from 'graphql';
import { GETSALEORDERBYID } from '@Src/apollo/client/query/saleOrder';
import { GETPRODUCTQUANTITY } from '@Src/apollo/client/query/products';
import { useMemo } from 'react';
import { GETTERMSCONDITIONS } from '@Src/apollo/client/query/termsconditions';
type Props = {
  id?: string;
  store?: any;
  qrs?: string[];
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 40,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems: 'center'
  },
  logo: {
    height: '80px',
    width: '200px',
    marginBottom: 20
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
    maxWidth: 250
  },
  text2: {
    fontSize: 12,
    marginBottom: 5,
    maxWidth: 250
  },
  text3: {
    fontSize: 12,
    marginBottom: 5,
    width: '45%'
  },
  textLarge: {
    fontSize: 12,
    marginBottom: 10,
    width: 250
  },
  textEnd: {
    fontSize: 12,
    marginBottom: 10,
    width: 50
  },
  textBig: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  viewJustify: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

type PropsPDF = {
  id?: string;
  product?: ISaleOrder & {
    number?: number;
  };
  products?: {
    id: string;
    quantity: number;
  }[];
  store?: any;
  terms?: any;
  qrs?: string[];
};

const PDF = (props: PropsPDF) => {
  const { product, products, store, terms, qrs } = props;
  const getProduct = useMemo(
    () =>
      product?.product?.map((product) => ({
        product: product,
        quantity:
          products?.find(
            (productQuantity) => productQuantity.id === product?.id
          )?.quantity ?? 0
      })) ?? [],
    [product, products]
  );
  return (
    <Document>
      <Page size={'A4'} style={styles.page}>
        <Image style={styles.logo} src="/images/logo.png" />
        <View style={styles.viewJustify}>
          <Text style={styles.text}>01/12/22</Text>
          <Text style={styles.text}>
            No.{' '}
            {`${addcero(store?.numberoffice)}${addcero(
              store?.numberstore
            )}${addcero(product?.number ?? 1)}`}
          </Text>
        </View>
        <View style={styles.viewJustify}>
          <View
            style={{
              width: '250px'
            }}
          >
            <Text style={styles.text2}>{store?.name}</Text>
            <Text style={styles.text2}>{`${store?.street} ${store?.zip}`}</Text>
            <Text style={styles.text2}>{store?.id}</Text>
            <Text style={styles.text2}>{`No. Ticket ${addcero(
              product?.number ?? 1
            )}`}</Text>
          </View>
          <View
            style={{
              width: '100%'
            }}
          />
        </View>
        <Text style={styles.textBig}>Sales</Text>
        <View style={styles.viewJustify}>
          <Text style={styles.textLarge}>Boards</Text>
          <Text style={styles.text}>Quantity</Text>
          <Text style={styles.textEnd}>Price</Text>
        </View>
        {product?.board?.map((board) => (
          <View style={styles.viewJustify} key={board?.id}>
            <Text style={styles.textLarge}>
              {board?.board?.title} / {board?.size?.title}
            </Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.textEnd}>${board?.size?.price}</Text>
          </View>
        ))}
        <View style={styles.viewJustify}>
          <Text style={styles.textLarge}>Products</Text>
          <Text style={styles.text}>Quantity</Text>
          <Text style={styles.textEnd}>Price</Text>
        </View>
        {getProduct?.map((product) => (
          <View style={styles.viewJustify} key={product.product?.id}>
            <Text style={styles.textLarge}>{product.product?.name}</Text>
            <Text style={styles.text}>{product.quantity}</Text>
            <Text style={styles.textEnd}>{''}</Text>
          </View>
        ))}
        <View style={styles.viewJustify}>
          <Text style={styles.textLarge}></Text>
          <Text style={styles.text}>Total</Text>
          <Text style={styles.textEnd}>
            $
            {product?.board?.reduce(
              (acc, value) => acc + (value?.size?.price ?? 0),
              0
            ) ?? 0}
          </Text>
        </View>
      </Page>
      <Page size={'A4'} style={styles.page}>
        <View style={styles.viewJustify}>
          <Text style={styles.text3}>Terms and Conditions</Text>
          <Text style={styles.text3}>Terminos y Condiciones</Text>
        </View>
        <View style={styles.viewJustify}>
          <Text style={styles.text3}>{terms?.conditions}</Text>
          <Text style={styles.text3}>{terms?.terms}</Text>
        </View>
        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          {qrs?.map((qr) => (
            <Image
              source={qr}
              key={qr}
              style={{
                width: 200,
                height: 200
              }}
            />
          ))}
        </View>
      </Page>
    </Document>
  );
};

const DownloadTicket = (props: Props) => {
  const { id, store, qrs } = props;

  const { data } = useQuery<IQueryFilter<'getSaleOrderById'>>(
    GETSALEORDERBYID,
    {
      variables: {
        id: id
      }
    }
  );

  const { data: data2 } = useQuery(GETPRODUCTQUANTITY, {
    variables: {
      id: id
    }
  });
  const { data: dataterm } = useQuery(GETTERMSCONDITIONS);

  return (
    <>
      {/* <AtomWrapper
        customCSS={css`
          position: fixed;
          top: 0;
          left: 0;
          width: 50vw;
          height: 50vh;
          iframe {
            width: 100%;
            height: 100%;
          }
        `}
      >
        <PDFViewer>
          <PDF
            id={id}
            product={data?.getSaleOrderById}
            products={data2?.getProductQuantityBySaleOrder?.products}
            store={store.getStoreById}
            terms={dataterm?.getTermsConditions}
            qrs={qrs}
          />
        </PDFViewer>
      </AtomWrapper> */}
      <PDFDownloadLink
        document={PDF({
          id,
          products: data2?.getProductQuantityBySaleOrder?.products,
          product: data?.getSaleOrderById,
          store: store.getStoreById,
          terms: dataterm?.getTermsConditions,
          qrs: qrs
        })}
        fileName={`${new Date().toLocaleString()}.pdf`}
      >
        {({ loading }) =>
          loading ? (
            <AtomButton
              customCSS={css`
                margin-bottom: 10px;
                border: 2px solid #48d496;
                background-color: transparent;
                span {
                  font-size: 12px;
                  font-weight: 500;
                  color: #48d496;
                }
              `}
            >
              <AtomText>Load Ticket</AtomText>
            </AtomButton>
          ) : (
            <AtomButton
              customCSS={css`
                margin-bottom: 10px;
                border: 2px solid #48d496;
                background-color: transparent;
                span {
                  font-size: 12px;
                  font-weight: 500;
                  color: #48d496;
                }
              `}
            >
              <AtomText>Ticket</AtomText>
            </AtomButton>
          )
        }
      </PDFDownloadLink>
    </>
  );
};

export default DownloadTicket;

const addcero = (num: number) => {
  return (
    Array.from({ length: 5 - num.toString().length }, () => '0').join('') + num
  );
};
