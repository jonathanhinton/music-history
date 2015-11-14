
var app = angular.module('MusicHistory', ['firebase', 'ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {

    $routeProvider
      .when('/songs/list', {
        templateUrl: 'partials/song-list.html',
        controller: 'SongListCtrl'
      })
      .when('/songs/new', {
        templateUrl: 'partials/song-form.html',
        controller: 'AddSongCtrl'
      })
      .when('/songs/:songId', {
        templateUrl: 'partials/song-detail.html',
        controller: 'SongDetailCtrl'
      })
      .otherwise({redirectTo : '/songs/list'});
}]);

app.controller('SongListCtrl', [
  "$scope",
  "$firebaseArray",
    function($scope, $songsArray){
      var ref = new Firebase("https://listenup.firebaseio.com/songs");
      $scope.song_list = $songsArray(ref);
      console.log("$scope.song_list", $scope.song_list);
    }
  ]
);

app.controller("AddSongCtrl",
  [
    "$scope",
    "$firebaseArray",
      function($scope, $songsArray ) {
        var ref = new Firebase("https://listenup.firebaseio.com/songs");
        $scope.songs = $songsArray(ref)
        $scope.newSong = {};

        $scope.addSong = function() {
          $scope.songs.$add ({
            title: $scope.newSong.title,
            album: $scope.newSong.album,
            artist: $scope.newSong.artist,
            year : $scope.newSong.year
          });
        console.log("Addsong", $scope.songs);
      };
    }
  ]
);



