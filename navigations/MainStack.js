import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabRoutes from './TabRoutes';
import NavigationScreens from './NavigationScreens';
const Stack = createNativeStackNavigator();

export default function () {
  return (
    <>
      <Stack.Screen
        name={NavigationScreens.TabRoutes}
        component={TabRoutes}></Stack.Screen>
    </>
  );
}
