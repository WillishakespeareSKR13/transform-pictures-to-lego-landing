import { FC, useState } from 'react';
import AtomText from '../AtomText';
import AtomButton from '../AtomButton';
import AtomWrapper from '../AtomWrapper';
import { AtomWrapperTypes } from '../AtomWrapper/types';
import { AtomButtonTypes } from '../AtomButton/types';

interface AtomTabsProps {
  tabs?: {
    id?: string;
    title: string;
    content: React.ReactNode;
    onClick?: () => void;
  }[];

  componentsProps?: {
    containerProps?: AtomWrapperTypes;
    tabsProps?: {
      wrapperProps?: AtomWrapperTypes;
      buttonActiveProps?: AtomButtonTypes;
      buttonDisabledProps?: AtomButtonTypes;
    };
    contentProps?: {
      wrapperProps?: AtomWrapperTypes;
    };
  };
}

const AtomTabs: FC<AtomTabsProps> = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  const { tabs, componentsProps } = props;
  return (
    <AtomWrapper
      width="100%"
      flexDirection="column"
      {...componentsProps?.containerProps}
    >
      <AtomWrapper
        flexDirection="row"
        width="100%"
        justifyContent="flex-start"
        {...componentsProps?.tabsProps?.wrapperProps}
      >
        {tabs?.map((tab, index) => {
          const buttonProps =
            index === activeTab
              ? componentsProps?.tabsProps?.buttonActiveProps
              : componentsProps?.tabsProps?.buttonDisabledProps;

          return (
            <AtomButton
              onClick={() => {
                setActiveTab(index);
                tab?.onClick?.();
              }}
              key={tab.id ?? index + 1}
              backgroundColor={index === activeTab ? '#00abb9' : '#b2b1af'}
              padding="10px 30px"
              borderRadius="0px"
              {...buttonProps}
            >
              <AtomText
                color="white"
                fontSize="14px"
                fontWeight="bold"
                cursor="pointer"
              >
                {tab.title}
              </AtomText>
            </AtomButton>
          );
        })}
      </AtomWrapper>
      <AtomWrapper
        border="1px solid #e6e6e6"
        {...componentsProps?.contentProps?.wrapperProps}
      >
        {tabs?.find((_, index) => index === activeTab)?.content}
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default AtomTabs;
