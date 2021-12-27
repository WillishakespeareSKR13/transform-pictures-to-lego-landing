import { useQuery } from '@apollo/client';
import { IQuery, IQueryFilter } from 'graphql';
import { DocumentNode } from 'graphql/language/ast';

const useQueryFilter = (QUERY: DocumentNode, FILTER: keyof IQuery) => {
  const USEQUERY = useQuery<IQueryFilter<typeof FILTER>>(QUERY);
  return USEQUERY;
};

export default useQueryFilter;
