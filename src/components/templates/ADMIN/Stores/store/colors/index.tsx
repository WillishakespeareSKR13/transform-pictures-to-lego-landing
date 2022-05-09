import { useQuery } from '@apollo/client';
import { css, SerializedStyles } from '@emotion/react';
import { GETCOLORS } from '@Src/apollo/client/query/colors';
import DashWithTitle from '@Src/components/layouts/DashWithTitle';
import { TableStyles } from '@Src/styles';

export type ItemCardShopType = {
  id: string;
  image: string;
  name: string;
  variant?: string;
  price: number;
  quantity: number;
  type: string;
  customCSS?: SerializedStyles;
};

import {
  AtomButton,
  AtomIcon,
  AtomImage,
  AtomTable,
  AtomWrapper
} from '@sweetsyui/ui';
import { IColor, IQueryFilter } from 'graphql';
import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';
import ModalDeleteProduct from './delete';
import ModalNewProduct from './new';
import ModalUpdateProduct from './update';

export type ProductModalType = IColor & {
  openModal: boolean;
};

const Products: FC = () => {
  const router = useRouter();
  const [itemDelete, setitemDelete] = useState<ProductModalType>({
    openModal: false
  });
  const [itemUpdate, setItemUpdate] = useState<ProductModalType>({
    openModal: false
  });
  const [openNewProduct, setOpenNewProduct] = useState<boolean>(false);
  const { data } = useQuery<IQueryFilter<'getColors'>>(GETCOLORS, {
    variables: {
      filter: {
        store: router?.query?.id?.[1]
      }
    }
  });
  return (
    <DashWithTitle
      url={{
        pathname: router.pathname,
        query: {
          id: Array.isArray(router.query.id)
            ? router.query.id.filter((_, idx, arr) => idx !== arr.length - 1)
            : router.query.id
        }
      }}
      title="Colors"
      button={
        <AtomButton onClick={() => setOpenNewProduct(!openNewProduct)}>
          New Color
        </AtomButton>
      }
    >
      <ModalDeleteProduct state={itemDelete} setState={setitemDelete} />
      <ModalNewProduct state={openNewProduct} setState={setOpenNewProduct} />
      <ModalUpdateProduct state={itemUpdate} setState={setItemUpdate} />
      <AtomWrapper
        padding="10px 0"
        flexDirection="row"
        customCSS={css`
          min-height: calc(100vh - 140px);
          gap: 30px;
        `}
      >
        <AtomTable
          data={data?.getColors as IColor[]}
          customCSS={TableStyles}
          columns={[
            {
              title: '',
              view: (item) => (
                <AtomWrapper flexDirection="row">
                  <AtomButton
                    backgroundColor="transparent"
                    padding="0px 0px"
                    margin="0px 5px 0px 15px"
                    onClick={() => {
                      setItemUpdate({ ...item, openModal: true });
                    }}
                  >
                    <AtomIcon
                      width="20px"
                      height="20px"
                      icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/JRO-0001/icons/Component%20200%20%E2%80%93%202.svg"
                      customCSS={css`
                        svg {
                          g {
                            path {
                              fill: none !important;
                              stroke: #579af1 !important;
                            }
                          }
                        }
                      `}
                    />
                  </AtomButton>

                  <AtomButton
                    backgroundColor="transparent"
                    padding="0px 0px"
                    margin="0px 5px 0px 15px"
                    onClick={() => {
                      setitemDelete({
                        ...item,
                        openModal: true
                      });
                    }}
                  >
                    <AtomIcon
                      height="20px"
                      width="20px"
                      color="#f1576c"
                      icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/MDC-0001/svg/trash-svgrepo-com.svg"
                    />
                  </AtomButton>
                </AtomWrapper>
              ),
              width: '90px',
              customCSS: css`
                padding: 10px 0px !important;
              `
            },
            {
              title: 'image',
              view: (item) => (
                <AtomWrapper
                  customCSS={css`
                    justify-content: center;
                    align-items: center;
                    background-color: ${item?.color};
                  `}
                >
                  <AtomImage
                    src={`${item?.icon}`}
                    alt={`${item?.icon}`}
                    height="100px"
                    width="100px"
                    customCSS={css`
                      overflow: hidden;
                      border-radius: 4px;
                    `}
                  />
                </AtomWrapper>
              )
            },
            {
              title: 'Name',
              view: (item) => <>{`${item?.name}`}</>
            },
            {
              title: 'Color',
              view: (item) => <>{`${item?.color}`}</>,
              width: '400px'
            }
          ]}
        />
      </AtomWrapper>
    </DashWithTitle>
  );
};
export default Products;
