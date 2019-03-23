const axios = require('axios');

const SEARCH_SHOW_BASE = "http://api.tvmaze.com/search/shows?q=";
const SEARCH_ACTOR_BASE = "http://api.tvmaze.com/search/people?q=";


var searchShow = function (showString){
  //console.log(SEARCH_SHOW_BASE + showString);
  return axios.get(SEARCH_SHOW_BASE + showString);
}

var searchActor = function (actorString){
    //console.log(SEARCH_ACTOR_BASE + actorString);
   return axios.get(SEARCH_ACTOR_BASE + actorString);
}
module.exports = {
    searchActor,
    searchShow
}

