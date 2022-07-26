import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import dotsImg from '../../assets/img/dots.png';
import pokeballImg from '../../assets/img/pokeballCard.png';
import {
  PokemonCard,
  LeftSide,
  Id,
  Name,
  DotsImageDetail,
  ContentTypes,
  PokemonTypeBox,
  TypeTitle,
  RightSide,
  PokeballImageDetail,
  PokemonImage,
} from './styles';

//Pokemon pode ter 2 tipos, exemplo: butterfree é inseto e voador
export type PokemonType = {
  type: {
    name: string;
  }
}

export type Pokemon = {
  id: number;
  name: string;
  url: string;
  types: PokemonType[];
}

type Props = TouchableOpacityProps & {
  data: Pokemon;
}

export function Card({ data, ...rest }: Props) {
  return (
    <PokemonCard type={data.types[0].type.name} {...rest}>
      <LeftSide>
        <Id>#{data.id}</Id>
        <Name>{data.name}</Name>
        <DotsImageDetail source={dotsImg} />
        <ContentTypes>
          {
            data.types.map(pokemonType => (
              <PokemonTypeBox type={pokemonType.type.name}>
                <TypeTitle key={pokemonType.type.name}>
                  {pokemonType.type.name}
                </TypeTitle>
              </PokemonTypeBox>
            ))
          }
        </ContentTypes>
      </LeftSide>
      <RightSide>
        <PokeballImageDetail source={pokeballImg} />
        <PokemonImage source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png` }} />
      </RightSide>
    </PokemonCard>
  );
}
