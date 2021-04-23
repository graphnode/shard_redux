import { FunctionComponent, SVGProps, useState } from 'react';

import styles from './SideMenu.module.css';

type OptionItem = {
  icon: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string | undefined }>;
  onActivate?: () => void;
};

export interface SideMenuProps {
  /** The options of the menu. */
  options?: OptionItem[]
}

const SideMenu = ({ options } : SideMenuProps) => {
  const [active, setActive] = useState<number | null>(null);

  if (!options)
    return null;

  const handleClick = (option : OptionItem, i : number) => {
    if (active === i)
      return;

    setActive(i);
    option.onActivate?.();
  };

  return (
    <div className={styles.sideMenu}>
      { options.map((option, i) => (
        <div
          key={i}
          className={styles.sideMenuButton + ' ' + (active === i && styles.sideMenuButtonActive)}
          onClick={() => handleClick(option, i) }
        >
          <option.icon />
        </div>
      ))}
      <div className={styles.sideMenuLine}/>
    </div>
  );
};

export default SideMenu;