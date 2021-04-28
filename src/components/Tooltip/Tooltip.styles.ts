import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0; left: 0;
  padding: 0.8rem 1.5rem;
  max-width: 25rem;
  z-index: 9999;

  background-color: rgba(0, 0, 0, 0.85);
  border: 0.1rem solid rgba(255, 255, 255, 0.8);

  pointer-events: none;

  font-size: 0.9rem;

  & h1 {
    font-size: 1.2em;
    margin: 0; padding: 0;
  }

  & p {
    margin: 0; padding: 0;
  }

  & hr {
    border: none;
    border-top: 0.05rem solid #ccc;
    width: 50%;
    margin: 1rem auto;
  }

  & figure {
    padding: 0; margin: 0;
    font-style: italic;

    & blockquote {
      padding: 0; margin: 0;
    }

    & figcaption {
      text-align: right;
    }
  }
`;
