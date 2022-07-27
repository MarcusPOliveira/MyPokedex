import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import theme from './src/styles/theme';
import { Routes } from './src/routes';

export default function App() {
  return (
    <ThemeProvider theme={theme} >
      <StatusBar translucent barStyle='dark-content' backgroundColor="transparent" />
      <Routes />
    </ThemeProvider>
  );
}
