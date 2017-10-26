import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
  LayoutAnimation,
} from 'react-native';

import ModuleStyles from './ModuleStyles.js';

export default class ModuleList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      stars: this.props.stars,
      category: this.props.category,
      img: this.props.img,
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
      <View style={ModuleStyles.list}>
        <Image ref={"List"+this.state.title} source={{ uri: this.state.img }} style={ModuleStyles.listThumbnails} />
        <View style={ModuleStyles.listText}>
          <Text style={ModuleStyles.listTitle}>{this.state.title}</Text>
          <Text style={ModuleStyles.listCategory}>{this.state.category}</Text>
          <View style={ModuleStyles.listButton}>
            <Button
              title="See More"
              onPress={() => this.props.navigate(
                'Module',
                {}
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
