import React from 'react';
import { NetInfo, ToastAndroid } from 'react-native';

var ApiUtils = {

  checkStatus: function(response) {
    console.log(response);
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    ToastAndroid.show(
      'Oops, invalid credentials',
      ToastAndroid.SHORT
    );
    return new Response('{"error": "login"}', {
      headers: {'Content-Type': 'application/json'}
    });
  },

  checkNetwork: function() {
    return NetInfo.isConnected.fetch().then(isConnected => {
      return isConnected;
    });
  }

};

export { ApiUtils as default };
