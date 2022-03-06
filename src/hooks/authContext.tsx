import { FC } from 'react';
import { useQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { SetUser, Logout } from '@Redux/actions/user';
import Auth from '@Auth/index';
import { QueryType } from 'next';
import { USER } from '@Src/apollo/client/query/user';

type AuthProps = {
  type?: keyof typeof Auth;
  role?: string | string[];
};

const AuthContext: FC<AuthProps> = (props) => {
  const dispatch = useDispatch();
  const { children, type, role } = props;
  const query = useQuery(USER, {
    onCompleted: ({ me }) => dispatch(SetUser(me)),
    onError: () => dispatch(Logout())
  });

  const QueryContext = Auth[type || 'DEFAULT'];
  return (
    <QueryContext query={query as QueryType} role={role}>
      {children}
    </QueryContext>
  );
};

export default AuthContext;
