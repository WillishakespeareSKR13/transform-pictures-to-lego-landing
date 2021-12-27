import { QueryTypeNode } from 'next';
import { FC } from 'react';

const PUBLIC: FC<QueryTypeNode> = ({ children, query }) => {
  query;
  return <>{children}</>;
};

export default PUBLIC;
