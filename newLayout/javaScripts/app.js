
var app = angular.module('MusicHistory', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/songs/list', {
      templateUrl: 'partials/song-list.html',
      controller: 'SongsCtrl'
    })
    .when('/songs/new', {
      templateUrl: 'partials/song-form.html',
      controller: 'AddSongCtrl'
    });
}]);

// app.controller('SongListCtrl', [
//   "$scope",
//   "song_service",
//   function($scope, song_service) {
//     song_service.getSongs().then(function(data){
//       $scope.song_list = data;
//       console.log($scope.song_list);
//     })
//   }
//   ])

app.controller('SongsCtrl', function($scope){
  $.ajax('javaScripts/songs.json')
  .done(function(ajaxSongs){
    $scope.songs = ajaxSongs.songs;
    console.log("$scope.songs", $scope.songs);
    $scope.$apply();
  });
});

