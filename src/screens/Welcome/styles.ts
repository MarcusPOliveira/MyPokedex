import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundCard.water};
  `};
`;

export const Content = styled.View`
  height: 60%;
  justify-content: center;
  align-items: center;
`;

export const WrapperDetail = styled.View`
  width: 150px;
  height: 300px;
  border-radius: 100px;
  transform: rotate(30deg);
  ${({ theme }) => css`
    background-color: ${theme.colors.boxType.water};
  `};
`;

export const WrapperAnimation = styled.View`
  transform: rotate(-30deg);
  width: 200px;
  height: 300px;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.View`
  height: 40%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
  `};
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.colors.text};
  `};
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  text-align: center;
  margin-bottom: 30px;
  ${({ theme }) => css`
    color: ${theme.colors.text};
  `};
`;
