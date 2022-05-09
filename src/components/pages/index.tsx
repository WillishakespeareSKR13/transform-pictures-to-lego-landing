import { css } from '@emotion/react';
import OrganismsConvertImage from '@Src/components/@organisms/OrganismsConvertImageDashboard';
import OrganismsLoadImage from '@Src/components/@organisms/OrganismsLoadImageDashboard';
import { CloseModal } from '@Src/redux/actions/modal';
import { AtomButton, AtomWrapper } from '@sweetsyui/ui';
import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { useDispatch } from 'react-redux';

interface IContextProps {
  file: File | undefined;
  setFile: Dispatch<SetStateAction<File | undefined>>;
}

export const ContextFile = createContext({} as IContextProps);

const PageIndex = () => {
  const [file, setFile] = useState<File>();

  const dispatch = useDispatch();

  return (
    <AtomWrapper
      customCSS={css`
        width: max-content;
        height: 100%;
        padding: 30px 0px;
        justify-content: center;
        align-items: center;
        background-color: #313139;
      `}
    >
      <ContextFile.Provider
        value={{
          file,
          setFile
        }}
      >
        {file ? <OrganismsConvertImage /> : <OrganismsLoadImage />}
      </ContextFile.Provider>
      <AtomButton
        customCSS={css`
          height: 40px;
          padding: 10px 40px;
          background-color: #f1576c;
        `}
        onClick={() => dispatch(CloseModal())}
      >
        CANCEL
      </AtomButton>
    </AtomWrapper>
  );
};

export default PageIndex;
