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
  TouchableHighlight
} from 'react-native';
import Carousel from 'react-native-looped-carousel';
import AppStyles from '../AppStyles.js';
import HomeStyles from './HomeStyles.js';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    let height = window.height / 4;
    let width = window.width - 20;
    this.state = {
      size: { width, height },
      focus: false
    };
  }

  componentDidMount() {
    setTimeout(() => {this.categories.scrollTo({x: -30}) }, 1) // scroll view position fix
  }

  inputFocus(val) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({
      focus: val
    });
    if (val) {
      this.refs.search.setNativeProps({text: ''});
      this.refs.search.focus();
    }
  }

  render() {
    return (
      <ScrollView style={AppStyles.container}>
        <View style={[
            AppStyles.input,
            !this.state.focus && AppStyles.inputBlur,
            this.state.focus && AppStyles.inputFocus
          ]}>
          <TouchableHighlight
            onPress={() => this.inputFocus(true)}>
            <Icon name="search" size={20} color="#ccc" style={AppStyles.inputIcon} />
          </TouchableHighlight>
          <TextInput ref="search"
            selectTextOnFocus
            onBlur={() => this.inputFocus(false)}
            underlineColorAndroid={'transparent'}
            style={[this.state.focus && {position: 'absolute'}, AppStyles.inputField]}>
          </TextInput>
        </View>
        <View style={AppStyles.block}>
          <Text style={AppStyles.blockTitle}>Highlights</Text>
          <Carousel
            delay={2000}
            style={this.state.size}
            autoplay
            pageInfo
            onAnimateNextPage={(p) => console.log(p)}>
            <View style={this.state.size}>
              <Image source={require('../Assets/01.jpg')} style={AppStyles.image} />
            </View>
            <View style={this.state.size}>
              <Image source={require('../Assets/02.jpg')} style={AppStyles.image} />
            </View>
            <View style={this.state.size}>
              <Image source={require('../Assets/03.jpg')} style={AppStyles.image} />
            </View>
            <View style={this.state.size}>
              <Image source={require('../Assets/04.jpg')} style={AppStyles.image} />
            </View>
          </Carousel>
        </View>
        <ScrollView
          ref={(categories) => { this.categories = categories; }}
          style={HomeStyles.filterBlock}
          showsHorizontalScrollIndicator={false}
          horizontal= {true}>
          <Text style={HomeStyles.filter}>
            Maths
          </Text>
          <Text style={HomeStyles.filter}>
            Astronomy
          </Text>
          <Text style={HomeStyles.filter}>
            Music
          </Text>
          <Text style={HomeStyles.filter}>
            Hitory
          </Text>
          <Text style={HomeStyles.filter}>
            Cinema
          </Text>
          <Text style={HomeStyles.filter}>
            Arts
          </Text>
          <Text style={HomeStyles.filter}>
            Society
          </Text>
        </ScrollView>
        <View style={AppStyles.block}>
          <Text style={AppStyles.blockTitle}>Latest Modules</Text>
            <ScrollView
              ref={(latestModules) => { this.latestModules = latestModules; }}
              style={[HomeStyles.filterBlock, AppStyles.modules]}
              horizontal= {true}>
                <View style={AppStyles.moduleSmall}>
                  <Image source={require('../Assets/03.jpg')} style={AppStyles.thumbnail} />
                  <View style={AppStyles.moduleSmallText}>
                    <Text style={AppStyles.moduleSmallTitle}>Piano</Text>
                    <Text style={AppStyles.moduleSmallCategorie}>Music</Text>
                    <View style={AppStyles.stars}>
                      <Image source={require('../Assets/star.png')} style={AppStyles.star} />
                      <Image source={require('../Assets/star.png')} style={AppStyles.star} />
                      <Image source={require('../Assets/star.png')} style={AppStyles.star} />
                      <Image source={require('../Assets/star.png')} style={AppStyles.star} />
                      <Image source={require('../Assets/no-star.png')} style={AppStyles.star} />
                    </View>
                  </View>
                </View>
                <View style={AppStyles.moduleSmall}>
                  <Image source={require('../Assets/02.jpg')} style={AppStyles.thumbnail} />
                  <View style={AppStyles.moduleSmallText}>
                    <Text style={AppStyles.moduleSmallTitle}>Algebra</Text>
                    <Text style={AppStyles.moduleSmallCategorie}>Maths</Text>
                    <View style={AppStyles.stars}>
                      <Image source={require('../Assets/star.png')} style={AppStyles.star} />
                      <Image source={require('../Assets/star.png')} style={AppStyles.star} />
                      <Image source={require('../Assets/star.png')} style={AppStyles.star} />
                      <Image source={require('../Assets/no-star.png')} style={AppStyles.star} />
                      <Image source={require('../Assets/no-star.png')} style={AppStyles.star} />
                    </View>
                  </View>
                </View>
                <View style={AppStyles.moduleSmall}>
                  <Image source={require('../Assets/01.jpg')} style={AppStyles.thumbnail} />
                  <View style={AppStyles.moduleSmallText}>
                    <Text style={AppStyles.moduleSmallTitle}>Planetarium</Text>
                    <Text style={AppStyles.moduleSmallCategorie}>Astronomy</Text>
                    <View style={AppStyles.stars}>
                      <Image source={require('../Assets/star.png')} style={AppStyles.star} />
                      <Image source={require('../Assets/star.png')} style={AppStyles.star} />
                      <Image source={require('../Assets/star.png')} style={AppStyles.star} />
                      <Image source={require('../Assets/star.png')} style={AppStyles.star} />
                      <Image source={require('../Assets/star.png')} style={AppStyles.star} />
                    </View>
                  </View>
                </View>
            </ScrollView>
        </View>
      </ScrollView>
    );
  }
}
