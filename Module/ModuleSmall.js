import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

import ModuleStyles from './ModuleStyles.js';

export default class ModuleSmall extends React.Component {

  render() {

    var stars = [];
    for (var i = 0; i < 5; i++) {
      starNb = this.props.stars;
      for (var i = 0; i < 5; i++) {
        if (starNb > 0) {
          stars.push(
            <Image
              source={require('../Assets/star.png')}
              key={starNb}
              style={ModuleStyles.star} />
          )
        } else {
          stars.push(
            <Image
              source={require('../Assets/no-star.png')}
              key={starNb}
              style={ModuleStyles.star} />
          )
        }
        starNb--;
      }
    }
    return (
      <TouchableWithoutFeedback onPress={() => this.props.navigate(
          'Module',
          {navigate: this.props.navigate}
        )}>
        <View style={ModuleStyles.small}>
          <Image source={{ uri: this.props.img }} style={ModuleStyles.smallThumbnail} />
          <View style={ModuleStyles.smallText}>
            <Text style={ModuleStyles.smallTitle}>{this.props.title}</Text>
            <Text style={ModuleStyles.smallCategory}>{this.props.category}</Text>
            <View style={ModuleStyles.stars}>
              { stars }
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
