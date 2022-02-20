import { AtomContainer, AtomLink, AtomWrapper, AtomImage } from '@sweetsyui/ui';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

const DefaultHeader = () => {
  const [downHeader, setdownHeader] = useState(true);
  useEffect(() => {
    const updateSize = () => {
      const scroll = window.scrollY;
      setdownHeader(scroll > 10);
    };
    window.addEventListener(`scroll`, updateSize, true);
    updateSize();
    return () => window.removeEventListener(`scroll`, updateSize, true);
  });

  return (
    <AtomContainer
      height="100px"
      position="fixed"
      as="nav"
      backgroundColor={downHeader ? '#202024' : 'transparent'}
      padding="0px 90px"
      customCSS={css`
        top: 0;
        z-index: 100;
        @media only screen and (max-width: 980px) {
          padding: 0px 30px;
        }
        ${downHeader &&
        css`
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
        `}
        transition: all 0.2s ease;
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
          <AtomImage alt="LOGO" src="/images/logo.png" height="60%" />
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
