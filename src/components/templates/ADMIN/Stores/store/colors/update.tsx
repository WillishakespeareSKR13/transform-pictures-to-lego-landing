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
import React, { Dispatch, FC, SetStateAction, useEffect, useRef } from 'react';
import { ColorModalType } from './index';
import * as Yup from 'yup';
import { useMutation } from '@apollo/client';
import uploadImage from '@Src/utils/uploadImage';
import { useRouter } from 'next/router';
import { UPDATECOLOR } from '@Src/apollo/client/query/colors';

interface ModalUpdateColorType {
  state: ColorModalType;
  setState: Dispatch<SetStateAction<ColorModalType>>;
}

const ModalUpdateColor: FC<ModalUpdateColorType> = (props) => {
  const router = useRouter();
  const { state, setState } = props;
  const [updateProduct, { loading: loadingUpdateProduct }] = useMutation(
    UPDATECOLOR,
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
      color: state?.color ?? ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      color: Yup.string().required('Required')
    }),
    enableReinitialize: true,
    onSubmit: async (values) => {
      updateProduct({
        variables: {
          id: state?.id,
          input: {
            name: values.name,
            color: values.color,
            icon: values.photo.name
              ? await uploadImage(values.photo, {
                  name: 'store',
                  orgcode: 'LGO-0001'
                })
              : state?.icon
          }
        }
      });
    }
  });

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setState?.({ openModal: false });
      }
    };

    document.addEventListener(`mousedown`, handleClickOutside, true);
    return () => {
      document.removeEventListener(`mousedown`, handleClickOutside, true);
    };
  }, [ref]);

  return (
    <AtomModal
      isOpen={state.openModal}
      componentProps={{
        wrapperProps: {
          refObject: ref,
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
                imagePreview={state?.icon}
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
                labelWidth="50%"
                formik={formik}
                customCSS={InputStyles}
              />

              <AtomInput
                id="color"
                type="color"
                label="color"
                labelFontSize="14px"
                labelWidth="50%"
                formik={formik}
                defaultText="Select Color"
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
            Update Color
          </AtomButton>
        </>
      }
    />
  );
};
export default ModalUpdateColor;
