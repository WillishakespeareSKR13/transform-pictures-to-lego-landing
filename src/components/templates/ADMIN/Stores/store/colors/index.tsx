import { useMutation, useQuery } from '@apollo/client';
import { css } from '@emotion/react';
import { GETCOLORS } from '@Src/apollo/client/query/colors';
import DashWithTitle from '@Src/components/layouts/DashWithTitle';
import { InputDragAndDropStyles, InputStyles, TableStyles } from '@Src/styles';
import {
  AtomButton,
  AtomIcon,
  AtomImage,
  AtomTable,
  AtomText,
  AtomWrapper
} from '@sweetsyui/ui';
import AtomInput from '@Atoms/AtomInput';
import { useFormik } from 'formik';
import { IColor, IQueryFilter } from 'graphql';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import * as Yup from 'yup';
import uploadImage from '@Src/utils/uploadImage';
import { NEWCOLOR } from '@Src/apollo/client/mutation/color';
import ModalUpdateColor from './update';
import ModalDeleteColor from './delete';

export type ColorModalType = IColor & {
  openModal: boolean;
};

const Colors = () => {
  const router = useRouter();
  const [itemDelete, setitemDelete] = useState<ColorModalType>({
    openModal: false
  });
  const [itemUpdate, setItemUpdate] = useState<ColorModalType>({
    openModal: false
  });

  const { data, refetch: refetchColors } =
    useQuery<IQueryFilter<'getColors'>>(GETCOLORS);

  const [createColor] = useMutation(NEWCOLOR, {
    onCompleted: () => {
      refetchColors();
    }
  });

  const formik = useFormik({
    initialValues: {
      icon: {} as File,
      name: '',
      color: ''
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      icon: Yup.mixed()
        .required('Required')
        .test('icon', 'Icon is required', (value) => value?.name),
      name: Yup.string().required('Required'),
      color: Yup.string().required('Required')
    }),
    onSubmit: async (values) => {
      createColor({
        variables: {
          input: {
            name: values.name,
            color: values.color,
            icon: await uploadImage(values.icon, {
              name: 'store',
              orgcode: 'LGO-0001'
            })
          }
        }
      });
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
    >
      <ModalUpdateColor state={itemUpdate} setState={setItemUpdate} />
      <ModalDeleteColor state={itemDelete} setState={setitemDelete} />
      <AtomWrapper flexDirection="row">
        <AtomWrapper
          flexDirection="row"
          width="70%"
          customCSS={css`
            height: calc(100vh - 140px);
            overflow-y: scroll;
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
        <AtomWrapper width="30%" padding=" 0 0 0 20px">
          <AtomText color="#dfdfdf" fontSize="16px">
            New color
          </AtomText>
          <AtomWrapper padding="10px 0 0 0">
            <AtomInput
              id="icon"
              type="dragdrop"
              width="300px"
              height="300px"
              customCSS={InputDragAndDropStyles}
              formik={formik}
            />
            <AtomWrapper
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="center"
              customCSS={css`
                gap: 10px;
              `}
            >
              <AtomInput
                id="color"
                type="text"
                label="Color"
                labelFontSize="14px"
                labelWidth="60%"
                customCSS={InputStyles}
                formik={formik}
                onChange={(e) => {
                  formik.setFieldValue('color', e.target.value);
                }}
              />
              <AtomInput
                onChange={(e) => {
                  formik.setFieldValue('color', e.target.value);
                }}
                type="color"
                padding="0px"
                width="30px"
                height="30px"
                value={formik.values.color}
                customCSS={css`
                  background: #2e2e35;
                  border: none;
                  input[type='color']::-webkit-color-swatch {
                    border: none;
                    border-radius: 50%;
                    padding: 0;
                  }

                  input[type='color']::-webkit-color-swatch-wrapper {
                    border: none;
                    border-radius: 50%;
                    padding: 0;
                  }
                `}
              />
            </AtomWrapper>
            <AtomInput
              id="name"
              type="text"
              label="Name"
              labelFontSize="14px"
              labelWidth="60%"
              customCSS={InputStyles}
              formik={formik}
            />
          </AtomWrapper>

          <AtomButton
            padding="8px 20px"
            fontSize="16px"
            backgroundColor="#f1576c"
            borderRadius="2px"
            onClick={() => {
              formik.validateForm();
              // console.log(formik.errors);
              // console.log(formik);
              formik.submitForm();
              formik.handleSubmit();
            }}
          >
            Add Color
          </AtomButton>
        </AtomWrapper>
      </AtomWrapper>
    </DashWithTitle>
  );
};
export default Colors;
