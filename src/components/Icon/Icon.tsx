import React, { useEffect, useState } from 'react';

export interface IconProps {
  name: string;
}

const Icon : React.FC<IconProps> =  ({ name, ...props }) => {
  const [iconModule, setIconModule] = useState<any>(null);

  useEffect(() => {
    import(`!!@svgr/webpack?-svgo,+titleProp,+ref!../../assets/${name}.svg`).then((module) => {
      /* Persist data in state */
      setIconModule(module);
    }).catch((error) => {
      /* Do not forget to handle errors */
      console.error(`Icon with name: ${name} not found!`);
    });
  }, [name]);

  if (iconModule === null)
    return null;

  const Component = iconModule.default;
  return <Component {...props} />;
};

export default Icon;
