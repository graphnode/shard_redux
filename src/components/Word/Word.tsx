import React, { useState } from 'react';
import { useGesture } from 'react-use-gesture';
import { useSpring, animated } from '@react-spring/web';

import styles from './Word.module.css';

export interface WordProps {}

const Word : React.FC<WordProps> = ({ children }) => {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));
  const [active, setActive] = useState(false);

  const bind = useGesture({
    onHover: ({ hovering }) => {
      setActive(active || hovering);
    },
    onDrag: ({ down, movement: [mx, my], event }) => {
      api.start({ x: down ? mx : 0, y: down ? my : 0 });
      event.preventDefault();
    },
  });

  return (
    <animated.span className={`${styles.Word}  ${active?styles.WordActive:''}`} style={{ x, y }} {...bind()}>
      [{children}]
    </animated.span>
  );
};

Word.defaultProps = {};

export default Word;
