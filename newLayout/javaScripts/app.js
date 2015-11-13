
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

app.factory('song_service', function($http, $q){
  var songlist;
  var getSongData = function(){
    return $q(function(resolve, reject){
      $http
        .get('./javaScripts/songs.json')
        .success(function(objectFromJSONFile){
          console.log("objectFromJSONFile", objectFromJSONFile);
          songlist = objectFromJSONFile.songs;
          resolve(objectFromJSONFile.songs);
        }, function(error) {
          reject(error);
        } //end error
      ) //end success
    }); //end q function
  };

  function getSongs(){
    return getSongData();
  }

  function getSingleSong(id){
    return song_list.filter(function(song){
      return song.id === id;
    })[0];
  }

  function addsong(songObj){

  }
  return {
    getSongs : getSongs,
    getSingleSong : getSingleSong,
    addsong : addsong
  };
});

app.controller('SongsCtrl', [
  "$scope",
  "song_service",
  function($scope, song_service) {
    song_service.getSongs().then(function(data){
      $scope.song_list = data;
      console.log($scope.song_list);
    }).catch(function(){
      $scope.error = "Songs could not be loaded";
    })
  }
  ]);

// app.controller('SongsCtrl', function($scope, $q, $http){
//   // $.ajax('javaScripts/songs.json')
//   // .done(function(ajaxSongs){
//   //   $scope.songs = ajaxSongs.songs;
//   //   console.log("$scope.songs", $scope.songs);
//   //   $scope.$apply();
//   // });
//   .then(function(jsonData){
//     console.log("jsonData", jsonData);
//     $scope.songs = jsonData;
//   }); //end .then statement

// //function for detail
//   $scope.songInfo = function(song){
//     console.log("song", song);
//   };

// }); //end SongsCtrl controller


app.controller('AddSongCtrl', function($scope){

  $scope.newSong = {
    artist: "",
    title: "",
    album: ""
  };

  $scope.addSong = function(){
    console.log("click");
    $scope.songs.$add({
      artist: $scope.newSong.artist,
      title: $scope.newSong.title,
      album: $scope.newSong.album
    });
  }
});

