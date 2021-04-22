import { useDrag } from 'react-use-gesture';
import { useSpring, animated } from '@react-spring/web';

import styles from './Draggable.module.css';

export interface DraggableProps {}

const Draggable: React.FC<DraggableProps> = ({
  ...props
}) => {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useDrag(({ offset: [x, y] }) => {
    api.start({ x, y });
  });

  return <animated.div className={styles.draggable} {...bind()} style={{ x, y }} />;
};

export default Draggable;