import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundCard.water}
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.background}
`;
