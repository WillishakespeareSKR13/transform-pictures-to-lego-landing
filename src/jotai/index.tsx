import { Provider } from 'jotai';
import { FC } from 'react';

const JotaiProvider: FC = ({ children }) => <Provider>{children}</Provider>;

export default JotaiProvider;
