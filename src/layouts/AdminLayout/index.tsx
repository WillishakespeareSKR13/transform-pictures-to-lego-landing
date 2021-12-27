import { FC } from 'react';
import AuthContext from '@Hooks/authContext';
import LayoutAnimation from '@sweetsyui/ui/build/@layouts/LayoutAnimation';

type Props = {
  Role?: string | string[];
};

const AdminLayout: FC<Props> = ({ children, Role }) => (
  <AuthContext role={Role}>
    <LayoutAnimation>{children}</LayoutAnimation>
  </AuthContext>
);
export default AdminLayout;
