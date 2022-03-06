import { css } from '@emotion/react';
import { AtomIcon, AtomImage, AtomText, AtomWrapper } from '@sweetsyui/ui';
import AtomInput from '@Atoms/AtomInput';
import { FC, useContext } from 'react';
import { ContextFile } from '@Src/pages';

const OrganismsLoadImage: FC = () => {
  const { setFile } = useContext(ContextFile);
  return (
    <AtomWrapper
      customCSS={css`
        background-color: #313139;
        border-radius: 10px;
        padding: 30px;
        width: 70%;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        align-items: center;
        justify-content: center;
        @media (max-width: 820px) {
          width: 100%;
        }
      `}
    >
      <AtomWrapper
        customCSS={css`
          left: 20px;
          bottom: 20px;
          z-index: 100;
          border-radius: 10px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          position: absolute;
          width: 400px;
          padding: 20px 30px;
          align-items: center;
          justify-content: center;
          background-color: #313139;
          @media (max-width: 820px) {
            position: relative;
            width: 100%;
            left: 0;
            bottom: 0;
            margin: 0px 0px 40px 0px;
          }
        `}
      >
        <AtomImage
          alt="heart"
          src="/images/attention-heart.png"
          height="40px"
          width="max-content"
        />
        <AtomText
          customCSS={css`
            margin-top: 10px;
            font-size: 12px;
            font-weight: bold;
            color: #dfdfdf;
            text-align: center;
          `}
        >
          Attention
        </AtomText>
        <AtomText
          customCSS={css`
            margin-top: 5px;
            font-size: 12px;
            color: #dfdfdf;
            text-align: center;
          `}
        >
          Please select high resolution image. If you do not have one, you can
          crop and edit your image and zoom in on the face area, in the next
          stage.
        </AtomText>
      </AtomWrapper>
      <AtomText
        align="center"
        customCSS={css`
          padding: 0px 0px 30px 0px;
          font-size: 20px;
          font-weight: bold;
          color: #dfdfdf;
          font-size: 22px;
        `}
      >
        SELECT ONE IMAGE TO UPLOAD
      </AtomText>
      <AtomInput
        id="imagefile"
        onChangeDrop={(e) => setFile(e)}
        placeholderDragDrop={() => (
          <AtomWrapper flexDirection="row">
            <AtomIcon
              color="#dfdfdf"
              height="20px"
              icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/PFS-0001/upload.svg"
            />
            <AtomText
              margin="0px 10px"
              color="#dfdfdf"
              fontWeight={600}
              fontSize="16px"
            >
              Drag and drop your image here
            </AtomText>
          </AtomWrapper>
        )}
        type="dragdrop"
        customCSS={css`
          display: flex;
          background-color: #202024;
          width: 100%;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          * {
            cursor: pointer;
          }
          span {
            display: none;
          }
          div {
            display: flex;
            font-weight: 600;
            align-items: center;
            justify-content: center;
            span {
              display: flex;
            }
            img {
              max-width: 100%;
              width: max-content;
            }
          }
          label {
            width: 100%;
            height: 100vh;
            max-height: 300px;
            background-color: transparent;
          }
        `}
      />
    </AtomWrapper>
  );
};

export default OrganismsLoadImage;
