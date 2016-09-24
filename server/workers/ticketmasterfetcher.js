var Event = require('.././events/eventHandler.js');
var Request = require('superagent');


module.exports = {

  fetchTM: function () {
    var currentDate = new Date().toJSON().slice(0,10);
    var url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=EHAU7JI8sxVlrnoDKQD0Ylr01o9cdudk&startDateTime=${currentDate}T00:00:00Z&size=500`;
    Request.get(url).then(function(response) {
      console.log('response', response.body._embedded.events.length);
    });
  }


}