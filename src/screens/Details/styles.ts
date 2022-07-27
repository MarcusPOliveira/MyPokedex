import styled, { css } from 'styled-components/native';
import * as Progress from 'react-native-progress';
import { PokemonType } from '../../components/Card/styles';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View<PokemonType>`
  width: 100%;
  height: 340px;
  padding: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
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
  position: relative;
`;

export const CircleDetail = styled.Image`
  position: absolute;
  width: 125px;
  height: 125px;
`;

export const PokemonImage = styled.Image`
  width: 125px;
  height: 125px;
`;

export const ContentHeader = styled.View`
  margin-left: -30px;
`;

export const Id = styled.Text`
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.light_text};
`;

export const Name = styled.Text`
  font-size: 28px;
  font-style: normal;
  text-transform: capitalize;
  font-weight: bold;
  line-height: 38px;
  color: ${({ theme }) => theme.colors.background};
`;

export const TypeContainer = styled.View`
  flex-direction: row;
`;

export const PokemonTypeCard = styled.View<PokemonType>`
  width: 61px;
  height: 25px;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  margin-top: 10px;
  ${({ theme, type }) => css`
    background-color: ${theme.colors.boxType[type]};
  `};
`;

export const TypeTitle = styled.Text`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.background};
`;

export const DotsImage = styled.Image`
  width: 85px;
  right: -20px;
  top: 220px;
  position: absolute;
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  margin-top: -40px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text<PokemonType>`
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
  font-style: normal;
  padding: 20px;
  ${({ theme, type }) => css`
    color: ${theme.colors.boxType[type]};
  `};
`;

export const StatsBar = styled.View`
  width: 100%;
  padding: 10px 20px;
  flex-direction: row;
  align-items: center;
`;

export const AttributeName = styled.Text`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  font-style: normal;
  text-transform: capitalize;
  width: 110px;
  color: ${({ theme }) => theme.colors.detail};
`;

export const AttributeValue = styled.Text`
  font-size: 16px;
  font-weight: normal;
  line-height: 19px;
  font-style: normal;
  text-transform: capitalize;
  text-align: right;
  margin-left: 20px;
  color: ${({ theme }) => theme.colors.light_text};
`;

export const AttributeBar = styled.View`
  margin-left: 20px;
`;

export const ProgressBar = styled(Progress.Bar) <PokemonType>``;

export const AbilityName = styled.Text`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  font-style: normal;
  padding: 10px 20px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.detail};
`;
