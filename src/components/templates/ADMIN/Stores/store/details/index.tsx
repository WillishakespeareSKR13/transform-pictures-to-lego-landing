import { useQuery } from '@apollo/client';
import { css } from '@emotion/react';
import { GETSALEORDERBYID } from '@Src/apollo/client/query/saleOrder';
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
import { IBoardSelected, IQueryFilter, IProducts } from 'graphql';
import { useRouter } from 'next/router';

const VIEW = () => {
  const router = useRouter();
  const { data, loading } = useQuery<IQueryFilter<'getStoreById'>>(
    GETSTOREBYID,
    {
      variables: {
        id: router?.query?.id?.[router.query.id.length - 2]
      }
    }
  );

  const { data: dataOrder } = useQuery<IQueryFilter<'getSaleOrderById'>>(
    GETSALEORDERBYID,
    {
      skip: !data?.getStoreById?.id,
      variables: {
        id: router?.query?.id?.[router.query.id.length - 1]
      }
    }
  );

  if (loading)
    return (
      <AtomLoader isLoading backgroundColor="#2e2e35" colorLoading="white" />
    );

  return (
    <DashWithTitle
      title={`Store: ${data?.getStoreById?.name} - ${dataOrder?.getSaleOrderById?.id}`}
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
              data={dataOrder?.getSaleOrderById?.board as IBoardSelected[]}
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
                  view: () => (
                    <>{`${
                      dataOrder?.getSaleOrderById?.customer?.name ?? 'WEBSITE'
                    }`}</>
                  )
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
              data={dataOrder?.getSaleOrderById?.product as IProducts[]}
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
                  view: () => (
                    <>{`${
                      dataOrder?.getSaleOrderById?.customer?.name ?? 'WEBSITE'
                    }`}</>
                  )
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
                  (dataOrder?.getSaleOrderById?.product?.reduce(
                    (acc, cur) =>
                      acc +
                      TCINIT(
                        data?.getStoreById?.currency,
                        data?.getStoreById?.currency,
                        cur?.price
                      ),
                    0
                  ) ?? 0) +
                  (dataOrder?.getSaleOrderById?.board?.reduce(
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
                Seller: {dataOrder?.getSaleOrderById?.customer?.name}
              </AtomText>
              <AtomImage
                src={`${
                  dataOrder?.getSaleOrderById?.customer?.photo ??
                  'https://via.placeholder.com/150'
                }`}
                alt={`${
                  dataOrder?.getSaleOrderById?.customer?.photo ??
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
          <AtomWrapper
            customCSS={css`
              border-radius: 8px;
              margin-top: 20px;
              background-color: #202026;
              overflow: auto;
              max-width: 100%;
            `}
          ></AtomWrapper>
        </AtomWrapper>
      </AtomWrapper>
    </DashWithTitle>
  );
};

export default VIEW;
