import { useState } from 'react';

import * as S from './Draggable.styles';

export interface DropTargetProps extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'style'> {}

const DropTarget : React.FC<DropTargetProps> = ({ style, className }) => {
  const [over, setOver] = useState(false);
  const [drop, setDrop] = useState(false);

  return (
    <S.DropTarget
      onDragEnter={() => setOver(true)}
      onDrop={() => setDrop(true)}
      onDragLeave={() => setOver(false)}
      over={over} drop={drop}
      className={className}
      style={style}
    />
  );
};

export default DropTarget;
