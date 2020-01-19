
let twit = require('twit');
let config = require('./config.js');

const T = new twit(config);


T.post('statuses/update', { status: 'test' }, function(err, data, response) {
    console.log(data)
  });