import {
  ApolloQueryResult,
  OperationVariables,
  useMutation,
  useQuery
} from '@apollo/client';
import { css } from '@emotion/react';
import {
  DELETESTORETYPE,
  NEWSTORETYPE,
  UPDATESTORETYPE
} from '@Src/apollo/client/mutation/storeType';
import { GETSTORETYPES } from '@Src/apollo/client/query/storeType';
import DashWithTitle from '@Src/components/layouts/DashWithTitle';
import { InputLightStyles, InputStyles, TableStyles } from '@Src/styles';
import {
  AtomButton,
  AtomInput,
  AtomLoader,
  AtomTable,
  AtomText,
  AtomWrapper
} from '@sweetsyui/ui';
import { useFormik } from 'formik';
import { IQueryFilter, IStoreType } from 'graphql';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import * as Yup from 'yup';

const ADD = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required')
    }),
    onSubmit: (values) => {
      EXENEWSTORETYPE({
        variables: {
          input: {
            name: values.name
          }
        }
      }).then(() => {
        refetch();
      });
    }
  });

  const { data, refetch } =
    useQuery<IQueryFilter<'getStoreTypes'>>(GETSTORETYPES);
  const [EXENEWSTORETYPE] = useMutation(NEWSTORETYPE);

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
      title="Create new store type"
    >
      <AtomWrapper>
        <AtomWrapper
          customCSS={css`
            flex-direction: row;
            gap: 30px;
          `}
        >
          <AtomTable
            customCSS={TableStyles}
            data={data?.getStoreTypes as IStoreType[]}
            columns={[
              {
                width: '100%',
                title: 'ID',
                view: (item) => <>{`${item?.id}`}</>
              },
              {
                title: 'Name',
                width: 'max-content',
                view: (item) => (
                  <NameButtons
                    id={`${item?.id}`}
                    name={`${item?.name}`}
                    refetch={refetch}
                  />
                )
              }
            ]}
          />
          <AtomWrapper
            customCSS={css`
              width: calc(400px);
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: space-between;
              align-items: center;
            `}
          >
            <AtomInput
              id="name"
              type="text"
              label="Create new store type"
              labelFontSize="14px"
              labelWidth="60%"
              formik={formik}
              customCSS={InputStyles}
            />
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
              Save
            </AtomButton>
          </AtomWrapper>
        </AtomWrapper>
      </AtomWrapper>
    </DashWithTitle>
  );
};

export default ADD;

type IProps = {
  id: string;
  name: string;
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<IQueryFilter<'getStoreTypes'>>>;
};

const NameButtons: FC<IProps> = ({ id, name, refetch }) => {
  const [edit, setEdit] = useState(false);
  const [del, setDel] = useState(false);
  const [input, setInput] = useState(name);
  const [loading, setLoading] = useState(false);

  const [EXEDELSTORETYPE] = useMutation(DELETESTORETYPE);

  const [EXEUPDATESTORETYPE] = useMutation(UPDATESTORETYPE);

  return (
    <>
      {edit ? (
        <AtomWrapper
          customCSS={css`
            flex-direction: row;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            gap: 30px;
          `}
        >
          <AtomInput
            width="150px"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            customCSS={InputLightStyles}
          />
          <AtomWrapper
            customCSS={css`
              width: max-content;
              flex-direction: row;
              gap: 15px;
            `}
          >
            <AtomButton
              customCSS={css`
                font-size: 10px;
                padding: 8px 15px;
                background-color: #2e2e35;
              `}
              onClick={() => setEdit(false)}
            >
              Cancel
            </AtomButton>
            <AtomButton
              customCSS={css`
                font-size: 10px;
                padding: 8px 15px;
                background-color: #1e8746;
              `}
              onClick={() => {
                setLoading(true);
                EXEUPDATESTORETYPE({
                  variables: {
                    id,
                    input: {
                      name: input
                    }
                  }
                }).then(() => {
                  refetch();
                  setEdit(false);
                  setLoading(false);
                });
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
                'Save'
              )}
            </AtomButton>
          </AtomWrapper>
        </AtomWrapper>
      ) : (
        <AtomWrapper
          customCSS={css`
            flex-direction: row;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            gap: 30px;
            position: relative;
          `}
        >
          {name}
          <AtomWrapper
            customCSS={css`
              width: max-content;
              flex-direction: row;
              gap: 15px;
            `}
          >
            <AtomButton
              customCSS={css`
                font-size: 10px;
                padding: 8px 15px;
                background-color: #3271a8;
              `}
              onClick={() => setEdit(true)}
            >
              Edit
            </AtomButton>
            <AtomButton
              customCSS={css`
                font-size: 10px;
                padding: 8px 15px;
                background-color: #f1576c;
              `}
              onClick={() => setDel(true)}
            >
              Delete
            </AtomButton>
          </AtomWrapper>
          {del && (
            <AtomWrapper
              customCSS={css`
                background-color: #1a1a1f;
                bottom: 120%;
                left: 50%;
                transform: translateX(-50%);
                position: absolute;
                width: 300px;
                max-width: max-content;
                padding: 30px 30px;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
              `}
            >
              <AtomText
                customCSS={css`
                  color: #dfdfdf;
                  text-align: center;
                  font-weight: bold;
                  margin-bottom: 10px;
                `}
              >
                Are you sure you want to delete this store type?
              </AtomText>
              <AtomWrapper
                customCSS={css`
                  flex-direction: row;
                  width: 100%;
                  justify-content: space-between;
                `}
              >
                <AtomButton
                  customCSS={css`
                    font-size: 10px;
                    padding: 8px 15px;
                    background-color: #2e2e35;
                  `}
                  onClick={() => setDel(false)}
                >
                  Cancel
                </AtomButton>
                <AtomButton
                  customCSS={css`
                    font-size: 10px;
                    padding: 8px 15px;
                    background-color: #f1576c;
                  `}
                  onClick={() => {
                    setLoading(true);
                    EXEDELSTORETYPE({
                      variables: {
                        id
                      }
                    }).then(() => {
                      refetch();
                      setDel(false);
                      setLoading(false);
                    });
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
                    'Delete'
                  )}
                </AtomButton>
              </AtomWrapper>
            </AtomWrapper>
          )}
        </AtomWrapper>
      )}
    </>
  );
};
