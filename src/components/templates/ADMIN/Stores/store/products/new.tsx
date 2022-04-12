import { useMutation, useQuery } from '@apollo/client';
import { css } from '@emotion/react';
import { NEWPRODUCT } from '@Src/apollo/client/query/products';
import { InputDragAndDropStyles, InputStyles } from '@Src/styles';
import {
  AtomButton,
  AtomInput,
  AtomLoader,
  AtomModal,
  AtomWrapper
} from '@sweetsyui/ui';
import uploadImage from '@Src/utils/uploadImage';
import { useFormik } from 'formik';
import React, { Dispatch, FC, SetStateAction } from 'react';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { GETCOLORS } from '@Src/apollo/client/query/colors';
import { IQueryFilter } from 'graphql';

interface ModalNewProductType {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}

const ModalNewProduct: FC<ModalNewProductType> = (props) => {
  const router = useRouter();
  const { state, setState } = props;
  const [newProduct, { loading: loadingNewProduct }] = useMutation(NEWPRODUCT, {
    onCompleted: () => {
      setState(false);
      router.reload();
    }
  });
  const { data } = useQuery<IQueryFilter<'getColors'>>(GETCOLORS);

  const formik = useFormik({
    initialValues: {
      photo: {} as File,
      name: '',
      description: '',
      price: 0,
      stock: 0,
      sku: '',
      color: 'DEFAULT'
    },
    validationSchema: Yup.object({
      photo: Yup.string().required('Required'),
      name: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
      price: Yup.number().required('Required'),
      stock: Yup.number().required('Required'),
      sku: Yup.string().required('Required')
    }),
    onSubmit: async (values) => {
      const color = values.color === 'DEFAULT' ? {} : { color: values.color };
      newProduct({
        variables: {
          input: {
            name: values.name,
            description: values.description,
            price: values.price,
            stock: values.stock,
            sku: values.sku,
            image: await uploadImage(values.photo, {
              name: 'store',
              orgcode: 'LGO-0001'
            }),
            store: router?.query?.id?.[1],
            ...color
          }
        }
      });
    }
  });
  return (
    <AtomModal
      isOpen={state}
      setIsOpen={() => setState(false)}
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
              isLoading={loadingNewProduct}
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
                id="color"
                type="select"
                label="color"
                labelFontSize="14px"
                labelWidth="90%"
                formik={formik}
                defaultText="Select Color"
                options={data?.getColors?.map((e) => ({
                  id: `${e?.id}`,
                  label: `${e?.name}`,
                  value: `${e?.id}`
                }))}
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
            Create Product
          </AtomButton>
        </>
      }
    />
  );
};
export default ModalNewProduct;
