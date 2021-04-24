import { FunctionComponent, SVGProps } from 'react';

import * as S from './SideMenu.styles';

type OptionItem = {
  title?: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string | undefined }>;
  path?: string;
};

export interface SideMenuProps {
  /** The options of the menu. */
  options?: OptionItem[]
}

const SideMenu = ({ options } : SideMenuProps) => {
  if (!options)
    return null;

  return (
    <S.Container>
      <S.OrderedList>
        { options.map((option, i) => (
          <S.ListItem key={i}>
            <S.NavLink to={option.path || ''} exact={true} activeClassName="active">
              <option.icon />
              {option.title && <span>{option.title}</span>}
            </S.NavLink>
          </S.ListItem>
        ))}
      </S.OrderedList>
    </S.Container>
  );
};

export default SideMenu;
