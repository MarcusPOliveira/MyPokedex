import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import pokeballImg from '../../assets/img/pokeball.png';
import api from '../../services/api';
import { Load } from '../../components/Load';
import {
  Card,
  Pokemon,
  PokemonType
} from '../../components/Card';
import {
  Container,
  Header,
  Title,
  PokeballBackgroundImg
} from './styles';

type Request = {
  id: number;
  types: PokemonType[];
}

export function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const navigation = useNavigation();

  function handleOpenDetails(pokemonId: number) {
    navigation.navigate('details', { pokemonId });
  }

  async function getMoreInfo(url: string): Promise<Request> {
    const response = await api.get(url);
    const { id, types } = response.data;
    return { id, types };
  }

  async function fetchPokemons() {
    const response = await api.get('/pokemon');
    const { results } = response.data;
    //percorrendo array de Pokemons, pegando cada item e chamando a função getMoreInfo(), pois response só retorna name e url de cada Pokemon
    const payload = await Promise.all(
      results.map(async (pokemon: Pokemon) => {
        const { id, types } = await getMoreInfo(pokemon.url);
        return {
          name: pokemon.name,
          id,
          types
        };
      })
    );
    console.log(payload);
    setPokemons(payload);
    setIsLoading(false);
  }

  useEffect(() => {
    setIsLoading(true);
    fetchPokemons();
  }, []);

  if (isLoading) {
    return <Load />
  }

  return (
    <Container>
      <Header>
        <PokeballBackgroundImg source={pokeballImg} resizeMode="contain" />
        <Title>Pokedéx</Title>
      </Header>
      <FlatList
        data={pokemons}
        keyExtractor={pokemon => pokemon.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        renderItem={({ item: pokemon }) => (
          <Card data={pokemon} onPress={() => handleOpenDetails(pokemon.id)} />
        )}
      />
    </Container>
  );
}
