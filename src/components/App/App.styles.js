import styled from 'styled-components';
import bg from '../../assets/bg.svg';

export const Wrapper = styled.div`
  height: 100vh;
  background-color: #f8f5ec;
  background-image: url(${bg});
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: center; //horizontal alignment
  align-items: center; //vertical alignment
`;

export const Container = styled.div`
  height: 574px;
  width: 734px;
  background-color: #ffffff;
  box-shadow: 0 3px 10 px rgba(0, 0, 0, 0.15); //15% opacity
  border-radius: 20px;
`;
