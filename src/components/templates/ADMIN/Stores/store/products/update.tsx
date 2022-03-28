import { css } from '@emotion/react';
import { InputDragAndDropStyles, InputStyles } from '@Src/styles';
import {
  AtomButton,
  AtomInput,
  AtomLoader,
  AtomModal,
  AtomWrapper
} from '@sweetsyui/ui';
import { useFormik } from 'formik';
import React, { Dispatch, FC, SetStateAction } from 'react';
import { ProductModalType } from './index';
import * as Yup from 'yup';
import { UPDATEPRODUCT } from '@Src/apollo/client/query/products';
import { useMutation } from '@apollo/client';
import uploadImage from '@Src/utils/uploadImage';
import { useRouter } from 'next/router';

interface ModalUpdateProductType {
  state: ProductModalType;
  setState: Dispatch<SetStateAction<ProductModalType>>;
}

const ModalUpdateProduct: FC<ModalUpdateProductType> = (props) => {
  const router = useRouter();
  const { state, setState } = props;
  const [updateProduct, { loading: loadingUpdateProduct }] = useMutation(
    UPDATEPRODUCT,
    {
      onCompleted: () => {
        setState({
          openModal: false
        });
        router.reload();
      }
    }
  );

  const formik = useFormik({
    initialValues: {
      photo: {} as File,
      name: state?.name ?? '',
      description: state?.description ?? '',
      price: state?.price ?? 0,
      stock: state?.stock ?? 0,
      sku: state?.sku ?? ''
    },
    validationSchema: Yup.object({
      photo: Yup.string().required('Required'),
      name: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
      price: Yup.number().required('Required'),
      stock: Yup.number().required('Required'),
      sku: Yup.string().required('Required')
    }),
    enableReinitialize: true,
    onSubmit: async (values) => {
      updateProduct({
        variables: {
          id: state?.id,
          input: {
            name: values.name,
            description: values.description,
            price: values.price,
            stock: values.stock,
            sku: values.sku,
            image: values.photo.name
              ? await uploadImage(values.photo, {
                  name: 'store',
                  orgcode: 'LGO-0001'
                })
              : state?.image
          }
        }
      });
    }
  });
  return (
    <AtomModal
      isOpen={state.openModal}
      setIsOpen={() => setState({ openModal: false })}
      componentProps={{
        wrapperProps: {
          backgroundColor: '#2e2e35',
          padding: '0 30px'
        }
      }}
      component={
        <>
          <AtomWrapper alignItems="flex-end"></AtomWrapper>
          <AtomWrapper
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
          >
            <AtomLoader
              isLoading={loadingUpdateProduct}
              backgroundColor="transparent"
              colorLoading="#f1576c"
            />
            <AtomWrapper width="50%" alignItems="center">
              <AtomInput
                id="photo"
                formik={formik}
                type="dragdrop"
                width="300px"
                height="300px"
                customCSS={InputDragAndDropStyles}
                imagePreview={state?.image}
              />
            </AtomWrapper>
            <AtomWrapper
              width="50%"
              alignItems="center"
              flexDirection="row"
              flexWrap="wrap"
              customCSS={css`
                gap: 0 20px;
              `}
            >
              <AtomInput
                id="name"
                type="text"
                label="Name"
                labelFontSize="14px"
                labelWidth="45%"
                formik={formik}
                customCSS={InputStyles}
              />

              <AtomInput
                id="sku"
                type="text"
                label="sku"
                labelFontSize="14px"
                labelWidth="45%"
                formik={formik}
                customCSS={InputStyles}
              />
              <AtomInput
                id="price"
                type="number"
                label="price"
                labelFontSize="14px"
                labelWidth="45%"
                formik={formik}
                customCSS={InputStyles}
              />
              <AtomInput
                id="stock"
                type="number"
                label="stock"
                labelFontSize="14px"
                labelWidth="45%"
                formik={formik}
                customCSS={InputStyles}
              />
              <AtomInput
                id="description"
                type="textbox"
                label="Description"
                labelFontSize="14px"
                labelWidth="90%"
                formik={formik}
                customCSS={InputStyles}
              />
            </AtomWrapper>
          </AtomWrapper>
          <AtomButton
            onClick={() => {
              formik.validateForm();
              formik.submitForm();
            }}
          >
            update Product
          </AtomButton>
        </>
      }
    />
  );
};
export default ModalUpdateProduct;
