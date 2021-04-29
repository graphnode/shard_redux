import React, { Suspense } from 'react';
import { BackSide, Texture, TextureLoader } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Canvas, extend, MeshProps, SceneProps, useLoader, useThree } from '@react-three/fiber';

import earth_daymap from '../../assets/2k_earth_daymap.jpg';
import earth_normal_map from '../../assets/2k_earth_normal_map.png';
import earth_roughness_map from '../../assets/2k_earth_roughness_map.png';
import earth_clouds from '../../assets/2k_earth_clouds.jpg';
import galaxy_starfield from '../../assets/galaxy_starfield.png';


extend({ OrbitControls });

export interface OrbitalViewProps {

}

const StarField = (props : MeshProps) => {
  const colorMap = useLoader(TextureLoader, galaxy_starfield);

  return (
    <mesh {...props}>
      <sphereGeometry attach="geometry" args={[190, 64, 64]} />
      <meshBasicMaterial attach="material"
        map={colorMap} side={BackSide}
      />
    </mesh>
  );
};

const Planet = (props : MeshProps) => {
  const colorMap = useLoader(TextureLoader, earth_daymap);
  const normalMap = useLoader(TextureLoader, earth_normal_map) as Texture;
  const roughnessMap = useLoader(TextureLoader, earth_roughness_map);
  const cloudsMap = useLoader(TextureLoader, earth_clouds);

  return (
    <>
      <mesh {...props}>
        <sphereGeometry attach="geometry" args={[1, 24, 24]} />
        <meshStandardMaterial attach="material"
          map={colorMap} normalMap={normalMap} roughnessMap={roughnessMap}
          roughness={0.5} metalness={0.1}
        />
      </mesh>
      <mesh {...props}>
        <sphereGeometry attach="geometry" args={[1.01, 24, 24]} />
        <meshStandardMaterial attach="material" transparent
          color={0xffffff} alphaMap={cloudsMap}
          roughness={1} metalness={0.1}
        />
      </mesh>
    </>
  );
};

const Scene = (props : SceneProps) => {
  const { camera, gl: { domElement } } = useThree();

  return (
    <>
      <orbitControls args={[camera, domElement]} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <StarField />
        <Planet position={[0, 0, 0]} />
      </Suspense>
    </>
  );
};

const OrbitalView : React.FC<OrbitalViewProps> = (props) => {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <Scene />
    </Canvas>
  );
};

OrbitalView.defaultProps = {

};

export default OrbitalView;
