import React from 'react';
import {StackNavigator} from 'react-navigation';

import HomeScreen from './Home/Home';
import LoginScreen from './Login/Login';

const Appholo = StackNavigator({
  Login: { screen: LoginScreen },
  Home: { screen: HomeScreen }
});

export default class App extends React.Component {
  render() {
    return <Appholo />;
  }
}
