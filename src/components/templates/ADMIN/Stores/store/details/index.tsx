import { useQuery } from '@apollo/client';
import { request } from 'graphql-request';
import { css } from '@emotion/react';
import { GETSTOREBYID } from '@Src/apollo/client/query/stores';
import DashWithTitle from '@Src/components/layouts/DashWithTitle';
import { TableStyles } from '@Src/styles';
import { TCINIT } from '@Src/utils/convertCurrency';
import {
  AtomImage,
  AtomLink,
  AtomLoader,
  AtomTable,
  AtomText,
  AtomWrapper
} from '@sweetsyui/ui';
import {
  IBoardSelected,
  IQueryFilter,
  IProducts,
  IColorColorsSaleOrder,
  ISaleOrder
} from 'graphql';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AtomButton from '@Src/components/@atoms/AtomButton';

const query = `query getSaleOrderById($id: ID!) {
  getSaleOrderById(id: $id) {
    id
    stripeId
    secret
    product {
      id
      name
      sku
      price
      currency
    }
    board {
      id
      board {
        id
        title
        type {
          id
          name
        }
        currency
      }
      size {
        id
        title
        price
        type {
          id
          name
        }
      }
    }
    customer {
      id
      name
    }
    store {
      id
    }
    quantity
    total
    currency
    status
    colorsaleorder {
      id
      colors {
        id
        color {
          id
          color
          name
          icon
        }
        quantity
      }
      total
    }
  }
}
`;

