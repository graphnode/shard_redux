import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  overflow: hidden;
`;

export const Type = styled.div`
  font-weight: 200;
  font-size: 1.2rem;
  line-height: 2.5rem;
`;

export const Value = styled.div`
  font-weight: 700;
  font-size: 2.5rem;
  white-space: nowrap;
`;

const handleChangeStatus = (status : 'positive' | 'negative') => {
  console.log(status);
  switch (status) {
    case 'positive': return '#4FD0D3';
    case 'negative': return '#4FD0D3';
  }
};

export const Change = styled.div<{ status?: 'positive' | 'negative' }>`
  font-weight: 600;
  font-size: 1rem;

  ${({ status }) => status && css`
    color: ${handleChangeStatus(status)};
  `}
`;
