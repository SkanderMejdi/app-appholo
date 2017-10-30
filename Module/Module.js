import React from 'react';
import {
  ScrollView,
  Animated,
  View,
  Dimensions,
  Image,
  Text
} from 'react-native';
import Carousel from 'react-native-looped-carousel';

import AppStyles from '../AppStyles.js';
import ModuleStyles from './ModuleStyles.js';
import HomeStyles from '../Home/HomeStyles.js';

import ModuleSmall from '../Module/ModuleSmall.js';
import SearchResult from '../Search/SearchResult.js';

const HEADER_MAX_HEIGHT = 270;
const HEADER_MIN_HEIGHT = 90;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const window = Dimensions.get('window');

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

  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
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

    var module = {
      id: 1,
      title: 'Piano',
      description: 'Jolie description de module',
      category: 'Music',
      img: 'http://eip.epitech.eu/2018/appholo/assets/img/portfolio/03.jpg',
      screenshots: [
        'http://eip.epitech.eu/2018/appholo/assets/img/portfolio/01.jpg',
        'http://eip.epitech.eu/2018/appholo/assets/img/portfolio/02.jpg',
        'http://eip.epitech.eu/2018/appholo/assets/img/portfolio/03.jpg'
      ],
      stars: 4,
      author: 'toto',
      reviews: [
        {
          id: 1,
          author: 'toto',
          text: 'Nath',
          date: '20 dec'
        },
        {
          id: 2,
          author: 'titi',
          text: 'titi',
          date: '21 dec'
        },
        {
          id: 3,
          author: 'tata',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          date: '21 dec'
        }
      ]
    }

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

    var reviewsList = module.reviews.map(function(review){
      return (
        <View key={review.id}>
          <Text>{review.author}</Text>
          <Text>{review.date}</Text>
          <Text>{review.text}</Text>
        </View>
      )
    });

    var self = this;
    var carouselList = module.screenshots.map(function(screenshot) {
      return (
        <View key={screenshot} style={self.state.size}>
          <Image source={{ uri: screenshot }} style={AppStyles.image} />
        </View>
      )
    })

    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });

    const headerPaddingHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT / 3 * 2, 0],
      extrapolate: 'clamp',
    });

    const imageOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE * 2],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });

    return (

      <View style={AppStyles.container}>

        <Animated.View style={[ModuleStyles.topBlock, {height: headerHeight}]}>
          <Animated.Image
            source={{ uri: module.img }}
            style={[AppStyles.image, {opacity: imageOpacity}]} />
          <Animated.View style={{height: headerPaddingHeight}}></Animated.View>
          <View style={ModuleStyles.header}>
            <View style={ModuleStyles.titleWrapper}>
              <Text style={ModuleStyles.title}>{module.title}</Text>
            </View>
            <Text style={ModuleStyles.author}>{module.author}</Text>
          </View>
        </Animated.View>

        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
          )} >

          <View style={ModuleStyles.scrollContent}>

            <View style={AppStyles.block}>
              <Text style={AppStyles.blockTitle}>Description</Text>
              <Text>{module.description}</Text>
            </View>

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

            <View style={AppStyles.block}>
              <Text style={AppStyles.blockTitle}>Reviews</Text>
              <View>
                <Text>{module.stars}</Text>
                <Image source={require('../Assets/star.png')}
                  style={AppStyles.image} />
              </View>
              { reviewsList }
            </View>

            <View style={[AppStyles.block, {marginBottom: 20}]}>
              <Text style={AppStyles.blockTitle}>Similar</Text>
              <ScrollView
                ref={(latestModules) => { this.latestModules = latestModules; }}
                style={ModuleStyles.smallBlock}
                horizontal={true}>
                { modulesList }
              </ScrollView>
            </View>
          </View>

        </ScrollView>

      </View>
    );
  }
}
