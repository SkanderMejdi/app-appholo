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
      'http://192.168.1.154:8080/api/user/authenticate',
      {login: login, password: password}
    )
  },

  modules: async function() {
    return this.apiGet('http://192.168.1.154:8080/api/modules/listModules')
  },

  modulesCategory: function(category) {
    return this.apiPost(
      'http://192.168.1.154:8080/api/modules/listModules',
      {category: category}
    )
  },

  modulesCategory: function(name) {
    return this.apiPost(
      'http://192.168.1.154:8080/api/modules/listModules',
      {name: name}
    )
  },

  module: function(id) {
    return this.apiPost(
      'http://192.168.1.154:8080/api/modules/informations',
      {id: id}
    )
  },

  categories: function(id) {
    return this.apiGet('http://192.168.1.154:8080/api/modules/informations')
  }

};

export { Api as default };
