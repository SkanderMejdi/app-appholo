import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableHighlight
} from 'react-native';

export default class LoginScreen extends React.Component {

  static navigationOptions = {
    title: 'Login',
  };

  constructor(props) {
    super(props);
    this.state = {
      pseudo: '',
      password: ''
    };
  }

  renderScene = (route, navigator) => {
    return React.createElement(route.component, {navigator: navigator});
  }

  render() {

    const { navigate } = this.props.navigation;
    const titleConfig = {
      title: 'Appholo',
    };

    return (
      <View style={styles.container}>
        <View style={{flex: 4, backgroundColor: 'skyblue'}} />
        <View style={{flex: 2, backgroundColor: 'steelblue'}}>
          <TextInput
          style={{height: 40}}
          placeholder="Pseudo"
          onChangeText={(text) => this.setState({pseudo})}
          />
        </View>
        <View style={{flex: 2, backgroundColor: 'skyblue'}}>
          <TextInput
          style={{height: 40}}
          placeholder="Password"
          onChangeText={(text) => this.setState({password})}
          />
        </View>
        <View style={{flex: 4, backgroundColor: 'powderblue'}}>
          <Button
          title="Login"
          onPress={() =>
            navigate('Home')
          }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
