import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Welcome } from '../screens/Welcome';
import { Home } from '../screens/Home';
import { Details } from '../screens/Details';

const { Screen, Navigator } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name="welcome"
        component={Welcome}
      />
      <Screen
        name="home"
        component={Home}
      />
      <Screen
        name="details"
        component={Details}
      />
    </Navigator>
  )
}
