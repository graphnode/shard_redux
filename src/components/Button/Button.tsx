import React from 'react';

import * as S from './Button.styles';

export interface ButtonProps extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'style'> {
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
}

const Button : React.FC<ButtonProps> = ({ disabled = false, onClick, children, ...props }) => {

  const handleClick : React.MouseEventHandler = (e) => {
    if (!disabled)
      onClick?.(e);
  };

  return (
    <S.Container role="button" tabIndex={0} disabled={disabled} onClick={handleClick} {...props}>
      {children}
    </S.Container>
  );
};

export default Button;
