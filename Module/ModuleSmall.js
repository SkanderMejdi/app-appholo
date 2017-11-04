import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

import ModuleStyles from './ModuleStyles.js';
import ModuleUtils from './ModuleUtils.js';

export default class ModuleSmall extends React.Component {

  render() {

    var stars = ModuleUtils.stars(this.props.commentariy);

    return (
      <TouchableWithoutFeedback onPress={() => this.props.navigate(
          'Module',
          {navigate: this.props.navigate, id: this.props.id}
        )}>
        <View style={ModuleStyles.small}>
          <Image source={{
              uri: 'https://eip.epitech.eu/2018/appholo/'+this.props.img
            }} style={ModuleStyles.smallThumbnail} />
          <View style={ModuleStyles.smallText}>
            <Text style={ModuleStyles.smallTitle}>{this.props.title}</Text>
            <Text style={ModuleStyles.smallCategory}>{this.props.category}</Text>
            <View style={ModuleStyles.stars}>
              { stars }
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
