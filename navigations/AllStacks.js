import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  EditProfile,
  Explore,
  Home,
  ProductDeatils,
  Profile,
  SearchScreen,
} from '../App/Screens';
import NavigationScreen from './NavigationScreens';

const Stack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NavigationScreen.HomeScreen} component={Home} />
      <Stack.Screen
        name={NavigationScreen.ProductDetails}
        component={ProductDeatils}
      />
    </Stack.Navigator>
  );
}

function ExploreStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NavigationScreen.ExploreScreen} component={Explore} />
      <Stack.Screen
        name={NavigationScreen.SearchScreen}
        component={SearchScreen}
      />
    </Stack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NavigationScreen.ProfileScreen} component={Profile} />
      <Stack.Screen
        name={NavigationScreen.EditProfile}
        component={EditProfile}
      />
    </Stack.Navigator>
  );
}

export {HomeStackScreen, ExploreStackScreen, ProfileStackScreen};
