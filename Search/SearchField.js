import React from 'react';
import {
  View,
  TextInput,
  LayoutAnimation,
  TouchableWithoutFeedback
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import SearchStyles from './SearchStyles.js';

export default class SearchField extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      focus: false,
      text: ''
    };
  }

  searchSubmit() {
    console.log('value');
  }

  inputFocus(val) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({
      focus: val
    });
    if (val) {
      this.refs.search.setNativeProps({text: ''});
      this.refs.search.focus();
    }
  }

  render() {

    return (
      <View style={[
          SearchStyles.input,
          !this.state.focus && SearchStyles.inputBlur,
          this.state.focus && SearchStyles.inputFocus
        ]}>
        <TouchableWithoutFeedback
          onPress={() => this.inputFocus(true)}>
          <Icon name="search" size={20} color="#ccc" style={SearchStyles.inputIcon} />
        </TouchableWithoutFeedback>
        <TextInput ref="search"
          selectTextOnFocus
          onBlur={() => this.inputFocus(false)}
          onChangeText={(text) => this.setState({text: text})}
          underlineColorAndroid={'transparent'}
          onSubmitEditing={() => this.props.navigate(
            'Search',
            {name: this.state.text}
          )}
          style={[this.state.focus && {position: 'absolute'}, SearchStyles.inputField]}>
        </TextInput>
      </View>
    )
  }
}
