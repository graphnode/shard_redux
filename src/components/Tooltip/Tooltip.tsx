import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import * as S from './Tooltip.styles';

export interface TooltipProps {
  /** The content of the tooltip. */
  content: React.ReactNode;
  /** the offset based on the cursor. */
  offset?: { left: number; top: number };
}

const Tooltip : React.FC<TooltipProps> = ({ content, children, offset = { left: 15, top: 20 } }) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  if (!content)
    return null;

  if (!React.isValidElement(children)) {
    console.error('Unable to set tooltip for component.');
    return (children as React.ReactElement);
  }

  const onMouseOver = (e : React.MouseEvent) => {
    setVisible(true);
    children.props?.onMouseOver?.(e);
  };
  const onMouseMove = (e : React.MouseEvent) => {
    setPosition({ x: e.pageX + offset.left, y: e.pageY + offset.top });
    children.props?.onMouseMove?.(e);
  };
  const onMouseLeave = (e : React.MouseEvent) => {
    setVisible(false);
    children.props?.onMouseLeave?.(e);
  };

  return (
    <>
      {React.cloneElement(children, { onMouseOver, onMouseMove, onMouseLeave })}
      {visible && ReactDOM.createPortal(
        <S.Container style={{ transform: `translate(${position.x}px, ${position.y}px)` }}>{content}</S.Container>,
        document.getElementById('root')!,
      )}
    </>
  );
};

export default Tooltip;
