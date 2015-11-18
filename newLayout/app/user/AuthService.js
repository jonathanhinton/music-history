angular.module('Music.User')
  .factory('Auth', ['$firebaseAuth',
    function($firebaseAuth){
      var ref = new Firebase('https://listenup.firebaseio.com/');
      return $firebaseAuth(ref);
    }
  ]);