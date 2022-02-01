/* eslint-disable @typescript-eslint/no-explicit-any */
import { AtomContainer, AtomLink, AtomWrapper, AtomImage } from '@sweetsyui/ui';
import { css } from '@emotion/react';

const DefaultHeader = () => {
  return (
    <AtomContainer
      height="90px"
      position="fixed"
      as="nav"
      shadow
      padding="0px 90px"
      customCSS={css`
        top: 0;
        z-index: 100;
        @media only screen and (max-width: 980px) {
          padding: 0px 30px;
        }
      `}
    >
      <AtomWrapper
        height="100%"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        maxWidth="1440px"
        flexWrap="wrap"
      >
        <AtomLink
          href="/"
          customCSS={css`
            display: flex;
            align-items: center;
            justify-content: center;
            width: max-content;
            height: 100%;
            svg {
              width: 150px;
              height: 50px;
            }
          `}
        >
          <AtomImage alt="LOGO" src="/images/logo.jpg" height="80%" />
        </AtomLink>
        <AtomWrapper
          width="300px"
          flexDirection="row"
          alignItems="center"
          customCSS={css`
            @media only screen and (max-width: 1200px) {
              display: none;
            }
          `}
        ></AtomWrapper>
      </AtomWrapper>
    </AtomContainer>
  );
};

export default DefaultHeader;
