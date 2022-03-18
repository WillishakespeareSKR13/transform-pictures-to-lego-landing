import { css } from '@emotion/react';
import { AtomIcon, AtomText, AtomWrapper } from '@sweetsyui/ui';
import { useRouter } from 'next/router';
import React, { FC, ReactNode } from 'react';
import AtomButton from '../@atoms/AtomButton';
import type { UrlObject } from 'url';

type Props = {
  title?: string;
  url?: UrlObject | string;
  button?: ReactNode;
  onClick?: () => void;
};

const DashWithTitle: FC<Props> = (props) => {
  const { children, title, url, button, onClick } = props;
  const router = useRouter();
  return (
    <AtomWrapper>
      <AtomWrapper
        customCSS={css`
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          background-color: #202026;
          margin-bottom: 15px;
          border-radius: 5px;
          padding: 10px 30px;
        `}
      >
        <AtomWrapper flexDirection="row" width="max-content">
          <AtomButton
            customCSS={css`
              margin-right: 20px;
              width: 30px;
              height: 30px;
              overflow: hidden;
              border-radius: 50%;
              padding: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: #2e2e35;
              transition: background-color 0.3s ease;
            `}
            onClick={
              onClick
                ? onClick
                : () => {
                    router.push(url ?? '/dashboard');
                  }
            }
          >
            <AtomIcon
              icon="https://upload.wikimedia.org/wikipedia/commons/f/f9/Antu_arrow-right.svg"
              customCSS={css`
                width: 60%;
                transform: rotate(180deg);
                svg {
                  path {
                    fill: white !important;
                  }
                }
              `}
            />
          </AtomButton>
          <AtomText
            customCSS={css`
              font-size: 20px;
              font-weight: bold;
              color: #dfdfdf;
            `}
          >
            {title ?? 'Pixit'}
          </AtomText>
        </AtomWrapper>
        {button}
      </AtomWrapper>
      {children}
    </AtomWrapper>
  );
};

export default DashWithTitle;
