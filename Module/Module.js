import React from 'react';
import {
  ScrollView,
  View,
  Text,
} from 'react-native';

import AppStyles from '../AppStyles.js';
import ModuleStyles from './ModuleStyles.js';

import ModuleSmall from '../Module/ModuleSmall.js';
import SearchResult from '../Search/SearchResult.js';

export default class ModuleScreen extends React.Component {

  static navigationOptions = {
    title: 'Module',
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
    var modulesList = modules.map(function(module){
      return <ModuleSmall
        img={module.img}
        title={module.title}
        stars={module.stars}
        category={module.category}
        key={module.id} />;
    });

    return (

      <ScrollView style={AppStyles.container}>

        <View style={AppStyles.block}>
          <Text style={AppStyles.blockTitle}>Similar</Text>
          <ScrollView
            ref={(latestModules) => { this.latestModules = latestModules; }}
            style={ModuleStyles.smallBlock}
            horizontal={true}>
            { modulesList }
          </ScrollView>
        </View>

      </ScrollView>
    );
  }
}
