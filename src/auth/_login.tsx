import { AtomLoader } from '@sweetsyui/ui';
import { QueryTypeNode } from 'next';
import { useRouter } from 'next/router';
import { FC } from 'react';

const LOGIN: FC<QueryTypeNode> = ({ children, query }) => {
  const { data, loading } = query;
  const router = useRouter();

  if (data) {
    router.push('/dashboard');
  }

  return (
    <>
      {loading || data ? (
        <AtomLoader isLoading colorLoading="white" backgroundColor="#202024" />
      ) : (
        children
      )}
    </>
  );
};

export default LOGIN;
