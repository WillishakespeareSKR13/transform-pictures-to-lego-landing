import { useQuery } from '@apollo/client';
import { css } from '@emotion/react';
import { GET_BOARDS } from '@Src/apollo/client/query/boards';
import { GETPRODUCTS } from '@Src/apollo/client/query/products';
import MoleculeCardBoard from '@Src/components/@molecules/moleculeCardBoard';
import MoleculeCardProduct from '@Src/components/@molecules/moleculeCardProduct';
import { AtomButton, AtomLoader, AtomText, AtomWrapper } from '@sweetsyui/ui';
import { IQueryFilter } from 'graphql';
import { useRouter } from 'next/router';

import React, { FC } from 'react';

const PointSale: FC = () => {
  const router = useRouter();
  const { data: boards } = useQuery<IQueryFilter<'getBoards'>>(GET_BOARDS);
  const { data, loading } = useQuery<IQueryFilter<'getProducts'>>(GETPRODUCTS, {
    variables: {
      filter: {
        store: router?.query?.id?.[1]
      }
    }
  });
  //   console.log([query.id]?.flat().find((_, i) => i === 1));
  //   console.log(router?.query?.id?.[router.query.id.length - 2]);
  //   console.log(router?.query?.id?.[1]);
  console.log(boards?.getBoards);
  return (
    <AtomWrapper padding="0" flexDirection="row">
      <AtomWrapper
        width="70%"
        height="100%"
        customCSS={css`
          flex-direction: row;
          justify-content: flex-start;
          flex-wrap: wrap;
          gap: 1rem;
          padding: 30px;
        `}
      >
        {loading ? (
          <AtomWrapper
            customCSS={css`
              width: 30.3%;
              height: 300px;
              background-color: #2e2e35;
              justify-content: space-between;
              border-radius: 8px;
            `}
          >
            <AtomLoader
              isLoading
              type="small"
              width="100%"
              height="100%"
              colorLoading="white"
            />
          </AtomWrapper>
        ) : (
          <>
            {data?.getProducts?.map((product) => (
              <MoleculeCardProduct key={product?.id} {...product} />
            ))}
            {boards?.getBoards?.map((board) => (
              <MoleculeCardBoard key={board?.id} {...board} />
            ))}
          </>
        )}
      </AtomWrapper>
      <AtomWrapper width="30%" height="80vh" padding="10px">
        <AtomWrapper
          height="100%"
          justifyContent="flex-end"
          customCSS={css`
            gap: 10px;
          `}
        >
          <AtomButton width="100%" backgroundColor="#eeeeee" color="#000000">
            Apply Coupon
          </AtomButton>
          <AtomWrapper
            flexDirection="row"
            flexWrap="wrap"
            customCSS={css`
              span {
                color: #ffffff;
                border: 1px solid #ffffff;
                padding: 5px;
              }
            `}
          >
            <AtomText width="70%">Subtotal</AtomText>
            <AtomText width="30%" align="right">
              $0
            </AtomText>
            <AtomText width="70%">Tax</AtomText>
            <AtomText width="30%" align="right">
              $0
            </AtomText>
            <AtomText
              width="70%"
              customCSS={css`
                color: #2eaade !important;
              `}
            >
              Discount
            </AtomText>
            <AtomText width="30%" align="right">
              $-0
            </AtomText>
            <AtomText width="100%">Coupon</AtomText>
            <AtomText width="70%">Grand Total</AtomText>
            <AtomText width="30%" align="right">
              $0
            </AtomText>
          </AtomWrapper>
          <AtomWrapper
            flexDirection="row"
            flexWrap="wrap"
            customCSS={css`
              gap: 10px 0;
              justify-content: space-between;
            `}
          >
            <AtomButton width="50%" backgroundColor="#f1576c">
              Select Customer
            </AtomButton>
            <AtomButton width="45%" backgroundColor="#f1576c">
              Pay
            </AtomButton>
          </AtomWrapper>
        </AtomWrapper>
      </AtomWrapper>
    </AtomWrapper>
  );
};
export default PointSale;
