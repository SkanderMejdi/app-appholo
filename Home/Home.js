import React from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  ActivityIndicator
} from 'react-native';

import AppStyles from '../AppStyles.js';
import HomeStyles from './HomeStyles.js';
import ModuleStyles from '../Module/ModuleStyles.js';

import Api from '../Api/Api.js';
import ModuleUtils from '../Module/ModuleUtils.js';
import HomeCategories from './HomeCategories.js';
import HomeCarousel from './HomeCarousel.js';
import ModuleSmall from '../Module/ModuleSmall.js';
import SearchField from '../Search/SearchField.js';
import SearchResult from '../Search/SearchResult.js';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
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
    Api.modules({}).then(function(res) {
      if (!res.error) {
        self.setState({
          isLoading: false,
          modulesList: ModuleUtils.buildSmall(res, self),
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

        <HomeCarousel imgs={this.state.modulesList.map(function(module){
          return module.path;
        })} />

        <HomeCategories navigate={this.props.navigation.navigate} />

        <View style={AppStyles.block}>
          <Text style={AppStyles.blockTitle}>Latest Modules</Text>
          <ScrollView
            ref={(latestModules) => { this.latestModules = latestModules; }}
            style={ModuleStyles.smallBlock}
            horizontal= {true}>
            { this.state.modulesList }
          </ScrollView>
        </View>

        <SearchResult
          navigate={this.props.navigation.navigate}
          modules={this.state.modules}
          />

      </ScrollView>
    );
  }
}
