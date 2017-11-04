import React from 'react';
import {
  ScrollView,
  Animated,
  View,
  Image,
  Text,
  ActivityIndicator
} from 'react-native';

import AppStyles from '../AppStyles.js';
import ModuleStyles from './ModuleStyles.js';
import HomeStyles from '../Home/HomeStyles.js';

import ModuleUtils from './ModuleUtils.js';
import Api from '../Api/Api.js';
import ModuleSmall from './ModuleSmall.js';
import HomeCarousel from '../Home/HomeCarousel.js';
import SearchResult from '../Search/SearchResult.js';

const HEADER_MAX_HEIGHT = 270;
const HEADER_MIN_HEIGHT = 90;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

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
      isLoading: true
    };
  }

  buildReviews() {
    if (module.commentary != 0) {
      return (
        <View style={AppStyles.logMessageBox}>
          <Text style={AppStyles.logMessage}>Pas de commentaires</Text>
        </View>
      );
    }
    return this.state.module.commentary.map(function(review){
      return (
        <View style={ModuleStyles.review} key={review._id}>
          <Text style={ModuleStyles.reviewAuthor}>{review.from}</Text>
          <Text style={ModuleStyles.reviewDate}>{review.date}</Text>
          <Text style={ModuleStyles.reviewText}>{review.content}</Text>
        </View>
      )
    });
  }

  handleSimilar(modules, module) {
    for (var i = 0; i < modules.length; i++) {
      if (modules[i]._id == module._id) {
        modules.splice(i, 1);
        break;
      }
    }
    if (modules.length == 0) {
      return (
        <View style={AppStyles.logMessageBox}>
          <Text style={AppStyles.logMessage}>Pas de modules similaires</Text>
        </View>
      )
    }
    return ModuleUtils.buildSmall(modules, this)
  }

  componentDidMount() {
    var self = this;
    Api.module(this.props.navigation.state.params.id)
    .then(function(module) {
      if (!module.error) {
        Api.modules({theme: module.theme})
        .then(function(modules) {
          if (!modules.error) {
            self.setState({
              isLoading: false,
              module: module,
              modules: self.handleSimilar(modules, module)
            })
          } else { self.props.navigation.navigate('Error', {error:module.error}) }
        })
      } else { self.props.navigation.navigate('Error', {error:modules.error}) }
    })
  }

  render() {

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

    if (this.state.isLoading) {
      return (
        <View style={AppStyles.loadingBox}>
          <ActivityIndicator size="large" />
        </View>
      );
    } else if (this.state.isLoading == -1) {
      return (
        <View style={AppStyles.loadingBox}>
          <Text>Tototo</Text>
        </View>
      );
    }

    return (

      <View style={AppStyles.container}>

        <Animated.View style={[ModuleStyles.topBlock, {height: headerHeight}]}>
          <Animated.Image
            source={{
              uri: 'https://eip.epitech.eu/2018/appholo/'+this.state.module.path
            }}
            style={[AppStyles.image, {opacity: imageOpacity}]} />
          <Animated.View style={{height: headerPaddingHeight}}></Animated.View>
          <View style={ModuleStyles.header}>
            <View style={ModuleStyles.titleWrapper}>
              <Text style={ModuleStyles.title}>{this.state.module.name}</Text>
            </View>
            <Text style={ModuleStyles.author}>{this.state.module.author}</Text>
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
              <Text>{this.state.module.description}</Text>
            </View>

            <HomeCarousel imgs={this.state.module.screenshots.map(function(img) {
                return img.path
              })} />

            <View style={AppStyles.block}>
              <Text style={AppStyles.blockTitle}>Reviews</Text>
              <View style={ModuleStyles.starReviews}>
                <Text style={ModuleStyles.starReviewsText}>{
                    ModuleUtils.getStars(this.state.module.commentary)
                  }</Text>
                  <Image source={require('../Assets/star.png')}
                    style={[AppStyles.image, ModuleStyles.starReviewsImage]} />
                </View>
                { this.buildReviews() }
              </View>

              <View style={[AppStyles.block, {marginBottom: 20}]}>
                <Text style={AppStyles.blockTitle}>Similar</Text>
                <ScrollView
                  ref={(latestModules) => { this.latestModules = latestModules; }}
                  style={ModuleStyles.smallBlock}
                  horizontal={true}>
                  { this.state.modules }
                </ScrollView>
              </View>
            </View>

          </ScrollView>

        </View>
      );
    }
  }
