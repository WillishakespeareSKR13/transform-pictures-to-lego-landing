import { useMutation, useQuery } from '@apollo/client';
import { css } from '@emotion/react';
import DashWithTitle from '@Src/components/layouts/DashWithTitle';
import { AtomButton, AtomWrapper } from '@sweetsyui/ui';
import { IColor } from 'graphql';
import { useRouter } from 'next/router';
import React from 'react';
import { GETTERMSCONDITIONS } from '@Src/apollo/client/query/termsconditions';
import { NEWUPDATETERMSCONDITIONS } from '@Src/apollo/client/mutation/termsconditions';
import { atom, useAtom } from 'jotai';

export type ColorModalType = IColor & {
  openModal: boolean;
};

const TermsAtom = atom('');
const ConditionsAtom = atom('');
type TermsConditionsTypes = {
  terms?: string;
  conditions?: string;
};
const TermsConditionsAtom = atom(
  (get) => ({
    terms: get(TermsAtom),
    conditions: get(ConditionsAtom)
  }),
  (get, set, arg: TermsConditionsTypes) => {
    set(TermsAtom, arg.terms ?? get(TermsAtom));
    set(ConditionsAtom, arg.conditions ?? get(ConditionsAtom));
  }
);

const Colors = () => {
  const router = useRouter();
  const [termsConditions, setTermsConditions] = useAtom(TermsConditionsAtom);

  const { refetch } = useQuery(GETTERMSCONDITIONS, {
    onCompleted: (data) => {
      setTermsConditions(data.getTermsConditions);
    }
  });
  const [createupdateterms, { loading }] = useMutation(
    NEWUPDATETERMSCONDITIONS,
    {
      onCompleted: () => {
        refetch();
      }
    }
  );

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
      title="Terms & Conditions"
    >
      <AtomWrapper flexDirection="row">
        <AtomWrapper
          flexDirection="row"
          width="100%"
          customCSS={css`
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
            height: calc(100vh - 140px);
            overflow-y: scroll;
            gap: 30px;
            background-color: #2e2e35;
          `}
        >
          <AtomWrapper
            customCSS={css`
              width: 100%;
              flex-direction: row;
              gap: 20px;
              textarea {
                width: 100%;
                height: 400px;
                font-size: 14px;
                padding: 15px;
                border: none;
                font-family: 'Montserrat', sans-serif;
                color: #dfdfdf;
                background-color: #202026;
                font-weight: 600;
              }
            `}
          >
            <textarea
              value={termsConditions?.terms}
              onChange={(e) => setTermsConditions({ terms: e.target.value })}
            />
            <textarea
              value={termsConditions?.conditions}
              onChange={(e) =>
                setTermsConditions({ conditions: e.target.value })
              }
            />
          </AtomWrapper>
          <AtomButton
            loading={loading}
            onClick={() => {
              createupdateterms({
                variables: {
                  input: termsConditions
                }
              });
            }}
            customCSS={css`
              width: 100%;
            `}
          >
            Save
          </AtomButton>
        </AtomWrapper>
      </AtomWrapper>
    </DashWithTitle>
  );
};
export default Colors;
