import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { AtomLoader, AtomWrapper, AtomButton } from '@sweetsyui/ui';
import { FC, useEffect, useRef, useState } from 'react';

const stripePromise = loadStripe('pk_test_8rT8GD6ByXYXhSxzRhhwcwBD00wfxfcg7a');

type Props = {
  product?: string;
  size?: string;
  isReady?: boolean;
};

const PaymentModal: FC<Props> = (props) => {
  const { product, size, isReady } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [saleOrder, setSaleOrder] = useState<ISaleOrder | undefined>();

  const ref = useRef<HTMLDListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener(`mousedown`, handleClickOutside);
    return () => {
      document.removeEventListener(`mousedown`, handleClickOutside);
    };
  }, [ref]);

  const [EXENEWSALEORDER, { data }] = useMutation(NEWSALEORDER);

  useEffect(() => {
    const secret = data?.newSaleOrder;
    setSaleOrder(secret);
  }, [data?.newSaleOrder]);

  return (
    <AtomWrapper
      refObject={ref}
      customCSS={css`
        position: relative;
        width: 94px;
      `}
    >
      {isOpen && (
        <AtomWrapper
          maxWidth="max-content"
          key={`${isOpen}`}
          customCSS={css`
            background-color: #fff;
            border-radius: 4px;
            width: 400px;
            position: absolute;
            bottom: 50px;
            right: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 30px 0px;
          `}
        >
          {!saleOrder && (
            <AtomLoader
              type="small"
              isLoading
              width="400px"
              colorLoading="#313139"
            />
          )}
          {saleOrder && (
            <Elements
              stripe={stripePromise}
              options={{
                clientSecret: saleOrder.secret
              }}
            >
              <CheckoutForm
                saleOrder={saleOrder}
                setSaleOrder={() => {
                  setSaleOrder(undefined);
                }}
              />
            </Elements>
          )}
        </AtomWrapper>
      )}
      <AtomButton
        backgroundColor="#e95c10"
        fontSize="12px"
        fontWeight="bold"
        padding="10px 30px"
        margin="0px 0px 0px 10px"
        disabled={!isReady}
        onClick={() => {
          setIsOpen(true);
          if (!saleOrder) {
            EXENEWSALEORDER({
              variables: {
                input: {
                  product,
                  size
                }
              }
            });
          }
        }}
      >
        PAY
      </AtomButton>
    </AtomWrapper>
  );
};

export default PaymentModal;

import {
  useStripe,
  useElements,
  PaymentElement
} from '@stripe/react-stripe-js';
import { css } from '@emotion/react';
import { useMutation } from '@apollo/client';
import { NEWSALEORDER } from '@Src/apollo/client/mutation/saleOrder';
import { ISaleOrder } from '@Src/apollo/server/models/saleOrder';

type CheckoutFormProps = {
  saleOrder?: ISaleOrder;
  setSaleOrder?: (saleOrder: ISaleOrder | undefined) => void;
};

const CheckoutForm: FC<CheckoutFormProps> = (props) => {
  const { saleOrder, setSaleOrder } = props;
  const [loading, setLoading] = useState(true);
  const [loadingButton, setLoadingButton] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();
    setLoadingButton(true);
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: `http://${location.host}/order/complete/${saleOrder?.id}`
      }
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.warn(result.error.message);
      setLoadingButton(false);
    } else {
      setSaleOrder?.(saleOrder);
      setLoadingButton(false);
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <AtomWrapper
      customCSS={css`
        padding: 20px 0px 0px 0px;
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        #paymentElement {
          opacity: ${loading ? 0 : 1};
          transition: opacity 0.5s ease-in-out;
        }
        form {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}
    >
      <form onSubmit={handleSubmit}>
        {loading && (
          <AtomLoader type="small" isLoading colorLoading="#313139" />
        )}

        <PaymentElement onReady={() => setLoading(false)} id="paymentElement" />

        {!loading && (
          <AtomButton
            disabled={loading}
            customCSS={css`
              margin: 20px 0px 0px 0px;
            `}
          >
            {loadingButton ? (
              <AtomLoader
                type="small"
                isLoading
                colorLoading="white"
                widthLoader="2px"
                customCSS={css`
                  .lds-ring {
                    transform: translate(-40%, -45%);
                    width: 18px;
                    height: 18px;
                    div {
                      width: 18px;
                      height: 18px;
                    }
                  }
                `}
              />
            ) : (
              'Pay'
            )}
          </AtomButton>
        )}
      </form>
    </AtomWrapper>
  );
};
