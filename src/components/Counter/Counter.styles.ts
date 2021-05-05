import styled, { css } from 'styled-components';

import { default as BaseIcon } from '../Icon';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: 0 1rem;

  cursor: default;
`;

export const Icon = styled(BaseIcon)`
  display: flex;
  margin-right: 0.5rem;
`;

export const Values = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Value = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  white-space: nowrap;
`;

const handleChangeStatus = (change: number) => {
  if (change > 0) return '#61CA9B';
  if (change < 0) return '#BA1802';
};

export const Change = styled.div<{ change?: number }>`
  font-size: 0.8rem;

  ${({ change }) => change && css`
    color: ${handleChangeStatus(change)};
  `}
`;
