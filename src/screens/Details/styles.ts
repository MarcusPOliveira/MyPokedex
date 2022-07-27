import styled, { css } from 'styled-components/native';
import { PokemonType } from '../../components/Card/styles';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Header = styled.View<PokemonType>`
  width: 100%;
  height: 340px;
  padding: 20px;
  flex-direction: row;
  align-items: center;
  position: relative;
  ${({ theme, type }) => css`
    background-color: ${theme.colors.backgroundCard[type]};
  `};
`;

export const BackButton = styled.TouchableOpacity`
  top: 70px;
  left: 40px;
  position: absolute;
`;

export const PokemonImageContent = styled.View`

`;

export const CircleDetail = styled.Image`
  position: absolute;
`;

export const PokemonImage = styled.Image`

`;

