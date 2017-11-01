import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  ActivityIndicator
} from 'react-native';

import AppStyles from '../AppStyles.js';
import HomeStyles from './HomeStyles.js';
import ModuleStyles from '../Module/ModuleStyles.js';

import Api from '../Api/Api.js';
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

  latestModules(json) {
    var self = this;
    return json.map(function(module) {
      return <ModuleSmall
        navigate={self.props.navigation.navigate}
        img={module.img}
        title={module.title}
        stars={module.stars}
        category={module.category}
        key={module.id} />;
    });
  }

  componentDidMount() {
    var self = this;
    Api.modules().then(function(res) {
      self.setState({
        isLoading: false,
        modules: self.latestModules(res)
      })
    })
  }

  render() {

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (

      <ScrollView style={AppStyles.container}>

        <SearchField navigate={this.props.navigation.navigate} />

        <HomeCarousel imgs={this.state.modules.map(function(module){
          return module.img;
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

        <SearchResult navigate={this.props.navigation.navigate} />

      </ScrollView>
    );
  }
}
