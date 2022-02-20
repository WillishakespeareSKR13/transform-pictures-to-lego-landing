import { FC } from 'react';
import lodash from 'lodash';
import InputTextError from './error';
import {
  InputTextLabelStyled,
  InputTextSpanStyled,
  InputTextStyled,
} from './style';
import { AtomInputTypes } from './types';

const Animation = {
  whileTap: { scale: 0.98, opacity: 0.8 },
};

const InputText: FC<AtomInputTypes> = (props) => {
  const { value, onChange, formik, id, children } = props;
  const {
    labelWidth,
    labelColor,
    labelFontFamily,
    labelFontSize,
    labelFontWeight,
    labelMargin,
    labelPadding,
    spanMargin,
    customCSS,
    label,
  } = props;
  return (
    <InputTextLabelStyled
      labelWidth={labelWidth}
      labelColor={labelColor}
      labelFontFamily={labelFontFamily}
      labelFontSize={labelFontSize}
      labelFontWeight={labelFontWeight}
      labelMargin={labelMargin}
      labelPadding={labelPadding}
      customCSS={customCSS}
      htmlFor={id}
    >
      {label && (
        <InputTextSpanStyled spanMargin={spanMargin}>
          {label}
        </InputTextSpanStyled>
      )}
      <InputTextStyled
        {...Animation}
        {...props}
        value={lodash.get(formik?.values, id) ?? value}
        onChange={formik?.handleChange ?? onChange}
        onBlur={formik?.handleBlur}
      />
      {children}
      <InputTextError {...props} />
    </InputTextLabelStyled>
  );
};

export default InputText;
