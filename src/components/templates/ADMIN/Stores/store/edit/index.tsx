import { useMutation, useQuery } from '@apollo/client';
import { css } from '@emotion/react';
import { UPDATESTORE, DELETESTORE } from '@Src/apollo/client/mutation/store';
import { GETSTOREBYID } from '@Src/apollo/client/query/stores';
import { GETSTORETYPES } from '@Src/apollo/client/query/storeType';
import DashWithTitle from '@Src/components/layouts/DashWithTitle';
import { InputDragAndDropStyles, InputStyles } from '@Src/styles';
import uploadImage from '@Src/utils/uploadImage';
import {
  AtomButton,
  AtomIcon,
  AtomInput,
  AtomLoader,
  AtomModal,
  AtomText,
  AtomWrapper
} from '@sweetsyui/ui';
import { useFormik } from 'formik';
import { IQueryFilter } from 'graphql';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';

const ADD = () => {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const { data: dataById } = useQuery(GETSTOREBYID, {
    onCompleted: () => setLoading(false),
    variables: {
      id: router?.query?.id?.[router.query.id.length - 1]
    }
  });

  const { data } = useQuery<IQueryFilter<'getStoreTypes'>>(GETSTORETYPES);
  const [EXEUPDATESTORE] = useMutation(UPDATESTORE, {
    onCompleted: () => {
      location.reload();
    }
  });
  const [EXEDELETESTORE] = useMutation(DELETESTORE, {
    onCompleted: () => {
      location.href = '/dashboard';
    }
  });

  const formik = useFormik({
    initialValues: {
      name: dataById?.getStoreById?.name || '',
      numberoffice: dataById?.getStoreById?.numberoffice || '',
      numberstore: dataById?.getStoreById?.numberstore || '',
      description: dataById?.getStoreById?.description || '',
      phone: dataById?.getStoreById?.phone || '',
      email: dataById?.getStoreById?.email || '',
      website: dataById?.getStoreById?.website || '',
      photo: dataById?.getStoreById?.photo || ({} as File | string),
      cash: dataById?.getStoreById?.cash || '',
      currency: dataById?.getStoreById?.currency || 'DEFAULT',
      street: dataById?.getStoreById?.street || '',
      city: dataById?.getStoreById?.city || '',
      state: dataById?.getStoreById?.state || '',
      zip: dataById?.getStoreById?.zip || '',
      storeType: dataById?.getStoreById?.storeType?.id || 'DEFAULT'
    },
    enableReinitialize: true,
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
      photo: Yup.mixed().required('Required'),
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
      EXEUPDATESTORE({
        variables: {
          id: router?.query?.id?.[router.query.id.length - 1],
          input: {
            name: values.name,
            numberoffice: values.numberoffice,
            numberstore: values.numberstore,
            description: values.description,
            phone: values.phone,
            email: values.email,
            website: values.website,
            cash: values.cash,
            currency: values.currency,
            street: values.street,
            city: values.city,
            state: values.state,
            zip: values.zip,
            storeType: values.storeType,
            photo:
              typeof values.photo === 'string'
                ? values.photo
                : await uploadImage(values.photo, {
                    name: 'store',
                    orgcode: 'LGO-0001'
                  })
          }
        }
      });
    }
  });

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setModal?.(false);
      }
    };

    document.addEventListener(`mousedown`, handleClickOutside, true);
    return () => {
      document.removeEventListener(`mousedown`, handleClickOutside, true);
    };
  }, [ref]);

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
            imagePreview={dataById?.getStoreById?.photo}
            placeholderDragDrop={() => (
              <AtomWrapper
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
              >
                <AtomIcon
                  height="18px"
                  width="18px"
                  color="#e8e2df"
                  icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/PFS-0001/upload.svg"
                />
                <AtomText color="#e8e2df" margin="0px 0px 0px 10px">
                  Drag and drop your photo here
                </AtomText>
              </AtomWrapper>
            )}
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
        <AtomWrapper>
          <AtomButton backgroundColor="#f1576c" onClick={() => setModal(true)}>
            Delete store
          </AtomButton>
        </AtomWrapper>
      </AtomWrapper>
      <AtomModal
        isOpen={modal}
        componentProps={{
          wrapperProps: {
            refObject: ref,
            backgroundColor: '#202026'
          }
        }}
        component={
          <AtomWrapper
            maxWidth="380px"
            alignItems="center"
            justifyContent="center"
          >
            <AtomLoader
              isLoading={false}
              backgroundColor="transparent"
              colorLoading="#f1576c"
            />
            <AtomIcon
              width="120px"
              height="120px"
              color={'#f1576c'}
              icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/JRO-0001/icons/Icon%20metro-warning.svg"
              customCSS={css`
                margin: 10px 0px 30px 0px;
              `}
            />
            <AtomText
              customCSS={css`
                text-align: center;
                color: #dbdbdb;
                font-weight: bold;
                font-size: 22px;
                line-height: 110%;
              `}
            >
              {'Do you want to remove the store?'}
            </AtomText>
            <AtomText
              margin="20px 0px"
              fontSize="18px"
              fontWeight="bold"
              color="#7e7b7b"
              align="center"
            >
              {dataById?.getStoreById?.name}
            </AtomText>
            <AtomWrapper width="100%">
              <AtomButton
                onClick={() => {
                  setModal(false);
                }}
                customCSS={css`
                  width: 100%;
                  background-color: transparent;
                  border: 1px solid #dbdbdb;
                  text-align: center;
                  color: #dbdbdb;
                  font-weight: 500;
                  font-size: 14px;
                  margin: 10px 0px;
                `}
              >
                CANCELAR
              </AtomButton>
              <AtomButton
                onClick={() => {
                  setLoading(true);
                  EXEDELETESTORE({
                    variables: {
                      id: dataById?.getStoreById?.id
                    }
                  });
                }}
                customCSS={css`
                  width: 100%;
                  background-color: ${'#f1576c'};
                  border: 1px solid ${'#f1576c'};
                  text-align: center;
                  color: white;
                  font-weight: 600;
                  font-size: 14px;
                  margin: 10px 0px;
                `}
              >
                {'BORRAR'}
              </AtomButton>
            </AtomWrapper>
          </AtomWrapper>
        }
      />
    </DashWithTitle>
  );
};

export default ADD;
