import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
  LayoutAnimation,
} from 'react-native';

import ModuleStyles from './ModuleStyles.js';

export default class ModuleSmall extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      stars: this.props.stars,
      category: this.props.category,
      img: this.props.img
    };
  }

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
      <View style={ModuleStyles.small}>
        <Image source={{ uri: this.state.img }} style={ModuleStyles.smallThumbnail} />
        <View style={ModuleStyles.smallText}>
          <Text style={ModuleStyles.smallTitle}>{this.state.title}</Text>
          <Text style={ModuleStyles.smallCategory}>{this.state.category}</Text>
          <View style={ModuleStyles.stars}>
            { stars }
          </View>
        </View>
      </View>
    );
  }
}
