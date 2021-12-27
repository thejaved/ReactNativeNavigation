import React from 'react';
import {Text, View} from 'react-native';
import AppButton from '../../components/Buttons/AppButton';
import Styles from './Styles';
import NavigationScreens from '../../../navigations/NavigationScreens';

const Home = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <Text>This Is The Home.js</Text>
      <AppButton
        title="Go To Another Screen"
        onPress={() => navigation.navigate(NavigationScreens.ProductDetails)}
      />
    </View>
  );
};

export default Home;
