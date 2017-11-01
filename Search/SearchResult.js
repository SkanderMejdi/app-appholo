import React from 'react';
import {
  View,
  Text
} from 'react-native';

import AppStyles from '../AppStyles.js';
import SearchStyles from './SearchStyles.js';

import Api from '../Api/Api.js';
import ModuleList from '../Module/ModuleList.js';

export default class SearchResult extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {

    var self = this;
    var modulesList = null;
    if (!this.props.modules || this.props.modules.length == 0) {
      modulesList =
      <View style={AppStyles.logMessageBox}>
        <Text style={AppStyles.logMessage}>Pas de résultats</Text>
      </View>
    } else {
      modulesList = this.props.modules.map(function(module) {
        return <ModuleList
          img={module.path}
          id={module._id}
          title={module.name}
          commentary={module.commentary}
          navigate={self.props.navigate}
          category={module.category}
          key={module._id} />;
      });
    }

    return (
      <View style={AppStyles.block}>
        <Text style={AppStyles.blockTitle}>More</Text>
        <View style={SearchStyles.results}>
          { modulesList }
        </View>
      </View>
    )
  }
}
