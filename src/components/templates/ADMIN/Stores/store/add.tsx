import { css } from '@emotion/react';
import DashWithTitle from '@Src/components/layouts/DashWithTitle';
import { AtomInput, AtomWrapper } from '@sweetsyui/ui';
import React from 'react';

const ADD = () => {
  return (
    <DashWithTitle title="Create new store">
      <AtomWrapper>
        <AtomWrapper>
          <AtomInput
            type="dragdrop"
            width="400px"
            height="400px"
            customCSS={css`
              label {
                background-color: #202026;
                color: #dfdfdf;
              }
            `}
          />
        </AtomWrapper>
      </AtomWrapper>
    </DashWithTitle>
  );
};

export default ADD;
