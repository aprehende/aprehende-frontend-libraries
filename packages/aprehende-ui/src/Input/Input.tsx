import React from 'react';

import { InputContainer } from './Input.styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  widthFull?: boolean;
  startRender?: React.ReactNode;
  endRender?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ startRender, endRender, widthFull, ...rest }, ref) => {
    return (
      <InputContainer fullWidth={widthFull}>
        {startRender && <span>{startRender}</span>}
        <input ref={ref} {...rest} />
        {endRender && <span>{endRender}</span>}
      </InputContainer>
    );
  }
);

export default Input;
