import { useQuery } from '@apollo/client';
import { css } from '@emotion/react';
import { PAYSALEORDER } from '@Src/apollo/client/query/saleOrder';
import {
  AtomButton,
  AtomImage,
  AtomLoader,
  AtomText,
  AtomWrapper
} from '@sweetsyui/ui';
import Confetti, { ConfettiConfig } from 'react-dom-confetti';
import { useRouter } from 'next/router';
import React from 'react';
import { IQueryFilter } from 'graphql';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ConfettiComponent = Confetti as any;

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: '200',
  dragFriction: 0.08,
  duration: 3000,
  stagger: '8',
  width: '6px',
  height: '6px',
  perspective: '500px',
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a']
} as unknown as ConfettiConfig;

const CompleteOrderPay = () => {
  const router = useRouter();
  const { data, loading } = useQuery<IQueryFilter<'paySaleOrder'>>(
    PAYSALEORDER,
    {
      skip: !router.query.id,
      variables: {
        id: router.query.id
      }
    }
  );

  return (
    <AtomWrapper
      backgroundColor="#1a1a1f"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      customCSS={css`
        overflow: hidden;
      `}
    >
      {loading && (
        <AtomLoader
          isLoading
          backgroundColor="transparent"
          colorLoading="#ffffff"
        />
      )}
      <AtomWrapper
        customCSS={css`
          position: absolute;
          left: 50%;
          top: 50%;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translate(-50%, -50%);
        `}
      >
        <ConfettiComponent active={!!data?.paySaleOrder} config={config} />
      </AtomWrapper>
      {data?.paySaleOrder && (
        <AtomWrapper
          maxWidth="max-content"
          borderRadius="5px"
          backgroundColor="#2e2e35"
          padding="60px 60px"
          justifyContent="center"
          alignItems="center"
        >
          <AtomText
            customCSS={css`
              text-align: center;
              max-width: 340px;
              font-size: 20px;
              font-weight: 600;
              color: #fff;
            `}
          >
            You have successfully paid for this order.
          </AtomText>
          <AtomImage
            alt="success"
            src="/images/check-mark.png"
            height="120px"
            width="max-content"
            margin="40px 0"
          />
          {data?.paySaleOrder?.board?.map((e) => (
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
              <AtomText>Download PDF</AtomText>
            </AtomButton>
          ))}

          <AtomButton
            onClick={() => {
              router.push('/');
            }}
            customCSS={css`
              border: 2px solid #48d496;
              background-color: #48d496;
              span {
                font-size: 12px;
                font-weight: 600;
                color: #fff;
              }
            `}
          >
            <AtomText>Go to home page</AtomText>
          </AtomButton>
        </AtomWrapper>
      )}
    </AtomWrapper>
  );
};

export default CompleteOrderPay;
