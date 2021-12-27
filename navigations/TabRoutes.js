import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import {
  HomeStackScreen,
  ExploreStackScreen,
  ProfileStackScreen,
} from './AllStacks';

const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'green',
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#D77FA150',
          left: 20,
          right: 20,
          bottom: 20,
          height: 60,
          borderRadius: 20,
          paddingBottom: 5,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name={'Home Tab'}
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Text style={{color: focused ? 'red' : 'green', fontSize: 30}}>
              +
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name={'Explore Tab'}
        component={ExploreStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Text style={{color: focused ? 'red' : 'green', fontSize: 30}}>
              +
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name={'Profile Tab'}
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Text style={{color: focused ? 'red' : 'green', fontSize: 30}}>
              +
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabRoutes;
