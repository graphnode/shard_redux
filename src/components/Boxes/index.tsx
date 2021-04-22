import { useRef, useState } from 'react';
import { Mesh } from 'three';
import { Canvas, useFrame } from '@react-three/fiber';

function Box({ color, ...props }: any) {
  // This reference will give us direct access to the mesh
  const mesh = useRef<Mesh>(null);

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    mesh.current!.rotation.x += 0.01;
  });

  // Return view, these are regular threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : color } />
    </mesh>
  );
}

export interface BoxesProps {
  /** The color of the boxes. */
  color: string;
}

/**
 * A sample component to test three.js with react.
 * @param props The props of the component.
 * @returns <Boxes />
 */
const Boxes: React.FC<BoxesProps> = ({
  color,
  ...props
}) => {
  return (
    <Canvas style={{ position: 'absolute', top: 0, left: 0 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box color={color} position={[-1.2, 0, 0]} />
      <Box color={color} position={[1.2, 0, 0]} />
    </Canvas>
  );
};

Boxes.defaultProps = {
  color: 'orange',
};

export default Boxes;
