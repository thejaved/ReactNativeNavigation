import React from 'react';
import {Text, View} from 'react-native';
import NavigationScreens from '../../../navigations/NavigationScreens';
import AppButton from '../../components/Buttons/AppButton';
import Styles from './Styles';

const Profile = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <Text>This Is The Profile.js</Text>
      <AppButton
        title={'Go To Edit Screen'}
        onPress={() => navigation.navigate(NavigationScreens.EditProfile)}
      />
    </View>
  );
};

export default Profile;
