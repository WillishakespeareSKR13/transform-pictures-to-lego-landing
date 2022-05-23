/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

const queryUpload = gql`
  query UploadFileUrl($orgCode: String!, $path: String!, $fileName: String!) {
    uploadFileUrl(orgCode: $orgCode, path: $path, fileName: $fileName) {
      url
      fileName
    }
  }
`;

type UploadFile = {
  name: string;
  orgcode: string;
};
const removeWhiteSpaces = (name: string) =>
  name?.replace(/\s+/g, '')?.replace('(', '')?.replace(')', '');

const uploadImage = async (image: File, options?: UploadFile) => {
  const endpoint = 'https://file-service.staging.ixuapis.com/graphql/';
  const client = new ApolloClient({
    uri: endpoint,
    cache: new InMemoryCache()
  });
  const uploadFile = (url: string, file: File) =>
    fetch(url, {
      method: 'PUT',
      body: file ?? new Blob(),
      headers: {
        'Content-Type': 'application/octet-stream'
      },
      mode: 'cors'
    }).catch((e) => console.error(e));

  type Props = {
    uploadFileUrl?: {
      fileName?: string;
      url: string;
    };
  };

  const result = await client
    .query<Props>({
      query: queryUpload,
      variables: {
        orgCode: removeWhiteSpaces(options?.orgcode ?? ''),
        path: removeWhiteSpaces(options?.name ?? ''),
        fileName: removeWhiteSpaces(options?.name ?? '')
      }
    })
    .then(async (res) => {
      if (res?.data?.uploadFileUrl?.url) {
        await uploadFile(res?.data?.uploadFileUrl?.url, image ?? ({} as File));
        return res?.data?.uploadFileUrl?.fileName;
      }
      return image ?? ({} as File);
    });
  return result as any;
};
export default uploadImage;
