import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Type = styled.div`
  font-weight: 200;
  font-size: 1.2rem;
  line-height: 2.5rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    margin-right: 0.2rem;
    margin-bottom: 0.2rem;
  }
`;

export const Value = styled.div`
  font-weight: 700;
  font-size: 2.5rem;
  white-space: nowrap;
`;

const handleChangeStatus = (change: number) => {
  if (change > 0) return '#4f7975';
  if (change < 0) return '#BA4839';
};

export const Change = styled.div<{ change: number }>`
  font-weight: 600;
  font-size: 1rem;

  ${({ change }) => change && css`
    color: ${handleChangeStatus(change)};
  `}
`;
