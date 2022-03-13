import { useQuery } from '@apollo/client';
import { GETSTORES } from '@Src/apollo/client/query/stores';
import { AtomWrapper } from '@sweetsyui/ui';
import React from 'react';

const ADMIN = () => {
  const { data } = useQuery(GETSTORES);
  return (
    <AtomWrapper>
      {data?.getStores.map((store) => (
        <div key={store.id}>{store.name}</div>
      ))}
    </AtomWrapper>
  );
};

export default ADMIN;
