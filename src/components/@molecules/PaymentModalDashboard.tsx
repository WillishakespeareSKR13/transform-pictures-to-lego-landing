import { css } from '@emotion/react';
import ReactPDF from '@react-pdf/renderer';
import { COLORTYPE } from '@Src/config';
import { ICart, setCartAtom } from '@Src/jotai/cart';
import { CloseModal } from '@Src/redux/actions/modal';
import uploadImage from '@Src/utils/uploadImage';
import { AtomWrapper, AtomButton } from '@sweetsyui/ui';
import { IBoard, IBoardSize } from 'graphql';
import { useAtom } from 'jotai';
import { FC } from 'react';
import { useDispatch } from 'react-redux';

type Props = {
  board?: IBoard;
  size?: IBoardSize;
  isReady?: boolean;
  color?: COLORTYPE[];
  pdf: [ReactPDF.UsePDFInstance, () => void];
};

const PaymentModal: FC<Props> = (props) => {
  const { board, size, isReady, color, pdf } = props;
  const dispatch = useDispatch();
  const [_, setCart] = useAtom(setCartAtom);

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
                count: Math.ceil(value.count / 156.25)
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
          setCart({
            key: 'ADDCART',
            payload: {
              id: board?.id,
              type: 'BOARD',
              quantity: 1,
              board: {
                id: board?.id,
                size: size?.id,
                pdf: urlPdf
              },
              color: transformColor
            } as ICart
          });
          dispatch(CloseModal());
        }}
      >
        ADD
      </AtomButton>
    </AtomWrapper>
  );
};

export default PaymentModal;
