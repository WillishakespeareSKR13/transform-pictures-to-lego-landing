import { css } from '@emotion/react';
import { AtomText, AtomIcon, AtomWrapper } from '@sweetsyui/ui';
import { AnimatePresence } from 'framer-motion';
import {
  FC,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect
} from 'react';

interface Alert {
  id: string;
  type: 'error' | 'success' | 'warning' | 'info';
  message: string;
}

interface IContextProps {
  alert: Alert[];
  setAlert: Dispatch<SetStateAction<Alert[]>>;
}

const ContextAlert = createContext({} as IContextProps);

export const useAlert = () => {
  const { alert, setAlert } = useContext(ContextAlert);
  const insertAlert = (newAlert: Alert) => {
    setAlert([...alert, newAlert]);
  };
  return { insertAlert };
};

interface AlertContextProps {
  time?: number;
}

const typeAlert = {
  error: {
    color: '#d3343c',
    icon: 'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/commons/cross.svg'
  },
  success: {
    color: '#00b881',
    icon: 'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/commons/check.svg'
  },
  warning: {
    color: '#f75b13',
    icon: 'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/commons/cross.svg'
  },
  info: {
    color: '#4b56f0',
    icon: 'https://storage.googleapis.com/cdn-bucket-ixulabs-platform/assets/svgs/commons/cross.svg'
  }
};

const AlertContext: FC<AlertContextProps> = ({ children, time }) => {
  const [alert, setAlert] = useState<Alert[]>([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(alert.filter((_, index) => index !== 0));
    }, time || 3000);
    return () => clearTimeout(timer);
  }, [alert, time]);

  return (
    <ContextAlert.Provider value={{ alert, setAlert }}>
      <AtomWrapper
        maxWidth="max-content"
        position="fixed"
        zIndex="9999"
        padding="10px"
        customCSS={css`
          left: 50%;
          transform: translateX(-50%);
        `}
      >
        <AnimatePresence>
          {alert.map((item) => (
            <AtomWrapper
              key={item.id}
              margin="0px 0px 20px 0px"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              padding="15px 25px"
              borderRadius="2px"
              backgroundColor={typeAlert[item.type].color}
            >
              <AtomIcon
                icon={typeAlert[item.type].icon}
                width="18px"
                height="15px"
                color="white"
              />
              <AtomText
                padding="3px 0px 0px 0px"
                color="white"
                fontWeight={600}
                margin="0px 0px 0px 15px"
              >
                {item.message}
              </AtomText>
            </AtomWrapper>
          ))}
        </AnimatePresence>
      </AtomWrapper>
      {children}
    </ContextAlert.Provider>
  );
};

export default AlertContext;
