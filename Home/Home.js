import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

import AppStyles from '../AppStyles.js';
import HomeStyles from './HomeStyles.js';
import ModuleStyles from '../Module/ModuleStyles.js';

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

  render() {

    var modules = [
      {
        id: 1,
        title: 'Piano',
        category: 'Music',
        img: 'http://eip.epitech.eu/2018/appholo/assets/img/portfolio/02.jpg',
        stars: 4,
      },
      {
        id: 2,
        title: 'Algebra',
        category: 'Maths',
        img: 'http://eip.epitech.eu/2018/appholo/assets/img/portfolio/04.jpg',
        stars: 3,
      },
      {
        id: 3,
        title: 'Planetarium',
        category: 'Astronomy',
        img: 'http://eip.epitech.eu/2018/appholo/assets/img/portfolio/01.jpg',
        stars: 5,
      },
    ];
    var self = this;
    var modulesList = modules.map(function(module) {
      return <ModuleSmall
        navigate={self.props.navigation.navigate}
        img={module.img}
        title={module.title}
        stars={module.stars}
        category={module.category}
        key={module.id} />;
    });

    return (

      <ScrollView style={AppStyles.container}>

        <SearchField navigate={this.props.navigation.navigate} />

        <HomeCarousel imgs={modules.map(function(module){
          return module.img;
        })} />

        <HomeCategories navigate={this.props.navigation.navigate} />

        <View style={AppStyles.block}>
          <Text style={AppStyles.blockTitle}>Latest Modules</Text>
          <ScrollView
            ref={(latestModules) => { this.latestModules = latestModules; }}
            style={ModuleStyles.smallBlock}
            horizontal= {true}>
            { modulesList }
          </ScrollView>
        </View>

        <SearchResult navigate={this.props.navigation.navigate} />

      </ScrollView>
    );
  }
}
