import { useMutation, useQuery } from '@apollo/client';
import { css } from '@emotion/react';
import { NEWSTORE } from '@Src/apollo/client/mutation/store';
import { GETSTORETYPES } from '@Src/apollo/client/query/storeType';
import DashWithTitle from '@Src/components/layouts/DashWithTitle';
import { InputDragAndDropStyles, InputStyles } from '@Src/styles';
import uploadImage from '@Src/utils/uploadImage';
import {
  AtomButton,
  AtomIcon,
  AtomInput,
  AtomLoader,
  AtomWrapper
} from '@sweetsyui/ui';
import { useFormik } from 'formik';
import { IQueryFilter } from 'graphql';
import { useRouter } from 'next/router';
import { useState } from 'react';
import * as Yup from 'yup';

const ADD = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: '',
      numberoffice: '',
      numberstore: '',
      description: '',
      phone: '',
      email: '',
      website: '',
      photo: {} as File,
      cash: 0,
      currency: 'DEFAULT',
      street: '',
      city: '',
      state: '',
      zip: '',
      storeType: 'DEFAULT'
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      numberoffice: Yup.string().required('Required'),
      numberstore: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
      phone: Yup.string()
        .required('Required')
        .test('phone', 'Invalid phone number', (value) =>
          /^\d{10}$/.test(`${value}`)
        ),
      email: Yup.string().required('Required').email('Invalid email'),
      website: Yup.string()
        .required('Required')
        .test('website', 'Invalid website', (value) =>
          /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(
            `${value}`
          )
        ),
      photo: Yup.string().required('Required'),
      cash: Yup.number().required('Required'),
      currency: Yup.mixed().test(
        'currency',
        'Select a currency',
        (value) => value !== 'DEFAULT'
      ),
      street: Yup.string().required('Required'),
      city: Yup.string().required('Required'),
      state: Yup.string().required('Required'),
      zip: Yup.string().required('Required'),
      storeType: Yup.mixed().test(
        'storeType',
        'Select a store type',
        (value) => value !== 'DEFAULT'
      )
    }),
    onSubmit: async (values) => {
      setLoading(true);
      EXENEWSTORE({
        variables: {
          input: {
            ...values,
            photo: await uploadImage(values.photo, {
              name: 'store',
              orgcode: 'LGO-0001'
            })
          }
        }
      }).then(() => {
        location.href = '/dashboard';
      });
    }
  });
  const [loading, setLoading] = useState(false);
  const { data } = useQuery<IQueryFilter<'getStoreTypes'>>(GETSTORETYPES);
  const [EXENEWSTORE] = useMutation(NEWSTORE);

  return (
    <DashWithTitle
      title="Create new store"
      button={
        <AtomButton
          customCSS={css`
            padding: 8px 30px;
            font-size: 10px;
            background-color: #1e8746;
          `}
          type="submit"
          onClick={() => {
            formik.validateForm();
            formik.handleSubmit();
          }}
        >
          {loading ? (
            <AtomLoader
              isLoading
              type="small"
              colorLoading="white"
              widthLoader="2px"
              customCSS={css`
                .lds-ring {
                  width: 15px;
                  height: 15px;
                  div {
                    margin: 1px 2px;
                    width: 14px;
                    height: 14px;
                  }
                }
              `}
            />
          ) : (
            'Save Store'
          )}
        </AtomButton>
      }
    >
      <AtomWrapper>
        <AtomWrapper
          customCSS={css`
            flex-direction: row;
            gap: 30px;
          `}
        >
          <AtomInput
            id="photo"
            formik={formik}
            type="dragdrop"
            width="400px"
            height="400px"
            customCSS={InputDragAndDropStyles}
          />
          <AtomWrapper
            customCSS={css`
              width: calc(100% - 400px);
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: space-between;
            `}
          >
            <AtomInput
              id="name"
              type="text"
              label="Name of store"
              labelFontSize="14px"
              labelWidth="45%"
              formik={formik}
              customCSS={InputStyles}
            />
            <AtomInput
              id="numberoffice"
              type="number"
              label="Number of office"
              labelFontSize="14px"
              labelWidth="45%"
              formik={formik}
              customCSS={InputStyles}
            />
            <AtomInput
              id="numberstore"
              type="number"
              label="Number of store"
              labelFontSize="14px"
              labelWidth="45%"
              formik={formik}
              customCSS={InputStyles}
            />
            <AtomInput
              id="description"
              type="text"
              label="Description"
              labelFontSize="14px"
              labelWidth="45%"
              formik={formik}
              customCSS={InputStyles}
            />
            <AtomInput
              id="phone"
              type="phone"
              label="Phone number"
              labelFontSize="14px"
              labelWidth="45%"
              formik={formik}
              customCSS={InputStyles}
            />
            <AtomWrapper
              customCSS={css`
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                width: 45%;
                gap: 15px;
              `}
            >
              <AtomInput
                id="storeType"
                type="select"
                defaultText="Select store type"
                label="Store type"
                labelFontSize="14px"
                labelWidth="100%"
                formik={formik}
                customCSS={InputStyles}
                options={data?.getStoreTypes?.map((e) => ({
                  id: `${e?.id}`,
                  label: `${e?.name}`,
                  value: `${e?.id}`
                }))}
              />
              <AtomButton
                customCSS={css`
                  padding: 0px 0px;
                  background-color: transparent;
                `}
                onClick={() => {
                  router.push('/dashboard/store/add/storeType');
                }}
              >
                <AtomIcon
                  icon="https://upload.wikimedia.org/wikipedia/commons/5/5f/Antu_vcs-added.svg"
                  customCSS={css`
                    svg {
                      circle {
                        fill: #dfdfdf !important;
                      }
                      path {
                        fill: #2e2e35 !important;
                      }
                    }
                    margin-bottom: 4px;
                  `}
                />
              </AtomButton>
            </AtomWrapper>

            <AtomInput
              id="website"
              type="text"
              label="Website"
              labelFontSize="14px"
              labelWidth="45%"
              formik={formik}
              customCSS={InputStyles}
            />
            <AtomInput
              id="email"
              type="text"
              label="Email address"
              labelFontSize="14px"
              labelWidth="45%"
              formik={formik}
              customCSS={InputStyles}
            />
            <AtomInput
              id="cash"
              type="number"
              label="Cash"
              labelFontSize="14px"
              labelWidth="45%"
              formik={formik}
              customCSS={InputStyles}
            />
            <AtomInput
              id="currency"
              type="select"
              defaultText="Select currency"
              options={[
                {
                  id: '1',
                  value: 'USD',
                  label: 'USD'
                },
                {
                  id: '2',
                  value: 'MXN',
                  label: 'MXN'
                }
              ]}
              label="Currency"
              labelFontSize="14px"
              labelWidth="45%"
              formik={formik}
              customCSS={InputStyles}
            />
          </AtomWrapper>
        </AtomWrapper>
        <AtomWrapper
          customCSS={css`
            margin-top: 30px;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
          `}
        >
          <AtomInput
            id="street"
            type="text"
            label="Street"
            labelFontSize="14px"
            labelWidth="30%"
            formik={formik}
            customCSS={InputStyles}
          />
          <AtomInput
            id="city"
            type="text"
            label="City"
            labelFontSize="14px"
            labelWidth="30%"
            formik={formik}
            customCSS={InputStyles}
          />
          <AtomInput
            id="state"
            type="text"
            label="State"
            labelFontSize="14px"
            labelWidth="30%"
            formik={formik}
            customCSS={InputStyles}
          />
          <AtomInput
            id="zip"
            type="text"
            label="Zip"
            labelFontSize="14px"
            labelWidth="30%"
            formik={formik}
            customCSS={InputStyles}
          />
        </AtomWrapper>
      </AtomWrapper>
    </DashWithTitle>
  );
};

export default ADD;
