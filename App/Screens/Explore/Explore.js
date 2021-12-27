import React from 'react';
import {Text, View} from 'react-native';
import NavigationScreens from '../../../navigations/NavigationScreens';
import AppButton from '../../components/Buttons/AppButton';
import Styles from './Styles';

const Explore = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <Text>This Is The Explore.js</Text>
      <AppButton
        title={'Search Screen'}
        onPress={() => navigation.navigate(NavigationScreens.SearchScreen)}
      />
    </View>
  );
};

export default Explore;
