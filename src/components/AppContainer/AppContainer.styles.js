import styled from 'styled-components';

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(
    3,
    1fr
  ); // repeat column and each column has a fraction (?), could also be 1fr 1fr 1fr
  grid-column-gap: 24px; // spacing between columns
  padding: 24px;
`;
