import styled, { css } from 'styled-components/native';

export type PokemonType = {
  type: string;
}

export const PokemonCard = styled.TouchableOpacity<PokemonType>`
  border-radius: 10px;
  margin-top: 30px;
  flex-direction: row;
  padding: 20px;
  ${({ theme, type }) => css`
    background-color: ${theme.colors.backgroundCard[type]};
  `};
`;

export const LeftSide = styled.View`
  position: relative;
  width: 50%;
`;

export const Id = styled.Text`
  color: ${({ theme }) => theme.colors.light_text};
  font-size: 12px;
  font-weight: bold;
  line-height: 14px;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-size: 25px;
  font-weight: bold;
  line-height: 31px;
  text-transform: capitalize;
  margin-top: 5px;
`;

export const DotsImageDetail = styled.Image`
  position: absolute;
  width: 74px;
  height: 32px;
  left: 90px;
  top: -10px;
`;

export const ContentTypes = styled.View`
  flex-direction: row;
`;

export const PokemonTypeBox = styled.View<PokemonType>`
  width: 65px;
  height: 25px;
  padding: 5px;
  margin-left: 5px;
  margin-top: 5px;
  border-radius: 3px;
  align-items: center;
  justify-content: space-around;
  ${({ theme, type }) => css`
    background-color: ${theme.colors.boxType[type]};
  `};
`;

export const TypeTitle = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  text-transform: capitalize;
`;

export const RightSide = styled.View`
  width: 50%;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const PokeballImageDetail = styled.Image`
  right: -20px;
  position: absolute;
`;

export const PokemonImage = styled.Image`
  width: 130px;
  height: 130px;
  margin-top: -40px;
`;
