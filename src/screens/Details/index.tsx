import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import api from '../../services/api';
import { PokemonType } from '../../components/Card';
import { Load } from '../../components/Load';
import circleImg from '../../assets/img/circle.png';
import {
  Container,
  Header,
  BackButton,
  PokemonImageContent,
  CircleDetail,
  PokemonImage,
} from './styles';

type RouteParams = {
  pokemonId: number;
}

type StatsProps = {
  base_stat: number;
  stat: {
    name: string;
  }
}

type AbilitiesProps = {
  ability: {
    name: string;
  }
}

type PokemonProps = {
  id: number;
  name: string;
  stats: StatsProps[];
  abilities: AbilitiesProps[];
  types: PokemonType[];
  color: string;
}

export function Details() {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState({} as PokemonProps);

  const route = useRoute();
  const { pokemonId } = route.params as RouteParams;
  const navigation = useNavigation();
  const { colors } = useTheme();

  function handleGoBack() {
    navigation.goBack();
  }

  async function fetchPokemonDetails() {
    try {
      const response = await api.get(`/pokemon/${pokemonId}`);
      const { stats, abilities, id, name, types } = response.data;
      const currentType = types[0].type.name;
      const color = colors.backgroundCard[currentType];
      setPokemon({
        id,
        name,
        stats,
        abilities,
        types,
        color,
      });
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possível carregar os detalhes do Pokemon');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  return (
    <Container>
      {
        isLoading ? <Load /> :
          <Header type={pokemon.types[0].type.name} >
            <BackButton onPress={handleGoBack} >
              <Feather name="chevron-left" size={28} color={colors.light_text} />
            </BackButton>
            <PokemonImageContent>
              <CircleDetail source={circleImg} />
              <PokemonImage source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png` }} />
            </PokemonImageContent>
          </Header>
      }
    </Container>
  );
}
