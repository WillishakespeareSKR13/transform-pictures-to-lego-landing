import { css } from '@emotion/react';
import { InputDatesStyles, InputStyles, TableStyles } from '@Src/styles';
import {
  AtomButton,
  AtomInput,
  AtomTable,
  AtomText,
  AtomWrapper
} from '@sweetsyui/ui';
import { IQueryFilter, ISaleOrder } from 'graphql';
import React, { FC } from 'react';
import { arrayToCsv, downloadCsv } from '..';
import { convertDate } from '@Src/utils/convertDate';
import { useQuery } from '@apollo/client';
import { GETSALEORDES } from '@Src/apollo/client/query/saleOrder';
import { useRouter } from 'next/router';

const SaleOrder: FC = () => {
  const router = useRouter();
  const { data: dataOrders } = useQuery<IQueryFilter<'getSaleOrders'>>(
    GETSALEORDES,
    {
      skip: !router?.query?.id?.[1],
      variables: {
        filter: {
          store: router?.query?.id?.[1]
        }
      }
    }
  );
  console.log(
    dataOrders?.getSaleOrders?.map((order) => ({
      ...order,
      createdAt: new Date(Number(order?.createdAt) ?? 0)
    }))
  );

  return (
    <>
      <AtomWrapper>
        <AtomInput
          type="date"
          value="2020-12-20"
          customCSS={css`
            ${InputStyles}
            ${InputDatesStyles}
          `}
        />
        <AtomInput
          type="date"
          value={new Date().toISOString().slice(0, 10)}
          customCSS={css`
            ${InputStyles}
            ${InputDatesStyles}
          `}
        />
      </AtomWrapper>
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
                          arrayToCsv([['Color', 'Code', 'Quantity'], ...map]) ??
                          '';
                        downloadCsv(
                          csv,
                          `${e?.id}_${convertDate(new Date())}.csv`
                        );
                      }}
                      customCSS={css`
                        padding: 8px 20px;
                        background-color: #f1576c;
                      `}
                    >
                      CSV
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
                <>
                  <AtomText
                    as="p"
                    //   title={[
                    //     item?.board?.map((board) => board?.board?.title),
                    //     item?.product?.map((product) => product?.name)
                    //   ]
                    //     .flat()
                    //     .join(', ')}
                    customCSS={css`
                      color: #dfdfdf;
                      white-space: nowrap;
                      overflow: hidden;
                      font-weight: 600;
                      max-width: 170px;
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
                </>
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
    </>
  );
};
export default SaleOrder;
