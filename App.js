import React from 'react';
import {View, StatusBar, Platform, UIManager} from 'react-native';
import {StackNavigator} from 'react-navigation';

import HomeScreen from './Home/Home';
import LoginScreen from './Login/Login';

UIManager.setLayoutAnimationEnabledExperimental
&& UIManager.setLayoutAnimationEnabledExperimental(true);

const Appholo = StackNavigator({
  Login: { screen: LoginScreen },
  Home: { screen: HomeScreen }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, marginTop: Platform.OS === 'android' ? 24 : 0 }}>
        <Appholo />
      </View>
    )
  }
}
