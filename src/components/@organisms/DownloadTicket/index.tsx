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
type Props = {
  id?: string;
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
  product?: ISaleOrder;
  products?: {
    id: string;
    quantity: number;
  }[];
};

const PDF = (props: PropsPDF) => {
  const { id, product, products } = props;
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
          <Text style={styles.text}>{id}</Text>
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
            <Text style={styles.textEnd}>
              ${product.quantity * (product.product?.price ?? 0)}
            </Text>
          </View>
        ))}
        <View style={styles.viewJustify}>
          <Text style={styles.textLarge}></Text>
          <Text style={styles.text}>Total</Text>
          <Text style={styles.textEnd}>
            $
            {getProduct?.reduce(
              (acc, value) =>
                acc + (value.product?.price ?? 0) * value.quantity,
              0
            ) +
              (product?.board?.reduce(
                (acc, value) => acc + (value?.size?.price ?? 0),
                0
              ) ?? 0)}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

const DownloadTicket = (props: Props) => {
  const { id } = props;
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
          />
        </PDFViewer>
      </AtomWrapper> */}
      <PDFDownloadLink
        document={PDF({
          id,
          products: data2?.getProductQuantityBySaleOrder?.products,
          product: data?.getSaleOrderById
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
