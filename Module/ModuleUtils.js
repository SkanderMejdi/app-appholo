import React from 'react';
import {
  Image,
  View,
  Text
} from 'react-native';

import ModuleStyles from './ModuleStyles.js';
import AppStyles from '../AppStyles.js';

import ModuleSmall from './ModuleSmall.js';

var ModuleUtils = {

  getStars: function(commentary) {
    count = 0;
    total = 0;
    if (!commentary) {
      return 0;
    }
    for (var i = 0; i < commentary.length; i++) {
      total += commentary[i].grade;
      count++;
    }
    return total / count;
  },

  stars: function(commentary) {
    var stars = [];
    for (var i = 0; i < 5; i++) {
      starNb = this.getStars(commentary);
      for (var i = 0; i < 5; i++) {
        if (starNb > 0) {
          stars.push(
            <Image
              source={require('../Assets/star.png')}
              key={i}
              style={ModuleStyles.star} />
          )
        } else {
          stars.push(
            <Image
              source={require('../Assets/no-star.png')}
              key={i}
              style={ModuleStyles.star} />
          )
        }
        starNb--;
      }
    }
    return stars;
  },

  buildSmall: function(json, component) {
    if (json.length == 0) {
      return (
        <View style={AppStyles.logMessageBox}>
          <Text style={AppStyles.logMessage}>Pas de résultats</Text>
        </View>
      )
    }
    return json.map(function(module) {
      return <ModuleSmall
        navigate={component.props.navigation.navigate}
        img={module.path}
        id={module._id}
        title={module.name}
        commentary={module.commentary}
        category={module.category}
        key={module._id} />;
    });
  }

};

export { ModuleUtils as default };
