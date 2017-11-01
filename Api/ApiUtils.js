var ApiUtils = {

  checkStatus: function(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      console.log(response);
    }
  },

  checkNetwork: function() {
    console.log('Marthély');
  }

};

export { ApiUtils as default };
