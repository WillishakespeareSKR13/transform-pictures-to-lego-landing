import { css } from '@emotion/react';
import {
  AtomButton,
  AtomImage,
  AtomLink,
  AtomText,
  AtomWrapper
} from '@sweetsyui/ui';
import React, { FC } from 'react';
import { IStore } from 'graphql';
import { SerializedStyles } from '@emotion/utils';
import { useRouter } from 'next/router';

interface MoleculeCardStoreType extends IStore {
  customCSS?: SerializedStyles;
}

const MoleculeCardStore: FC<MoleculeCardStoreType> = (props) => {
  const {
    id,
    name,
    photo,
    description,
    phone,
    email,
    website,
    city,
    state,
    zip,
    street,
    customCSS
  } = props;
  const router = useRouter();
  return (
    <AtomWrapper
      customCSS={css`
        width: 32%;
        height: 300px;
        background-color: #202026;
        justify-content: space-between;
        border-radius: 8px;
        padding: 15px 20px;
        ${customCSS}
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
          Store: {name}
        </AtomText>
        <AtomImage
          src={`${photo}`}
          alt={`${photo}`}
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
          Description: {description}
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
          Phone: {phone}
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
          Email: {email}
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
            href={`${website}`}
          >
            {website?.replace('https://', '').replaceAll('/', '')}
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
          Address: {city}, {state}, {zip},{street}
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
            router.push(`./store/${id}`);
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
  );
};
export default MoleculeCardStore;
