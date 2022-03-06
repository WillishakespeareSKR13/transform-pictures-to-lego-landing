import { QueryTypeNode } from 'next';
import { FC } from 'react';

const DASHBOARD: FC<QueryTypeNode> = ({ children }) => {
  return <>{children}</>;
};

export default DASHBOARD;
