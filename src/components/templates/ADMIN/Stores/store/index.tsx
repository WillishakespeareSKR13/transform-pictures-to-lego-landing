import { useMutation, useQuery } from '@apollo/client';
import { css } from '@emotion/react';
import { GETCOLORS } from '@Src/apollo/client/query/colors';
import { GETPRODUCTS, NEWPRODUCT } from '@Src/apollo/client/query/products';
import { GETSALEORDES } from '@Src/apollo/client/query/saleOrder';
import { GETSTOREBYID } from '@Src/apollo/client/query/stores';
import { GETUSERS } from '@Src/apollo/client/query/user';
import DashWithTitle from '@Src/components/layouts/DashWithTitle';
import { InputStyles, TableStyles } from '@Src/styles';
import { convertDate } from '@Src/utils/convertDate';
// import uidd
import { v4 } from 'uuid';
import {
  AtomButton,
  AtomCarruosell,
  AtomIcon,
  AtomImage,
  AtomInput,
  AtomLink,
  AtomLoader,
  AtomSeparator,
  AtomTable,
  AtomText,
  AtomWrapper
} from '@sweetsyui/ui';
import { useFormik } from 'formik';
import { IQueryFilter, ISaleOrder, IUser } from 'graphql';
import { useRouter } from 'next/router';

export const arrayToCsv = (data?: string[][]) =>
  data
    ?.map((row) =>
      row
        .map((v) => v.replaceAll('"', '""'))
        .map((v) => `"${v}"`)
        .join(',')
    )
    .join('\r\n');

