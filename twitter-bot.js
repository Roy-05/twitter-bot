
let twit = require('twit');
let config = require('./config.js');

const T = new twit(config);

const promise = T.get('statuses/user_timeline', {screen_name: 'narendramodi', count: '1'});

promise.then(res =>{
    let id = res["data"][0]["id_str"];
    retweet(id);
});



function retweet(id){
    T.post('statuses/retweet/:id', { id: id }, function (err, data, response) {
        console.log(err)
    });
}