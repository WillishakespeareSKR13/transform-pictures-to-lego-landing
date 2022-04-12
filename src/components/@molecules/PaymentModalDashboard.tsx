import { useMutation } from '@apollo/client';
import { css } from '@emotion/react';
import ReactPDF from '@react-pdf/renderer';
import { NEWCOLORSALEORDER } from '@Src/apollo/client/mutation/color';
import { NEWSALEORDER } from '@Src/apollo/client/mutation/saleOrder';
import { COLORTYPE } from '@Src/config';
import { AtomWrapper, AtomButton, uploadImage } from '@sweetsyui/ui';
import { IBoard, IBoardSize, ISaleOrder } from 'graphql';
import { FC, useEffect, useState } from 'react';

type Props = {
  board?: IBoard;
  size?: IBoardSize;
  isReady?: boolean;
  color?: COLORTYPE[];
  pdf: [ReactPDF.UsePDFInstance, () => void];
};

const PaymentModal: FC<Props> = (props) => {
  const { board, size, isReady, color, pdf } = props;
  const [saleOrder, setSaleOrder] = useState<ISaleOrder | undefined>();

  const [EXENEWSALEORDER, { data }] = useMutation(NEWSALEORDER);
  const [EXENEWCOLORSALEORDER] = useMutation(NEWCOLORSALEORDER);

  useEffect(() => {
    const secret = data?.newSaleOrder;
    setSaleOrder(secret);
  }, [data?.newSaleOrder]);

  return (
    <AtomWrapper
      customCSS={css`
        position: relative;
        width: 94px;
      `}
    >
      <AtomButton
        backgroundColor="#e95c10"
        fontSize="12px"
        fontWeight="bold"
        padding="10px 30px"
        margin="0px 0px 0px 10px"
        disabled={!isReady}
        onClick={async () => {
          const [instance] = pdf;
          const BlobToFile = (blob: Blob, fileName: string) => {
            const file = new File([blob], fileName, {
              type: blob.type,
              lastModified: Date.now()
            });
            return file;
          };

          const urlPdf = await uploadImage(
            BlobToFile(
              instance?.blob as Blob,
              `${new Date().toDateString()}.pdf`
            ),
            {
              name: 'pdf',
              orgcode: 'LGO-0001'
            }
          );

          const transformColor = color
            ?.map((color) =>
              Object.entries(color).map(([_, value]) => ({
                ...value,
                count: Math.round(value.count / 156.24)
              }))
            )
            .flat()
            .reduce((acc, curr) => {
              const isColor = acc.find((color) => color.value === curr.value);
              return isColor
                ? acc.map((e) =>
                    e.value === curr.value
                      ? { ...e, count: e.count + curr.count }
                      : e
                  )
                : [...acc, curr];
            }, [] as { value: string; count: number; color: string; id: string }[]);

          EXENEWCOLORSALEORDER({
            variables: {
              input: {
                colors: transformColor?.map((color) => ({
                  color: color.id,
                  quantity: color.count
                }))
              }
            }
          }).then((e) => {
            const id = e.data.newColorSaleOrder.id;
            EXENEWSALEORDER({
              variables: {
                input: {
                  board: [
                    {
                      board: board?.id,
                      size: size?.id,
                      pdf: urlPdf
                    }
                  ],
                  colorsaleorder: [id]
                }
              }
            });
          });
        }}
      >
        ADD
      </AtomButton>
    </AtomWrapper>
  );
};

export default PaymentModal;
