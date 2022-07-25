import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import theme from './src/styles/theme';
import { Welcome } from './src/screens/Welcome';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <ThemeProvider theme={theme} >
      <StatusBar translucent barStyle='light-content' />
      <Home />
    </ThemeProvider>
  );
}
