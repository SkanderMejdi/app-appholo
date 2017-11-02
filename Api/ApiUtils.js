import React from 'react';
import { NetInfo } from 'react-native';

var ApiUtils = {

  checkStatus: function(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      ToastAndroid.show(
        'Oops, an error occured',
        ToastAndroid.SHORT
      );
      return {error: 'status error'}
    }
  },

  checkNetwork: function() {
    return NetInfo.isConnected.fetch().then(isConnected => {
      return isConnected;
    });
  }

};

export { ApiUtils as default };
