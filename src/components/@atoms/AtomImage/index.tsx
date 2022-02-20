import { FC } from 'react';
import NextImage from 'next/image';
import {
  AtomImageImgStyled,
  AtomImageStyled,
  AtomImageWrapperStyled,
} from './style';
import { AtomImageTypes, AtomNextImageTypes } from './types';

interface AtomImageProps extends AtomNextImageTypes, AtomImageTypes {
  isNextImage?: boolean;
}

const Image: FC<AtomImageProps> = (props) => {
  const { src, alt, isNextImage } = props;
  return (
    <AtomImageStyled {...{ ...props, src: undefined }}>
      {isNextImage ? (
        <AtomImageWrapperStyled>
          <NextImage
            src={src}
            alt={`${alt}image`}
            layout="fill"
            placeholder="blur"
            blurDataURL={src}
          />
        </AtomImageWrapperStyled>
      ) : (
        <AtomImageImgStyled src={src} alt={alt} />
      )}
    </AtomImageStyled>
  );
};

export default Image;
