import React from 'react';
import {
  View,
  Text
} from 'react-native';

import AppStyles from '../AppStyles.js';
import SearchStyles from './SearchStyles.js';

import ModuleList from '../Module/ModuleList.js';

export default class SearchResult extends React.Component {

  constructor(props) {
    super(props);
  }

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
      return <ModuleList
        img={module.img}
        title={module.title}
        stars={module.stars}
        category={module.category}
        key={module.id} />;
    });

    return (
      <View style={AppStyles.block}>
        <Text style={AppStyles.blockTitle}>More</Text>
        <View style={SearchStyles.results}>
          { modulesList }
        </View>
      </View>
    )
  }
}
