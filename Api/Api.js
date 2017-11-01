import ApiUtils from './ApiUtils'

var Api = {

  noNetwork: function() {
    console.log('No network Marthély');
  },

  apiPost: function(url, params) {
    if (!ApiUtils.checkNetwork()) {
      this.noNetwork();
    }
    return fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then(ApiUtils.checkStatus)
    .then(response => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch(e => e)
  },

  apiGet: function(url) {
    if (!ApiUtils.checkNetwork()) {
      this.noNetwork();
    }
    return fetch(url).then(ApiUtils.checkStatus)
    .then(response => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch(e => e)
  },

  login: function(login, password) {
    return this.apiPost(
      'http://192.168.42.202:8080/api/user/authenticate',
      {login: login, password: password}
    )
  },

  modules: function(params) {
    return this.apiPost(
      'http://192.168.42.202:8080/api/modules/listModules',
      params
    )
  },

  module: function(id) {
    return this.apiGet(
      'http://192.168.42.202:8080/api/modules/informations?id='+id
    )
  },

};

export { Api as default };
