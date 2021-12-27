import { AtomLoader } from '@sweetsyui/ui';
import { QueryTypeNode } from 'next';
import { useRouter } from 'next/router';
import { FC } from 'react';

const LOGIN: FC<QueryTypeNode> = ({ children, query }) => {
  const { data, loading } = query;
  const router = useRouter();
  if (data) {
    const { level } = data.me.access;
    switch (level) {
      case 'OWNER':
        router.push('/dashboard');
        break;
      case 'USER':
        router.push('/');
        break;
      default:
        router.push('/');
        break;
    }
  }
  return (
    <>
      {loading || data ? (
        <AtomLoader
          isLoading={loading}
          colorLoading="#000000"
          backgroundColor="#00000010"
        />
      ) : (
        children
      )}
    </>
  );
};

export default LOGIN;
