import { useQuery } from '@apollo/client';
import { css } from '@emotion/react';
import { GETSALEORDES } from '@Src/apollo/client/query/saleOrder';
import { GETSTOREBYID } from '@Src/apollo/client/query/stores';
import { TableStyles } from '@Src/styles';
import {
  AtomButton,
  AtomLoader,
  AtomTable,
  AtomText,
  AtomWrapper
} from '@sweetsyui/ui';
import { IQueryFilter, ISaleOrder } from 'graphql';
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

  if (loading)
    return (
      <AtomLoader isLoading backgroundColor="#2e2e35" colorLoading="white" />
    );
  return (
    <AtomWrapper>
      <AtomWrapper
        customCSS={css`
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          background-color: #1a1a1f;
          margin-bottom: 15px;
          border-radius: 5px;
          padding: 10px 30px;
        `}
      >
        <AtomButton
          customCSS={css`
            margin-right: 20px;
            padding: 8px 20px;
            background-color: #2e2e35;
            :hover {
              background-color: #1a1a1f;
            }
            transition: background-color 0.3s ease;
          `}
          onClick={() => {
            router.push('/dashboard');
          }}
        >
          <AtomText
            customCSS={css`
              color: #dfdfdf;
              font-weight: 600;
              font-size: 12px;
            `}
          >
            Return to Stores
          </AtomText>
        </AtomButton>
        <AtomText
          customCSS={css`
            font-size: 20px;
            font-weight: bold;
            color: #dfdfdf;
          `}
        >
          Store: {data?.getStoreById?.name}
        </AtomText>
      </AtomWrapper>
      <AtomWrapper>
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
            Store Orders
          </AtomText>
          <AtomTable
            customCSS={TableStyles}
            data={dataOrders?.getSaleOrders as ISaleOrder[]}
            columns={[
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
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default VIEW;
