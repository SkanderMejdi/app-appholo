import React from 'react';
import {
  StyleSheet,
  Text,
  View,
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
    setTimeout(() => {this.scrollView.scrollTo({x: -30}) }, 1) // scroll view position fix
  }

  inputFocus(val) {
    console.log(val);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({
      focus: val
    });
  }

  render() {
    return (
      <ScrollView style={AppStyles.container}>
        <TextInput style={[AppStyles.input,
        this.state.focus && AppStyles.inputFocus]}
        onFocus={() => this.inputFocus(false)}
        onBlur={() => this.inputFocus(false)}
        underlineColorAndroid={'transparent'}>
          <Text style={{
            margin: 10,
            height: 120,
            paddingLeft: 120
          }}>
            <Icon name="search" size={20} color="#ccc" />
          </Text>
        </TextInput>
        <View style={AppStyles.block}>
          <Text style={AppStyles.blockTitle}>Highlights</Text>
          <Carousel
          delay={2000}
          style={this.state.size}
          autoplay
          pageInfo
          onAnimateNextPage={(p) => console.log(p)}>
            <View style={[{ backgroundColor: '#BADA55' }, this.state.size]}>
              <Text>{this.state.elevation}</Text>
            </View>
            <View style={[{ backgroundColor: 'red' }, this.state.size]}>
              <Text>{this.state.elevation}</Text>
            </View>
            <View style={[{ backgroundColor: 'blue' }, this.state.size]}>
              <Text>{this.state.elevation}</Text>
            </View>
          </Carousel>
        </View>
        <ScrollView
        ref={(scrollView) => { this.scrollView = scrollView; }}
        style={HomeStyles.filterBlock}
        showsHorizontalScrollIndicator={false}
        horizontal= {true}>
          <Text style={HomeStyles.filter}>
            Catégorie 1
          </Text>
          <Text style={HomeStyles.filter}>
            Catégorie 2
          </Text>
          <Text style={HomeStyles.filter}>
            Catégorie 3
          </Text>
          <Text style={HomeStyles.filter}>
            Catégorie 4
          </Text>
          <Text style={HomeStyles.filter}>
            Catégorie 1
          </Text>
          <Text style={HomeStyles.filter}>
            Catégorie 2
          </Text>
          <Text style={HomeStyles.filter}>
            Catégorie 3
          </Text>
          <Text style={HomeStyles.filter}>
            Catégorie 4
          </Text>
          <Text style={HomeStyles.filter}>
            Catégorie 1
          </Text>
          <Text style={HomeStyles.filter}>
            Catégorie 2
          </Text>
          <Text style={HomeStyles.filter}>
            Catégorie 3
          </Text>
          <Text style={HomeStyles.filter}>
            Catégorie 4
          </Text>
        </ScrollView>
        <View style={AppStyles.block}>
          <Text style={AppStyles.blockTitle}>Highlights</Text>
        </View>
      </ScrollView>
    );
  }
}
