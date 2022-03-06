import { QueryTypeNode } from 'next';
import { FC } from 'react';

const DASHBOARD: FC<QueryTypeNode> = ({ children, query }) => {
  query;

  return <>{children}</>;
};

export default DASHBOARD;
