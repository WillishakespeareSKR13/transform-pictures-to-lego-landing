import { useQuery } from '@apollo/client';
import { css } from '@emotion/react';
import { GETSTORES } from '@Src/apollo/client/query/stores';
import {
  AtomButton,
  AtomIcon,
  AtomImage,
  AtomLink,
  AtomLoader,
  AtomText,
  AtomWrapper
} from '@sweetsyui/ui';
import { IQueryFilter } from 'graphql';
import { useRouter } from 'next/router';

const STORES = () => {
  const router = useRouter();
  const { data, loading } = useQuery<IQueryFilter<'getStores'>>(GETSTORES);
  return (
    <AtomWrapper>
      <AtomWrapper
        customCSS={css`
          flex-direction: row;
          justify-content: space-between;
          background-color: #202026;
          margin-bottom: 15px;
          border-radius: 5px;
          padding: 10px 30px;
        `}
      >
        <AtomText
          customCSS={css`
            font-size: 22px;
            font-weight: bold;
            color: #dfdfdf;
          `}
        >
          All Stores
        </AtomText>
        <AtomWrapper
          width="max-content"
          flexDirection="row"
          customCSS={css`
            gap: 10px;
          `}
        >
          <AtomButton
            backgroundColor="#f1576c"
            onClick={() => router.push('/dashboard/termsconditions')}
          >
            Terms & Conditions
          </AtomButton>
          <AtomButton
            backgroundColor="#f1576c"
            onClick={() => router.push('/dashboard/rooms')}
          >
            Rooms
          </AtomButton>
          <AtomButton
            backgroundColor="#f1576c"
            onClick={() => router.push('/dashboard/colors')}
          >
            Colors
          </AtomButton>
        </AtomWrapper>
      </AtomWrapper>
      <AtomWrapper
        customCSS={css`
          flex-direction: row;
          justify-content: flex-start;
          flex-wrap: wrap;
          gap: 1rem;
        `}
      >
        {loading ? (
          <AtomWrapper
            customCSS={css`
              width: 32.3%;
              height: 300px;
              background-color: #2e2e35;
              justify-content: space-between;
              border-radius: 8px;
            `}
          >
            <AtomLoader
              isLoading
              type="small"
              width="100%"
              height="100%"
              colorLoading="white"
            />
          </AtomWrapper>
        ) : (
          <>
            {data?.getStores?.map((store) => (
              <AtomWrapper
                key={store?.id}
                customCSS={css`
                  flex-basis: 350px;
                  min-width: 350px;
                  flex-grow: 1;
                  height: 300px;
                  position: relative;
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
                      text-overflow: ellipsis;
                      overflow: hidden;
                      white-space: nowrap;
                    `}
                  >
                    Description: {store?.description}
                  </AtomText>
                  <AtomText
                    customCSS={css`
                      color: #dfdfdf;
                      font-weight: 600;
                      font-size: 12px;
                      text-overflow: ellipsis;
                      overflow: hidden;
                      white-space: nowrap;
                    `}
                  >
                    Phone: {store?.phone}
                  </AtomText>
                  <AtomText
                    customCSS={css`
                      color: #dfdfdf;
                      font-weight: 600;
                      font-size: 12px;
                      text-overflow: ellipsis;
                      overflow: hidden;
                      white-space: nowrap;
                    `}
                  >
                    Email: {store?.email}
                  </AtomText>
                  <AtomText
                    customCSS={css`
                      color: #dfdfdf;
                      font-weight: 600;
                      font-size: 12px;
                      text-overflow: ellipsis;
                      overflow: hidden;
                      white-space: nowrap;
                    `}
                  >
                    Website:
                    <AtomLink
                      customCSS={css`
                        color: #f1576c;
                        font-weight: 500;
                        margin-left: 5px;
                        font-size: 12px;
                      `}
                      href={`${store?.website}`}
                    >
                      {store?.website
                        ?.replace('https://', '')
                        .replaceAll('/', '')}
                    </AtomLink>
                  </AtomText>
                  <AtomText
                    customCSS={css`
                      color: #dfdfdf;
                      font-weight: 600;
                      font-size: 12px;
                      text-overflow: ellipsis;
                      overflow: hidden;
                      white-space: nowrap;
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
                <AtomButton
                  onClick={() => {
                    router.push(`./store/edit/${store?.id}`);
                  }}
                  customCSS={css`
                    right: 0;
                    top: 0;
                    margin: 15px 20px;
                    position: absolute;
                    padding: 10px;
                    border-radius: 50%;
                    background-color: #2e2e35;
                    cursor: pointer;
                    :hover {
                      background-color: #1a1a1f;
                      svg {
                        g {
                          g {
                            path {
                              fill: #2e2e35 !important;
                            }
                          }
                        }
                      }
                    }
                    transition: background-color 0.3s ease;
                  `}
                >
                  <AtomIcon
                    height="22px"
                    width="22px"
                    color="#202026"
                    icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/LGO-0001/assets/settings-gear.svg"
                  />
                </AtomButton>
              </AtomWrapper>
            ))}
          </>
        )}

        <AtomWrapper
          customCSS={css`
            flex-basis: 350px;
            min-width: 350px;
            flex-grow: 1;
            height: 300px;
            background-color: #202026;
            justify-content: space-between;
            border-radius: 8px;
            padding: 15px 20px;
          `}
        >
          <AtomButton
            customCSS={css`
              width: 100%;
              height: 100%;
              margin-top: 10px;
              background-color: #2e2e35;
              :hover {
                background-color: #1a1a1f;
              }
              transition: background-color 0.3s ease;
            `}
            onClick={() => {
              router.push(`./store/add`);
            }}
          >
            <AtomText
              customCSS={css`
                color: #dfdfdf;
                font-weight: 600;
                font-size: 18px;
              `}
            >
              Add Store
            </AtomText>
          </AtomButton>
        </AtomWrapper>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default STORES;
