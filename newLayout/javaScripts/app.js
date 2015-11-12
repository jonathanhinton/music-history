
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

app.controller('SongsCtrl', function($scope, $q, $http){
  // $.ajax('javaScripts/songs.json')
  // .done(function(ajaxSongs){
  //   $scope.songs = ajaxSongs.songs;
  //   console.log("$scope.songs", $scope.songs);
  //   $scope.$apply();
  // });
  return $q(function(resolve, reject){
    $http
      .get('./javaScripts/songs.json')
      .success(function(objectFromJSONFile){
        console.log("objectFromJSONFile", objectFromJSONFile);
        resolve(objectFromJSONFile.songs);
      }, function(error) {
        reject(error);
      }
    )
  })
  .then(function(jsonData){
    console.log("jsonData", jsonData);
    $scope.songs = jsonData;
  });
});


app.controller('AddSongCtrl', function($scope){

  $scope.newSong = {
    artist: "",
    title: "",
    album: ""
  };

  $scope.addSong = function(){
    $scope.songs.$add({
      artist: $scope.newSong.artist,
      title: $scope.newSong.title,
      album: $scope.newSong.album
    });
  };
});

