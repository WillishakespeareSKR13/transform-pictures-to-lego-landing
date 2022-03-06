import { useQuery } from '@apollo/client';
import { css } from '@emotion/react';
import { GETSALEORDES } from '@Src/apollo/client/query/saleOrder';
import { ISaleOrder } from '@Src/apollo/server/models/saleOrder';
import { AtomTable, AtomText, AtomWrapper } from '@sweetsyui/ui';
import { NextPageFC } from 'next';
import React from 'react';

type getSaleOrdersType = {
  getSaleOrders: ISaleOrder[];
};

const DashboardPage: NextPageFC = () => {
  const { data } = useQuery<getSaleOrdersType>(GETSALEORDES);
  console.log(data);

  return (
    <AtomWrapper>
      <AtomWrapper>
        <AtomText
          color="#dfdfdf"
          fontSize="28px"
          customCSS={css`
            margin-bottom: 30px;
          `}
        >
          Orders
        </AtomText>
      </AtomWrapper>

      <AtomTable
        customCSS={css`
          width: 100%;
          color: #dfdfdf;
          font-weight: bold;
          thead {
            background-color: #1a1a1f !important;
            tr th {
              color: #dfdfdf;
            }
          }
          tbody {
            background-color: #202026;
            tr {
              :hover {
                background-color: #1a1a1f;
                color: #dfdfdf;
              }
              td {
                color: #dfdfdf;
                border-bottom: 1px solid #2e2e35;
              }
            }
          }
        `}
        data={data?.getSaleOrders?.slice()?.sort(() => -1)}
        columns={[
          {
            title: 'ID',
            view: (item) => <>{`${item?.id}`}</>
          },
          {
            title: 'Product',
            view: (item) => <>{`${item?.product}`}</>
          },
          {
            title: 'Size',
            view: (item) => <>{`${item?.size}`}</>
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
            title: 'Price',
            view: (item) => <>{`$ ${item?.price}`}</>
          }
        ]}
      />
    </AtomWrapper>
  );
};

export default DashboardPage;

DashboardPage.Layout = 'dashboard';
