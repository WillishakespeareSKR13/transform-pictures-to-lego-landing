import { css } from '@emotion/react';
import {
  AtomButton,
  AtomIcon,
  AtomImage,
  AtomInput,
  AtomText,
  AtomWrapper
} from '@sweetsyui/ui';
import { FormikValues } from 'formik';
import React, { FC } from 'react';

interface OrganismsLoadeImageProps {
  formik: FormikValues;
}

const OrganismsLoadImage: FC<OrganismsLoadeImageProps> = (props) => {
  const { formik } = props;
  return (
    <AtomWrapper
      customCSS={css`
        background-color: #f5f5f5;
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
          padding: 15px 30px;
          align-items: center;
          justify-content: center;
          background-color: #fff;
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
            color: #333;
            text-align: center;
          `}
        >
          Attention
        </AtomText>
        <AtomText
          customCSS={css`
            margin-top: 5px;
            font-size: 12px;
            color: #333;
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
          padding: 5px 0px 15px 0px;
          font-size: 24px;
          font-weight: bold;
          color: #333;
        `}
      >
        SELECT ONE IMAGE TO UPLOAD
      </AtomText>
      <AtomInput
        id="imagefile"
        formik={formik}
        placeholderDragDrop={() => (
          <AtomWrapper flexDirection="row">
            <AtomIcon
              color="#ed7002"
              height="20px"
              icon="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/PFS-0001/upload.svg"
            />
            <AtomText margin="0px 5px" color="#ed7002" fontWeight={600}>
              Drag and drop your image here
            </AtomText>
          </AtomWrapper>
        )}
        type="dragdrop"
        customCSS={css`
          display: flex;
          background-color: #eeeeee;
          width: 100%;
          height: max-content;
          align-items: center;
          justify-content: center;
          background-image: url('/images/bg.png');
          div {
            display: flex;
            font-weight: 600;
            align-items: center;
            justify-content: center;
            img {
              max-width: 100%;
              width: max-content;
            }
          }
          label {
            width: 100%;
            height: 100vh;
            max-height: 250px;
            background-color: transparent;
          }
        `}
      />
      <AtomWrapper
        justifyContent="center"
        alignItems="flex-end"
        padding="15px 0px 0px 0px"
      >
        <AtomButton
          backgroundColor="#ed7001"
          onClick={() => {
            formik.validateForm();
            formik.submitForm();
          }}
        >
          NEXT
        </AtomButton>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default OrganismsLoadImage;
