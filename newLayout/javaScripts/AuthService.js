angular.module('music.user')
  .factory('Auth', ['$firebaseAuth',
    function($firebaseAuth){
      var ref = new Firebase('https://listenup.firebaseio.com/');
      return $firebaseAuth(ref);
    }
  ]);