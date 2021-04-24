import { useRef, useState } from 'react';
import { useDrag } from 'react-use-gesture';
import { useSpring } from '@react-spring/web';
import throttle from 'lodash-es/throttle';

import * as S from './Draggable.styles';

const sendEvent = (type : string, target : Element) => {
  target.dispatchEvent(new Event(type, { bubbles: true, cancelable: false }));
};

const sendThrottledEvent = throttle((type : string, target : Element) => {
  target.dispatchEvent(new Event(type, { bubbles: true, cancelable: false }));
}, 100);

export interface DraggableProps {}

const Draggable : React.FC<DraggableProps> = (props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const dropRef = useRef<Element | null>(null);

  const [grabbed, setGrabbed] = useState(false);

  const [styles, api] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useDrag(({ down, offset: [ox, oy], last }) => {
    api.start({ x: ox, y: oy, config: { tension: 250 } });

    setGrabbed(down);

    const { x, y, width, height } = ref.current!.getBoundingClientRect();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, dropEl] = document.elementsFromPoint(x + width / 2, y + height / 2);

    if (last && dropRef.current) {
      sendEvent('drop', dropRef.current);
    }

    if (dropEl !== dropRef.current) {
      if (dropRef.current) sendEvent('dragleave', dropRef.current);
      if (dropEl) sendEvent('dragenter', dropEl);
      dropRef.current = dropEl;
    }

    if (dropEl && !last) sendThrottledEvent('dragover', dropEl);
  });

  return (
    <S.Draggable
      ref={ref}
      grabbed={grabbed ? 'true' : undefined}
      style={styles}
      {...bind()}
    />
  );
};

export default Draggable;
