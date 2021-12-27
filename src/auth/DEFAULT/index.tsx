import { AtomLoader } from '@sweetsyui/ui';
import { QueryTypeNode } from 'next';
import { useRouter } from 'next/router';
import { FC } from 'react';

const isRole = (role: string | string[], user: string) =>
  typeof role === 'string' ? role === user : role.includes(user);

const DEFAULT: FC<QueryTypeNode> = ({ children, query, role }) => {
  const { data, error, loading } = query;
  const router = useRouter();

  if (role && data?.me?.access?.level) {
    if (!isRole(role, `${data?.me?.access?.level}`)) {
      router.push('/');
    }
  }
  if (error) {
    router.push('/login');
  }
  return (
    <>
      {loading ||
      error ||
      (role && !isRole(role, `${data?.me?.access?.level}`)) ? (
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

export default DEFAULT;
