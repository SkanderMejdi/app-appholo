import React from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native';
import HomeStyles from './HomeStyles.js';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HomeCategories extends React.Component {

  render() {

    var categories = [
      "Maths", "Astronomy", "Music", "History", "Cinema", 'Arts', "Society"
    ];
    var self = this;
    var categoriesList = categories.map(function(category, index){
      return (
        <TouchableWithoutFeedback
          key={index}
          onPress={() => self.props.navigate(
            'Search',
            {theme: category}
          )}>
          <View style={HomeStyles.filter}>
            <Text style={HomeStyles.filterText}>
              {category}
            </Text>
          </View>
        </TouchableWithoutFeedback>
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
