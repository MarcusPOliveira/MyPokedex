import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const PokeballBackgroundImg = styled.ImageBackground`
  width: 100%;
  height: 60px;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.light_text};
  margin: 20px 20px;
`;
