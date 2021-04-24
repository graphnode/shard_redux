import { useRef } from 'react';
import { useDrag } from 'react-use-gesture';
import { useSpring, animated } from '@react-spring/web';
import throttle from 'lodash-es/throttle';

import './Draggable.css';

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

  const [styles, api] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useDrag(({ offset: [ox, oy], last }) => {
    api.start({ x: ox, y: oy, config: { tension: 250 } });

    const { x, y, width, height } = ref.current!.getBoundingClientRect();

    const dropEl = document.elementFromPoint(x + width / 2, y + height / 2);

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
    <animated.div
      ref={ref}
      className={'Draggable'}
      style={styles}
      {...bind()}
    />
  );
};

export default Draggable;
