import ApiUtils from './ApiUtils'

var Api = {

  noNetwork: function() {
    return (new Promise((resolve, reject) => {
      resolve({error: 'no network'});
    }))
  },

  apiPost: function(url, params) {
    return ApiUtils.checkNetwork().then(isConnected => {
      if (!isConnected) {
        return this.noNetwork();
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
    })
  },

  apiGet: function(url) {
    return ApiUtils.checkNetwork().then(isConnected => {
      if (!isConnected) {
        return this.noNetwork();
      }
      return fetch(url).then(ApiUtils.checkStatus)
      .then(response => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch(e => e)
    })
  },

  login: function(login, password) {
    return this.apiPost(
      'http://163.5.84.205/api/user/authenticate',
      {login: login, password: password}
    )
  },

  modules: function(params) {
    return this.apiPost(
      'http://163.5.84.205/api/modules/listModules',
      params
    )
  },

  module: function(id) {
    return this.apiGet(
      'http://163.5.84.205/api/modules/informations?id='+id
    )
  },

};

export { Api as default };
