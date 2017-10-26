import React from 'react';
import {
  ScrollView,
} from 'react-native';

import AppStyles from '../AppStyles.js';

import SearchField from '../Search/SearchField.js';
import SearchResult from '../Search/SearchResult.js';

export default class SearchScreen extends React.Component {

  static navigationOptions = {
    title: 'Search',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#1e2429'
    },
    headerTitleStyle: {
      fontSize: 18
    }
  };

  render() {
    return (

      <ScrollView style={AppStyles.container}>

        <SearchField navigate={this.props.navigation.navigate} />

        <SearchResult navigate={this.props.navigation.navigate} />

      </ScrollView>
    );
  }
}
