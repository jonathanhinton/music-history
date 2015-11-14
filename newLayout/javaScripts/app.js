
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
  "$routeParams",
  "$firebaseArray",
    function($scope, $routeParams, $songsArray){
      $scope.songToDelete = {};
      $scope.songId = $routeParams.songId;

      var ref = new Firebase("https://listenup.firebaseio.com/songs");

      $scope.song_list = $songsArray(ref);
      console.log("$scope.song_list", $scope.song_list);

      $scope.rmSong = function(song){
        console.log("id", song.$id);
        $scope.song_list.$remove(song);
      };
    }
  ]
);

app.controller('AddSongCtrl',
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

app.controller('SongDetailCtrl',
  [
    "$scope",
    "$routeParams",
    "$firebaseArray",
    function($scope, $routeParams, $songsArray){
      $scope.selectedSong = {};
      $scope.songId = $routeParams.songId;

      var ref = new Firebase("https://listenup.firebaseio.com/songs");

      $scope.songs = $songsArray(ref);

      $scope.songs.$loaded()
      .then(function(){
        $scope.selectedSong = $scope.songs.$getRecord($scope.songId);
        console.log("$scope.selectedSong", $scope.selectedSong);
      })
      .catch(function(error){
        console.log("error");
      });
    }
  ]
);



