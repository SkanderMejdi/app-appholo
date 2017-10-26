import React from 'react';
import {
  Text,
  ScrollView,
} from 'react-native';
import HomeStyles from './HomeStyles.js';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HomeCategories extends React.Component {

  componentDidMount() {
    setTimeout(() => {this.categories.scrollTo({x: -30}) }, 1) // scroll view position fix
  }

  render() {

    var categories = [
      "Maths", "Astronomy", "Music", "History", "Cinema", 'Arts', "Society"
    ];
    var categoriesList = categories.map(function(category){
      return (
        <Text
          style={HomeStyles.filter}
          key={category} >
          {category}
        </Text>
      )
    });

    return (
      <ScrollView
        ref={(categories) => { this.categories = categories; }}
        style={HomeStyles.filterBlock}
        showsHorizontalScrollIndicator={false}
        horizontal={true}>
        { categoriesList }
      </ScrollView>
    );
  }
}
