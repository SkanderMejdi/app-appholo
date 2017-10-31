import React from 'react';
import {
  Text,
  View,
  Button,
  Image,
} from 'react-native';

import ModuleStyles from './ModuleStyles.js';

export default class ModuleList extends React.Component {

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
      <View style={ModuleStyles.list}>
        <Image ref={"List"+this.props.title} source={{ uri: this.props.img }} style={ModuleStyles.listThumbnails} />
        <View style={ModuleStyles.listText}>
          <Text style={ModuleStyles.listTitle}>{this.props.title}</Text>
          <Text style={ModuleStyles.listCategory}>{this.props.category}</Text>
          <View style={ModuleStyles.listButton}>
            <Button
              title="See More"
              onPress={() => this.props.navigate(
                'Module',
                {navigate: this.props.navigate}
              )}
              accessibilityLabel="Learn more about this purple button" />
          </View>
          <View style={ModuleStyles.stars}>
            { stars }
          </View>
        </View>
      </View>
    );
  }
}
