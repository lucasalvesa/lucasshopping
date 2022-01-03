import styled from 'styled-components';

export const Wrapper = styled.header`
  height: 70px;
  background-color: #00acae;
  color: #ffffff;
  font-size: 24px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  display: flex;
  align-items: center; // align vertically
  padding: 0 32px; // 0 vertical 32 horizontal

  span {
    font-weight: 700;
    margin-left: 8px;
  }
`;
