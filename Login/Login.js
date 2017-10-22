import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Keyboard,
  LayoutAnimation,
  TouchableHighlight
} from 'react-native';
import LoginStyles from './LoginStyles';
import AppStyles from '../AppStyles.js';
import Login from 'react-native-simple-login';

export default class LoginScreen extends React.Component {

  static navigationOptions = {
    title: 'Login',
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
    this.state = {
      pseudo: '',
      password: '',
      titleHeight: 5,
      formBottom: 80
    };
  }

  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow', () => {
        this.keyboardDidShow()
    });
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide', () => {
        this.keyboardDidHide()
    });
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardDidShow () {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({
      titleHeight: 2,
      formBottom: 165
    });
  }

  keyboardDidHide () {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({
      titleHeight: 5,
      formBottom: 80
    });
  }

  onLogin = (email, password) => {
    this.props.navigation.navigate('Home')
  }

  render() {

    const { navigate } = this.props.navigation;

    return (
      <View style={LoginStyles.container}>
        <View style={[LoginStyles.title,
        {flex: this.state.titleHeight}]}>
          <Text style={LoginStyles.titleText}>
            Appholo
          </Text>
        </View>
        <View style={[LoginStyles.form,
        {bottom: this.state.formBottom}]}>
        <Login
        onLogin={this.onLogin}
        baseButtonStyle = {LoginStyles.submit}
        loginFormWrapperStyle = {LoginStyles.formWrapper}
        inputWrapperStyle	= {LoginStyles.inputWrapper}
        inputStyle = {LoginStyles.input}
        inputIconStyle = {LoginStyles.inputIcon}
        showLogoOnResetPassword = {false}
        />
        </View>
      </View>
    );
  }
}
