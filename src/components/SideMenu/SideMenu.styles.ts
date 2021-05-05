import styled from 'styled-components';
import { NavLink as BaseNavLink } from 'react-router-dom';

export const Container = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 6rem; height: 100%;

  background-color: #2C313D;
  border-right: 0.05rem solid #484F61;
`;

export const OrderedList = styled.ol`
  display: flex;
  flex-direction: column;

  margin: 0; padding: 0;
  gap: 1rem;
`;

export const ListItem = styled.li`
  margin: 0; padding: 0;
  list-style: none;
`;

export const NavLink = styled(BaseNavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0; padding: 0;
  width: 5rem; height: 5rem;
  border-radius: 0.5rem;
  overflow: hidden;
  font-size: 0.9rem;
  color: #484F61;

  text-decoration: none;

  user-select: none;
  cursor: pointer;
    
  &:hover {
    background-color: #323846;
  }

  & svg {
    fill: currentColor;
    width: 2rem; height: 2rem;
  }

  &.active {
    && {
      color: white;
      background-color: #4c566b;
    }
    
    & span {
      font-weight: bold;
    }
  }
`;
