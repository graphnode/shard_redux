import { useState } from 'react';

import './Draggable.css';

export interface DropTargetProps extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'style'> {}

const DropTarget : React.FC<DropTargetProps> = ({ style, className }) => {
  const [over, setOver] = useState(false);
  const [drop, setDrop] = useState(false);

  return (
    <div
      onDragEnter={() => setOver(true)}
      onDrop={() => setDrop(true)}
      onDragLeave={() => setOver(false)}
      className={`DropTarget ${(over ? 'DropTargetOver' : '')} ${(drop ? 'DropTargetDrop' : '')} ${(className || '')}`}
      style={style}
    />
  );
};

export default DropTarget;
