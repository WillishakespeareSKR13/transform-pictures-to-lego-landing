import { useQuery } from '@apollo/client';
import { css } from '@emotion/react';
import { GETPRODUCTS } from '@Src/apollo/client/query/products';
import { GETSALEORDES } from '@Src/apollo/client/query/saleOrder';
import { GETSTOREBYID } from '@Src/apollo/client/query/stores';
import { GETUSERS } from '@Src/apollo/client/query/user';
import DashWithTitle from '@Src/components/layouts/DashWithTitle';
import { TableStyles } from '@Src/styles';
import {
  AtomButton,
  AtomCarruosell,
  AtomImage,
  AtomLink,
  AtomLoader,
  AtomSeparator,
  AtomTable,
  AtomText,
  AtomWrapper
} from '@sweetsyui/ui';
import { IQueryFilter, ISaleOrder, IUser } from 'graphql';
import { useRouter } from 'next/router';

const VIEW = () => {
  const router = useRouter();
  const { data, loading } = useQuery<IQueryFilter<'getStoreById'>>(
    GETSTOREBYID,
    {
      variables: {
        id: router?.query?.id?.[router.query.id.length - 1]
      }
    }
  );

  const { data: dataOrders } = useQuery<IQueryFilter<'getSaleOrders'>>(
    GETSALEORDES,
    {
      skip: !data?.getStoreById?.id,
      variables: {
        filter: {
          store: data?.getStoreById?.id
        }
      }
    }
  );

  const { data: dataUsers } = useQuery<IQueryFilter<'getUsers'>>(GETUSERS, {
    skip: !data?.getStoreById?.id,
    variables: {
      filter: {
        store: data?.getStoreById?.id
      }
    }
  });

  const { data: dataProducts } = useQuery<IQueryFilter<'getProducts'>>(
    GETPRODUCTS,
    {
      variables: {
        filter: {
          store: router?.query?.id?.[1]
        }
      }
    }
  );

  if (loading)
    return (
      <AtomLoader isLoading backgroundColor="#2e2e35" colorLoading="white" />
    );

  return (
    <DashWithTitle
      title={`Store: ${data?.getStoreById?.name}`}
      onClick={() => {
        location.href = `/dashboard/`;
      }}
      button={
        <AtomButton
          customCSS={css`
            background-color: #f1576c;
            padding: 8px 20px;
            font-size: 10px;
          `}
          onClick={() => {
            router.push(
              `/dashboard/store/[id]/pointSale`,
              `/dashboard/store/${data?.getStoreById?.id}/pointSale`
            );
          }}
        >
          Create sale order
        </AtomButton>
      }
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
          {(dataProducts?.getProducts?.length ?? 0) > 0 && (
            <>
              <AtomWrapper flexDirection="row" justifyContent="space-between">
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
                <AtomButton
                  customCSS={css`
                    background-color: #f1576c;
                    padding: 8px 20px;
                    font-size: 10px;
                  `}
                  onClick={() => {
                    router.push(
                      `/dashboard/store/[id]/products`,
                      `/dashboard/store/${data?.getStoreById?.id}/products`
                    );
                  }}
                >
                  See all products
                </AtomButton>
              </AtomWrapper>
              <AtomWrapper
                customCSS={css`
                  max-width: 100%;
                  margin-bottom: 20px;
                  overflow-x: scroll;
                `}
              >
                <AtomCarruosell
                  height="max-content"
                  swiperProps={{
                    spaceBetween: 10,
                    slidesPerView: 3
                  }}
                >
                  {dataProducts?.getProducts?.map((product) => (
                    <AtomWrapper
                      key={product?.id}
                      customCSS={css`
                        width: 100%;
                        align-items: center;
                        justify-content: flex-start;
                        flex-direction: column;
                        padding: 20px;
                        background-color: #202026;
                      `}
                    >
                      <AtomImage
                        src={`${product?.image}`}
                        alt={`${product?.image}`}
                        height="120px"
                        width="100%"
                        customCSS={css`
                          margin-bottom: 10px;
                          overflow: hidden;
                          border-radius: 4px;
                        `}
                      />
                      <AtomText
                        width="100%"
                        align="left"
                        fontSize="16px"
                        fontWeight="bold"
                        margin="0 0 10px 0"
                        color="#dfdfdf"
                      >{`${product?.name}`}</AtomText>
                      <AtomText
                        width="100%"
                        align="left"
                        margin="0 0 10px 0"
                        color="#dfdfdf"
                        customCSS={css`
                          min-height: 63px;
                          display: -webkit-box;
                          max-width: 200px;
                          -webkit-line-clamp: 3;
                          -webkit-box-orient: vertical;
                          overflow: hidden;
                        `}
                      >{`${product?.description}`}</AtomText>
                      <AtomWrapper
                        flexDirection="row"
                        justifyContent="space-between"
                      >
                        <AtomText
                          align="center"
                          color="#dfdfdf"
                          fontWeight="bold"
                        >{`Stock: ${product?.stock}`}</AtomText>
                        <AtomText
                          align="center"
                          color="#dfdfdf"
                          fontWeight="bold"
                        >{`Price: ${product?.price}`}</AtomText>
                      </AtomWrapper>
                    </AtomWrapper>
                  ))}
                </AtomCarruosell>
              </AtomWrapper>
            </>
          )}
          <AtomText
            customCSS={css`
              font-size: 20px;
              font-weight: bold;
              color: #dfdfdf;
              margin-bottom: 10px;
            `}
          >
            Store Orders
          </AtomText>
          <AtomWrapper
            customCSS={css`
              max-width: 100%;
              overflow-x: scroll;
            `}
          >
            <AtomTable
              customCSS={TableStyles}
              data={dataOrders?.getSaleOrders as ISaleOrder[]}
              columns={[
                {
                  title: 'Details',
                  view: (item) => (
                    <AtomWrapper
                      flexDirection="row"
                      customCSS={css`
                        gap: 10px;
                      `}
                    >
                      <AtomButton
                        onClick={() => {
                          router.push({
                            pathname: `${router.pathname}/${item?.id}`,
                            query: {
                              ...router.query
                            }
                          });
                        }}
                        customCSS={css`
                          padding: 8px 20px;
                          background-color: #f1576c;
                        `}
                      >
                        Details
                      </AtomButton>
                      {item?.board?.map((e) => (
                        <AtomButton
                          key={e?.id}
                          onClick={() => {
                            const pdf = e?.pdf;
                            if (pdf) {
                              const a = document.createElement('a');
                              a.href = pdf;
                              a.download = 'invoice.pdf';
                              a.click();
                            }
                          }}
                          customCSS={css`
                            padding: 8px 20px;
                            background-color: #f1576c;
                          `}
                        >
                          PDF
                        </AtomButton>
                      ))}
                    </AtomWrapper>
                  )
                },

                {
                  title: 'Product',
                  view: (item) => (
                    <>
                      {`${item?.board?.length ?? 0 > 0 ? 'Board ' : ''}`}
                      {`${item?.product?.length ?? 0 > 0 ? ', Product' : ''}`}
                    </>
                  )
                },
                {
                  title: 'Name',
                  view: (item) => (
                    <AtomText
                      customCSS={css`
                        color: #dfdfdf;
                        font-weight: 600;
                        max-width: 10px;
                        text-overflow: ellipsis;
                      `}
                    >
                      {[
                        item?.board?.map((board) => board?.board?.title),
                        item?.product?.map((product) => product?.name)
                      ]
                        .flat()
                        .join(', ')}
                    </AtomText>
                  )
                },
                {
                  title: 'Quantity',
                  view: (item) => <>{`${item?.quantity}`}</>
                },
                {
                  title: 'Status',
                  view: (item) => <>{`${item?.status}`}</>
                },
                {
                  title: 'Seller',
                  view: (item) => <>{`${item?.customer?.name ?? 'WEBSITE'}`}</>
                },
                {
                  title: 'Price',
                  view: (item) => <>{`$ ${item?.total}`}</>
                }
              ]}
            />
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
                Store: {data?.getStoreById?.name}
              </AtomText>
              <AtomImage
                src={`${data?.getStoreById?.photo}`}
                alt={`${data?.getStoreById?.photo}`}
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
              <AtomSeparator color="#2e2e35" height="3px" margin="10px 0px" />
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
                Balance: {data?.getStoreById?.cash}
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
                Currency {data?.getStoreById?.currency}
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
          >
            <AtomWrapper
              customCSS={css`
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                padding: 15px 20px;
              `}
            >
              <AtomText
                customCSS={css`
                  font-size: 16px;
                  font-weight: 600;
                  color: #dfdfdf;
                  display: flex;
                `}
              >
                Users in Store
              </AtomText>
              <AtomButton
                customCSS={css`
                  padding: 8px 20px;
                  font-size: 10px;
                `}
                onClick={() => {
                  router.push(
                    `/dashboard/store/[id]/users`,
                    `/dashboard/store/${data?.getStoreById?.id}/users`
                  );
                }}
              >
                Add User
              </AtomButton>
            </AtomWrapper>
            <AtomTable
              customCSS={css`
                ${TableStyles}
                table {
                  max-width: 100%;
                }
              `}
              data={dataUsers?.getUsers as IUser[]}
              columns={[
                {
                  title: 'Name',
                  view: (item) => <>{`${item?.name}`}</>
                },
                {
                  title: 'Email',
                  view: (item) => <>{`${item?.email}`}</>
                },
                {
                  title: 'Role',
                  view: (item) => <>{`${item?.role?.name}`}</>
                }
              ]}
            />
          </AtomWrapper>
        </AtomWrapper>
      </AtomWrapper>
    </DashWithTitle>
  );
};

export default VIEW;