const VIEW = () => {
  const router = useRouter();
  const [saleOrder, setSaleOrder] = useState<ISaleOrder>();
  const { data, loading } = useQuery<IQueryFilter<'getStoreById'>>(
    GETSTOREBYID,
    {
      variables: {
        id: router?.query?.id?.[router.query.id.length - 2]
      }
    }
  );

  useEffect(() => {
    const getdata = async () => {
      const data = await request('/api/graphql', query, {
        id: router?.query?.id?.[router.query.id.length - 1]
      });

      setSaleOrder(data.getSaleOrderById);
    };
    getdata();
  }, [router?.query?.id?.[router.query.id.length - 1]]);

  if (loading)
    return (
      <AtomLoader isLoading backgroundColor="#2e2e35" colorLoading="white" />
    );

  return (
    <DashWithTitle
      title={`Store: ${data?.getStoreById?.name} - ${saleOrder?.id}`}
      url={{
        pathname: router.pathname,
        query: {
          ...router.query,
          id: [
            ...(Array.isArray(router.query.id) ? router.query.id : []).filter(
              (_, idx) => idx !== (router?.query?.id?.length ?? 0) - 1
            )
          ]
        }
      }}
    >
      <AtomWrapper
        customCSS={css`
          flex-direction: row;
          justify-content: flex-start;
          gap: 20px;
        `}
      >
        <AtomWrapper
          customCSS={css`
            width: 60%;
          `}
        >
          <AtomText
            customCSS={css`
              font-size: 20px;
              font-weight: bold;
              color: #dfdfdf;
              margin-bottom: 10px;
            `}
          >
            Boards
          </AtomText>
          <AtomWrapper
            customCSS={css`
              max-width: 100%;
              overflow-x: scroll;
            `}
          >
            <AtomTable
              customCSS={TableStyles}
              data={saleOrder?.board as IBoardSelected[]}
              columns={[
                {
                  title: 'Title',
                  view: (item) => <>{`${item?.board?.title}`}</>
                },
                {
                  title: 'Size',
                  view: (item) => <>{`${item?.size?.type?.name}`}</>
                },
                {
                  title: 'Seller',
                  view: () => <>{`${saleOrder?.customer?.name ?? 'WEBSITE'}`}</>
                },
                {
                  title: 'Price',
                  view: (item) => (
                    <>
                      {TCINIT(
                        data?.getStoreById?.currency,
                        item?.board?.currency,
                        item?.size?.price
                      )}
                      {` ${data?.getStoreById?.currency}`}
                    </>
                  )
                }
              ]}
            />
          </AtomWrapper>
          <AtomText
            customCSS={css`
              font-size: 20px;
              font-weight: bold;
              color: #dfdfdf;
              margin-bottom: 10px;
            `}
          >
            Products
          </AtomText>
          <AtomWrapper
            customCSS={css`
              max-width: 100%;
              overflow-x: scroll;
            `}
          >
            <AtomTable
              customCSS={TableStyles}
              data={saleOrder?.product as IProducts[]}
              columns={[
                {
                  title: 'Title',
                  view: (item) => <>{`${item?.name}`}</>
                },
                {
                  title: 'Sku',
                  view: (item) => <>{`${item?.sku}`}</>
                },
                {
                  title: 'Seller',
                  view: () => <>{`${saleOrder?.customer?.name ?? 'WEBSITE'}`}</>
                },
                {
                  title: 'Price',
                  view: (item) => (
                    <>
                      {TCINIT(
                        data?.getStoreById?.currency,
                        item?.currency,
                        item?.price
                      )}
                      {` ${data?.getStoreById?.currency}`}
                    </>
                  )
                }
              ]}
            />
          </AtomWrapper>

          <AtomWrapper
            customCSS={css`
              max-width: 100%;
              overflow-x: scroll;
            `}
          >
            <AtomWrapper
              customCSS={css`
                width: 100%;
                background-color: #202026;
                padding: 10px 60px;
                justify-content: center;
                align-items: flex-end;
              `}
            >
              <AtomText
                customCSS={css`
                  font-size: 14px;
                  font-weight: bold;
                  color: #dfdfdf;
                `}
              >
                {`Total Price: ${
                  (saleOrder?.product?.reduce(
                    (acc, cur) =>
                      acc +
                      TCINIT(
                        data?.getStoreById?.currency,
                        data?.getStoreById?.currency,
                        cur?.price
                      ),
                    0
                  ) ?? 0) +
                  (saleOrder?.board?.reduce(
                    (acc, cur) =>
                      acc +
                      TCINIT(
                        data?.getStoreById?.currency,
                        cur?.board?.currency,
                        cur?.size?.price
                      ),
                    0
                  ) ?? 0)
                } ${data?.getStoreById?.currency}`}
              </AtomText>
            </AtomWrapper>
          </AtomWrapper>
        </AtomWrapper>
        <AtomWrapper
          customCSS={css`
            width: 40%;
          `}
        >
          <AtomWrapper
            key={data?.getStoreById?.id}
            customCSS={css`
              width: 100%;
              height: max-content;
              background-color: #202026;
              justify-content: space-between;
              border-radius: 8px;
              padding: 15px 20px;
            `}
          >
            <AtomWrapper>
              <AtomText
                customCSS={css`
                  color: #dfdfdf;
                  font-size: 16px;
                  font-weight: 600;
                `}
              >
                Seller: {saleOrder?.customer?.name}
              </AtomText>
              <AtomImage
                src={`${
                  saleOrder?.customer?.photo ??
                  'https://via.placeholder.com/150'
                }`}
                alt={`${
                  saleOrder?.customer?.photo ??
                  'https://via.placeholder.com/150'
                }`}
                customCSS={css`
                  width: 90px;
                  height: 90px;
                  margin: 10px 0px;
                  background-color: #1a1a1f;
                `}
              />
            </AtomWrapper>
            <AtomWrapper>
              <AtomText
                customCSS={css`
                  color: #dfdfdf;
                  font-weight: 600;
                  font-size: 12px;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                `}
              >
                Description: {data?.getStoreById?.description}
              </AtomText>
              <AtomText
                customCSS={css`
                  color: #dfdfdf;
                  font-weight: 600;
                  font-size: 12px;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                `}
              >
                Phone: {data?.getStoreById?.phone}
              </AtomText>
              <AtomText
                customCSS={css`
                  color: #dfdfdf;
                  font-weight: 600;
                  font-size: 12px;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                `}
              >
                Email: {data?.getStoreById?.email}
              </AtomText>
              <AtomText
                customCSS={css`
                  color: #dfdfdf;
                  font-weight: 600;
                  font-size: 12px;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                `}
              >
                Website:
                <AtomLink
                  customCSS={css`
                    color: #f1576c;
                    font-weight: 500;
                    margin-left: 5px;
                    font-size: 12px;
                  `}
                  href={`${data?.getStoreById?.website}`}
                >
                  {data?.getStoreById?.website
                    ?.replace('https://', '')
                    .replaceAll('/', '')}
                </AtomLink>
              </AtomText>
              <AtomText
                customCSS={css`
                  color: #dfdfdf;
                  font-weight: 600;
                  font-size: 12px;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                `}
              >
                Address: {data?.getStoreById?.city}, {data?.getStoreById?.state}
                , {data?.getStoreById?.zip},{data?.getStoreById?.street}
              </AtomText>
            </AtomWrapper>
          </AtomWrapper>
          <AtomButton
            width="100%"
            onClick={() => {
              const pdf = saleOrder?.pdf;
              if (pdf) {
                const a = document.createElement('a');
                a.href = pdf;
                a.download = 'invoice.pdf';
                a.click();
              }
            }}
            customCSS={css`
              margin-top: 20px;
              padding: 8px 20px;
              background-color: #f1576c;
            `}
          >
            PDF
          </AtomButton>
          <AtomWrapper
            customCSS={css`
              border-radius: 8px;
              margin-top: 20px;
              overflow: auto;
              max-width: 100%;
            `}
          >
            <AtomText
              customCSS={css`
                font-size: 20px;
                font-weight: bold;
                color: #dfdfdf;
                margin-bottom: 10px;
              `}
            >
              Colors
            </AtomText>
            <AtomWrapper
              customCSS={css`
                max-width: 100%;
                overflow-x: scroll;
              `}
            >
              {saleOrder?.colorsaleorder?.map((e) => (
                <>
                  <AtomTable
                    key={e?.id}
                    customCSS={TableStyles}
                    data={e?.colors as IColorColorsSaleOrder[]}
                    columns={[
                      {
                        title: 'Color',
                        view: (item) => (
                          <AtomWrapper
                            customCSS={css`
                              width: 20px;
                              height: 20px;
                              background-color: ${item?.color?.color};
                            `}
                          />
                        )
                      },
                      {
                        title: 'Name',
                        view: (item) => <>{`${item?.color?.name}`}</>
                      },
                      {
                        title: 'Quantity',
                        view: (item) => <>{`${item?.quantity}`}</>
                      }
                    ]}
                  />
                  <AtomWrapper
                    customCSS={css`
                      align-items: flex-end;
                      padding: 10px 40px;
                      background-color: #1a1a1f;
                    `}
                  >
                    <AtomText
                      customCSS={css`
                        font-size: 20px;
                        font-weight: bold;
                        color: #dfdfdf;
                      `}
                    >
                      Total {e?.total}
                    </AtomText>
                  </AtomWrapper>
                </>
              ))}
            </AtomWrapper>
          </AtomWrapper>
        </AtomWrapper>
      </AtomWrapper>
    </DashWithTitle>
  );
};

export default VIEW;
