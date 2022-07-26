import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

import pokemonAnimation from '../../assets/pokemon.json';
import { Button } from '../../components/Button';
import {
  Container,
  Content,
  WrapperAnimation,
  Footer,
  Title,
  Subtitle,
  WrapperDetail,
} from './styles';

export function Welcome() {

  const navigation = useNavigation();

  function handleLogin() {
    navigation.navigate('home');
  }

  return (
    <Container>
      <Content>
        <WrapperDetail>
          <WrapperAnimation>
            <AnimatedLottieView autoPlay loop source={pokemonAnimation} />
          </WrapperAnimation>
        </WrapperDetail>
      </Content>
      <Footer>
        <Title>Bem-vindo{'\n'} à sua Pokedex!</Title>
        <Subtitle>Encontre todos os{'\n'}Pokemóns em um só lugar</Subtitle>
        <Button
          title='Entrar'
          onPress={handleLogin}
        />
      </Footer>
    </Container>
  );
}
