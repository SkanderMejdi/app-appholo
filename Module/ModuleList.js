import React from 'react';
import {
  Text,
  View,
  Button,
  Image,
} from 'react-native';

import ModuleStyles from './ModuleStyles.js';
import ModuleUtils from './ModuleUtils.js';

export default class ModuleList extends React.Component {

  render() {

    var stars = ModuleUtils.stars(this.props.commentariy);

    return (
      <View style={ModuleStyles.list}>
        <Image ref={"List"+this.props.title} source={{
            uri: 'http://eip.epitech.eu/2018/appholo/'+this.props.img
          }} style={ModuleStyles.listThumbnails} />
        <View style={ModuleStyles.listText}>
          <Text style={ModuleStyles.listTitle}>{this.props.title}</Text>
          <Text style={ModuleStyles.listCategory}>{this.props.category}</Text>
          <View style={ModuleStyles.listButton}>
            <Button
              title="See More"
              onPress={() => this.props.navigate(
                'Module',
                {navigate: this.props.navigate, id: this.props.id}
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
