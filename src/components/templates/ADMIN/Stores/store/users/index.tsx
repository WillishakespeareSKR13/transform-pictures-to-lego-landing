import { useQuery } from '@apollo/client';
import { css } from '@emotion/react';
import { GETSTOREBYID } from '@Src/apollo/client/query/stores';
import { GETUSERS } from '@Src/apollo/client/query/user';
import DashWithTitle from '@Src/components/layouts/DashWithTitle';
import { InputLightStyles, TableStyles } from '@Src/styles';
import {
  AtomButton,
  AtomInput,
  AtomLoader,
  AtomTable,
  AtomText,
  AtomWrapper
} from '@sweetsyui/ui';
import { IQueryFilter, IUser } from 'graphql';
import { useRouter } from 'next/router';

const VIEW = () => {
  const router = useRouter();
  const { data, loading } = useQuery<IQueryFilter<'getStoreById'>>(
    GETSTOREBYID,
    {
      variables: {
        id: router?.query?.id?.[router.query.id.length - 2]
      }
    }
  );

  const { data: dataUsers } = useQuery<IQueryFilter<'getUsers'>>(GETUSERS);

  if (loading)
    return (
      <AtomLoader isLoading backgroundColor="#2e2e35" colorLoading="white" />
    );

  return (
    <DashWithTitle
      title={`Users: ${data?.getStoreById?.name}`}
      url={{
        pathname: router.pathname,
        query: {
          ...router.query,
          id: [
            ...(Array.isArray(router.query.id) ? router.query.id : []).filter(
              (_, idx) => idx !== (router?.query?.id?.length ?? 0) - 1
            )
          ]
        }
      }}
    >
      <AtomWrapper
        customCSS={css`
          flex-direction: row;
          justify-content: flex-start;
          gap: 20px;
        `}
      >
        <AtomWrapper
          customCSS={css`
            width: 60%;
          `}
        >
          <AtomText
            customCSS={css`
              font-size: 20px;
              font-weight: bold;
              color: #dfdfdf;
              margin-bottom: 10px;
            `}
          >
            Users of store {data?.getStoreById?.name}
          </AtomText>
          <AtomTable
            customCSS={TableStyles}
            data={dataUsers?.getUsers as IUser[]}
            columns={[
              {
                title: 'Name',
                view: (item) => <>{`${item?.name}`}</>
              },
              {
                title: 'Lastname',
                view: (item) => <>{`${item?.lastname}`}</>
              },
              {
                title: 'Email',
                view: (item) => <>{`${item?.email}`}</>
              },
              {
                title: 'Role',
                view: (item) => <>{`${item?.role?.name}`}</>
              }
            ]}
          />
        </AtomWrapper>
        <AtomWrapper
          customCSS={css`
            width: 40%;
          `}
        >
          <AtomWrapper
            key={data?.getStoreById?.id}
            customCSS={css`
              width: 100%;
              height: max-content;
              background-color: #202026;
              justify-content: space-between;
              border-radius: 8px;
              padding: 15px 20px;
            `}
          >
            <AtomWrapper>
              <AtomText
                customCSS={css`
                  color: #dfdfdf;
                  font-size: 16px;
                  font-weight: 600;
                `}
              >
                Add user
              </AtomText>
            </AtomWrapper>
            <AtomWrapper
              customCSS={css`
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin-top: 10px;
                gap: 20px;
                flex-wrap: wrap;
              `}
            >
              <AtomInput labelWidth="47%" customCSS={InputLightStyles} />
              <AtomInput labelWidth="47%" customCSS={InputLightStyles} />
              <AtomInput labelWidth="47%" customCSS={InputLightStyles} />
              <AtomInput labelWidth="47%" customCSS={InputLightStyles} />
              <AtomButton
                customCSS={css`
                  width: 100%;
                  padding: 8px 10px;
                  background-color: #f1576c;
                `}
              >
                Add User
              </AtomButton>
            </AtomWrapper>
          </AtomWrapper>
        </AtomWrapper>
      </AtomWrapper>
    </DashWithTitle>
  );
};

export default VIEW;
