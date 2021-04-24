import { FunctionComponent, SVGProps, useState } from 'react';

import * as S from './SideMenu.styles';

type OptionItem = {
  title?: string;
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
    <S.Container>
      <S.OptionList>
        { options.map((option, i) => (
          <S.Option
            key={i}
            active={active === i}
            onClick={() => handleClick(option, i) }
          >
            <option.icon />
            {option.title && <span>{option.title}</span>}
          </S.Option>
        ))}
      </S.OptionList>
      <S.Line />
    </S.Container>
  );
};

export default SideMenu;
