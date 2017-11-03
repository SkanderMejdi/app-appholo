import React from 'react';
import {
  Text,
  View,
  ToastAndroid
} from 'react-native';

import AppStyles from './AppStyles.js';

import Api from './Api/Api.js';

export default class ErrorScreen extends React.Component {

  static navigationOptions = {
    title: 'Error',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#1e2429'
    },
    headerTitleStyle: {
      fontSize: 18
    }
  };

  constructor(props) {
    super(props);
    this.fun = null;
    this.state = {
      error: "Waiting for network to come back"
    }
  }

  componentDidMount() {

    var self = this;
    this.fun = setInterval(function() {
      Api.modules({}).then(function(res) {
        if (!res.error) {
          ToastAndroid.show(
            'Online ! Redirecting to login',
            ToastAndroid.SHORT
          );
          clearInterval(self.fun);
          self.props.navigation.navigate('Login');
        } else {
          console.log('no network');
        }
      })
    }, 3000);

  }

  render() {

    return (
      <View style={AppStyles.loadingBox}>
        <Text style={AppStyles.logMessage}>{ this.state.error }</Text>
      </View>
    );
  }
}
