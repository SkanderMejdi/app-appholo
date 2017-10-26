import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  LayoutAnimation,
  ScrollView,
} from 'react-native';
import Carousel from 'react-native-looped-carousel';

import AppStyles from '../AppStyles.js';
import HomeStyles from './HomeStyles.js';
import ModuleStyles from '../Module/ModuleStyles.js';

import HomeCategories from './HomeCategories.js';
import ModuleSmall from '../Module/ModuleSmall.js';
import SearchField from '../Search/SearchField.js';
import SearchResult from '../Search/SearchResult.js';

const window = Dimensions.get('window');

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

    var self = this;
    var carouselList = modules.map(function(module) {
      return (
        <View key={module.id} style={self.state.size}>
          <Image source={{ uri: module.img }} style={AppStyles.image} />
        </View>
      )
    })

    return (

      <ScrollView style={AppStyles.container}>

        <SearchField navigate={this.props.navigation.navigate} />

        <View style={HomeStyles.blockCarousel} onLayout={this.onLayout.bind(this)}>
          <Text style={HomeStyles.blockTitleCarousel}>Highlights</Text>
          <Carousel
            delay={2000}
            style={this.state.size}
            autoplay
            pageInfo>
            { carouselList }
          </Carousel>
        </View>

        <HomeCategories />

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
