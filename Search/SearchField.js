import React from 'react';
import {
  View,
  TextInput,
  LayoutAnimation,
  TouchableHighlight
} from 'react-native';

import SearchStyles from './SearchStyles.js';
import Icon from 'react-native-vector-icons/FontAwesome';
//import SearchScreen from './Search';

export default class SearchField extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      focus: false
    };
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
        <TouchableHighlight
          onPress={() => this.inputFocus(true)}>
          <Icon name="search" size={20} color="#ccc" style={SearchStyles.inputIcon} />
        </TouchableHighlight>
        <TextInput ref="search"
          selectTextOnFocus
          onBlur={() => this.inputFocus(false)}
          underlineColorAndroid={'transparent'}
          style={[this.state.focus && {position: 'absolute'}, SearchStyles.inputField]}>
        </TextInput>
      </View>
    )
  }
}
