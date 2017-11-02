import React from 'react';
import {
  Text,
  ScrollView,
  Image,
  View,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-looped-carousel';

import HomeStyles from './HomeStyles.js';
import AppStyles from '../AppStyles.js';

const window = Dimensions.get('window');

export default class HomeCarousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      size: this.getSize(window),
    };
  }

  getSize(window) {
    if (window.width < window.height) {
      height = window.height / 4;
      width = window.width - 20;
    } else {
      height = window.height / 2;
      width = window.width - 20;
    }
    return {width, height};
  }

  onLayout(e) {
    window = Dimensions.get('window');
    this.setState({
      size: this.getSize(window),
    });
  }

  render() {

    var self = this;
    var carouselList = this.props.imgs.map(function(img, index) {
      return (
        <View key={index} style={self.state.size}>
          <Image source={{
              uri: 'http://eip.epitech.eu/2018/appholo/'+img
            }} style={AppStyles.image} />
        </View>
      )
    })

    return (
      <View style={HomeStyles.blockCarousel} onLayout={this.onLayout.bind(this)}>
        <Text style={HomeStyles.blockTitleCarousel}>Pictures</Text>
        <Carousel
          delay={2000}
          style={this.state.size}
          autoplay
          pageInfo>
          { carouselList }
        </Carousel>
      </View>
    );
  }
}
