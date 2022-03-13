import { useQuery } from '@apollo/client';
import { css } from '@emotion/react';
import { GETSTORES } from '@Src/apollo/client/query/stores';
import { AtomButton, AtomImage, AtomText, AtomWrapper } from '@sweetsyui/ui';
import { IQueryFilter } from 'graphql';
import { useRouter } from 'next/router';

const STORES = () => {
  const router = useRouter();
  const { data } = useQuery<IQueryFilter<'getStores'>>(GETSTORES);
  return (
    <AtomWrapper customCSS={css``}>
      <AtomText
        customCSS={css`
          font-size: 26px;
          font-weight: bold;
          color: #dfdfdf;
          margin-bottom: 20px;
        `}
      >
        All Stores
      </AtomText>
      <AtomWrapper
        customCSS={css`
          flex-direction: row;
          justify-content: flex-start;
          flex-wrap: wrap;
          gap: 1rem;
        `}
      >
        {data?.getStores?.map((store) => (
          <AtomWrapper
            key={store?.id}
            customCSS={css`
              width: 300px;
              height: 300px;
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
                Store: {store?.name}
              </AtomText>
              <AtomImage
                src={`${store?.photo}`}
                alt={`${store?.photo}`}
                customCSS={css`
                  width: 90px;
                  height: 90px;
                  margin: 10px 0px;
                  background-color: #1a1a1f;
                `}
              />
            </AtomWrapper>
            <AtomWrapper>
              <AtomText
                customCSS={css`
                  color: #dfdfdf;
                  font-weight: 600;
                  font-size: 12px;
                `}
              >
                Description: {store?.description}
              </AtomText>
              <AtomText
                customCSS={css`
                  color: #dfdfdf;
                  font-weight: 600;
                  font-size: 12px;
                `}
              >
                Phone: {store?.phone}
              </AtomText>
              <AtomText
                customCSS={css`
                  color: #dfdfdf;
                  font-weight: 600;
                  font-size: 12px;
                `}
              >
                Email: {store?.email}
              </AtomText>
              <AtomText
                customCSS={css`
                  color: #dfdfdf;
                  font-weight: 600;
                  font-size: 12px;
                `}
              >
                Website: {store?.website}
              </AtomText>
              <AtomText
                customCSS={css`
                  color: #dfdfdf;
                  font-weight: 600;
                  font-size: 12px;
                `}
              >
                Address: {store?.city}, {store?.state}, {store?.zip},
                {store?.street}
              </AtomText>
              <AtomButton
                customCSS={css`
                  width: 100%;
                  margin-top: 10px;
                  background-color: #2e2e35;
                  :hover {
                    background-color: #1a1a1f;
                  }
                  transition: background-color 0.3s ease;
                `}
                onClick={() => {
                  router.push(`./store/${store?.id}`);
                }}
              >
                <AtomText
                  customCSS={css`
                    color: #dfdfdf;
                    font-weight: 600;
                    font-size: 12px;
                  `}
                >
                  Go to Store
                </AtomText>
              </AtomButton>
            </AtomWrapper>
          </AtomWrapper>
        ))}
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default STORES;
