import React from 'react';
import {
  ScrollView,
  View,
  ActivityIndicator
} from 'react-native';

import AppStyles from '../AppStyles.js';

import Api from '../Api/Api.js';
import SearchField from './SearchField.js';
import SearchResult from './SearchResult.js';
import HomeCategories from '../Home/HomeCategories.js';

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

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    var self = this;
    Api.modules(this.props.navigation.state.params)
    .then(function(res) {
      if (!res.error) {
        self.setState({
          isLoading: false,
          modules: res
        })
      } else { self.props.navigation.navigate('Error', {error:res.error}) }
    })
  }

  render() {

    if (this.state.isLoading) {
      return (
        <View style={AppStyles.loadingBox}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (

      <ScrollView style={AppStyles.container}>

        <SearchField navigate={this.props.navigation.navigate} />

        <HomeCategories navigate={this.props.navigation.navigate} />

        <SearchResult
          navigate={this.props.navigation.navigate}
          modules={this.state.modules}/>

      </ScrollView>
    );
  }
}
