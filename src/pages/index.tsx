import { AtomPage } from '@Src/components/@atoms';
import OrganismsConvertImage from '@Src/components/@organisms/OrganismsConvertImage';
import OrganismsLoadImage from '@Src/components/@organisms/OrganismsLoadImage';
import { NextPageFC } from 'next';
import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface IContextProps {
  file: File | undefined;
  setFile: Dispatch<SetStateAction<File | undefined>>;
}

export const ContextFile = createContext({} as IContextProps);

const PageIndex: NextPageFC = () => {
  const [file, setFile] = useState<File>();

  return (
    <ContextFile.Provider
      value={{
        file,
        setFile
      }}
    >
      <AtomPage>
        {file ? <OrganismsConvertImage /> : <OrganismsLoadImage />}
      </AtomPage>
    </ContextFile.Provider>
  );
};

export default PageIndex;