export const downloadCsv = (data: string, filename: string) => {
  const blob = new Blob([data], {
    type: 'text/csv;charset=utf-8;'
  });
  const link = document.createElement('a');
  if (link.download !== undefined) {
    // Browsers that support HTML5 download attribute
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

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
  const { data: colors } = useQuery<IQueryFilter<'getColors'>>(GETCOLORS);

  const [newProduct] = useMutation(NEWPRODUCT, {
    onCompleted: () => {
      router.reload();
    }
  });

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

  const {
    data: dataProducts,
    refetch: refetchProducts,
    loading: loadProducts
  } = useQuery<IQueryFilter<'getProducts'>>(GETPRODUCTS, {
    variables: {
      filter: {
        store: router?.query?.id?.[1]
      }
    }
  });

  const formik = useFormik({
    initialValues: {
      preci: 5,
      stock: 1000
    },
    onSubmit: async (values) => {
      colors?.getColors?.map(async (color) => {
        newProduct({
          variables: {
            input: {
              store: router?.query?.id?.[1],
              name: color?.name,
              description: color?.name,
              sku: `${color?.name}_${v4()}`,
              image: color?.icon,
              color: color?.id,
              price: values.preci,
              stock: values.stock
            }
          }
        });
      });
      refetchProducts();
    }
  });
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
        (dataProducts?.getProducts?.length ?? 0) > 0 && (
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
        )
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
          {(dataProducts?.getProducts?.length ?? 0) > 0 ? (
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
                          background-color: ${product?.color?.color};
                          img {
                            object-fit: contain !important;
                          }
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
          ) : (
            <>
              {loadProducts ? (
                <AtomLoader
                  isLoading
                  backgroundColor="#2e2e35"
                  colorLoading="white"
                />
              ) : (
                <AtomWrapper
                  alignItems="center"
                  height="400px"
                  justifyContent="center"
                >
                  <AtomInput
                    id="preci"
                    type="number"
                    label="price"
                    labelFontSize="14px"
                    formik={formik}
                    customCSS={InputStyles}
                  />
                  <AtomInput
                    id="stock"
                    type="number"
                    label="stock"
                    labelFontSize="14px"
                    formik={formik}
                    customCSS={InputStyles}
                  />
                  <AtomButton
                    customCSS={css`
                      background-color: #f1576c;
                      padding: 8px 20px;
                      font-size: 10px;
                    `}
                    onClick={() => {
                      formik.submitForm();
                    }}
                  >
                    Generate products
                  </AtomButton>
                </AtomWrapper>
              )}
            </>
          )}
          {((dataProducts?.getProducts?.length ?? 0) &&
            (dataOrders?.getSaleOrders?.length ?? 0)) > 0 && (
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
                  Store Orders
                </AtomText>
                <AtomButton
                  customCSS={css`
                    background-color: #f1576c;
                    padding: 8px 20px;
                    font-size: 10px;
                  `}
                  onClick={() => {
                    router.push(
                      `/dashboard/store/[id]/saleorders`,
                      `/dashboard/store/${data?.getStoreById?.id}/saleorders`
                    );
                  }}
                >
                  See all sale orders
                </AtomButton>
              </AtomWrapper>
              <AtomWrapper
                customCSS={css`
                  max-width: 100%;
                  overflow-x: scroll;
                `}
              >
                <AtomTable
                  customCSS={TableStyles}
                  data={
                    dataOrders?.getSaleOrders?.reduce((acc, _, idx, array) => {
                      if (acc?.length <= 5) {
                        const last = array[
                          array.length - 1 - idx
                        ] as ISaleOrder;

                        return [...acc, last];
                      }
                      return acc;
                    }, [] as ISaleOrder[]) as ISaleOrder[]
                  }
                  columns={[
                    {
                      title: 'Details',
                      view: (item) => (
                        <AtomWrapper
                          flexDirection="row"
                          customCSS={css`
                            gap: 5px;
                            justify-content: flex-start;
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
                              padding: 0px;
                              background-color: transparent;
                            `}
                          >
                            <AtomIcon
                              color="#f1576c"
                              icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/LGO-0001/assets/details.svg"
                            />
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
                                padding: 0px;
                                background-color: transparent;
                              `}
                            >
                              <AtomIcon
                                color="#f1576c"
                                icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/LGO-0001/assets/pdf.svg"
                              />
                            </AtomButton>
                          ))}
                          {item?.colorsaleorder?.map((e) => (
                            <AtomButton
                              key={e?.id}
                              onClick={() => {
                                const map =
                                  e?.colors?.map((e) => [
                                    `${e?.color?.name}`,
                                    `${e?.color?.color}`,
                                    `${e?.quantity}`
                                  ]) ?? [];
                                const csv =
                                  arrayToCsv([
                                    ['Color', 'Code', 'Quantity'],
                                    ...map
                                  ]) ?? '';
                                downloadCsv(
                                  csv,
                                  `${e?.id}_${convertDate(new Date())}.csv`
                                );
                              }}
                              customCSS={css`
                                padding: 0px;
                                background-color: transparent;
                              `}
                            >
                              <AtomIcon
                                color="#f1576c"
                                icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/LGO-0001/assets/csv.svg"
                              />
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
                          {`${
                            item?.product?.length ?? 0 > 0 ? ', Product' : ''
                          }`}
                        </>
                      )
                    },
                    {
                      title: 'Name',
                      width: '10px',
                      view: (item) => (
                        <AtomText
                          customCSS={css`
                            display: block;
                            color: #dfdfdf;
                            font-weight: 600;
                            max-width: 80px;
                            white-space: nowrap;
                            overflow: hidden;
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
                      view: (item) => (
                        <>
                          {`Boards: ${item?.board?.length ?? 0}`}
                          {` `}
                          {`Products: 
                          ${item?.product?.length ?? 0}`}
                        </>
                      )
                    },
                    {
                      title: 'Status',
                      view: (item) => <>{`${item?.status}`}</>
                    },
                    {
                      title: 'Seller',
                      view: (item) => (
                        <>{`${item?.customer?.name ?? 'WEBSITE'}`}</>
                      )
                    },
                    {
                      title: 'Price',
                      view: (item) => <>{`$ ${item?.total}`}</>
                    }
                  ]}
                />
              </AtomWrapper>
            </>
          )}
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
