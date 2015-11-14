
var app = angular.module('MusicHistory', ['firebase', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/songs/list', {
      templateUrl: 'partials/song-list.html',
      controller: 'SongListCtrl'
    })
    .when('/songs/new', {
      templateUrl: 'partials/song-form.html',
      controller: 'AddSongCtrl'
    });
}]);

// app.factory('song_service', function($http, $q){
//   var songlist =[];
//   function init(){
//     return $q(function(resolve, reject){
//       $http
//         .get('./javaScripts/songs.json')
//         .success(function(objectFromJSONFile){
//           console.log("objectFromJSONFile", objectFromJSONFile);
//           songlist = objectFromJSONFile.songs;
//           console.log("songlist", songlist);
//           resolve(objectFromJSONFile.songs);
//         }, function(error) {
//           reject(error);
//         } //end error
//       ); //end success
//     }); //end q function
//   }

//   init();

//   function getSongs(){
//     return songlist;
//   }

//   function getSingleSong(id){
//     return songlist.filter(function(song){
//       return song.id === id;
//     })[0];
//   }

//   function addsong(songObj){
//     songlist.push(songObj);
//     return songlist;
//   }
//   return {
//     getSongs : getSongs,
//     getSingleSong : getSingleSong,
//     addsong : addsong
//   };
// });

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
    "song_service",
    "$firebaseArray",
      function($scope, song_service ) {

        $scope.newSong = { title: "", album: "", artist: "" };

        $scope.addSong = function() {
          $scope.songs_list = song_service.addSong({
            title: $scope.newSong.title,
            album: $scope.newSong.album,
            artist: $scope.newSong.artist
          });
        console.log("Addsong", $scope.songs_list);
      };
    }
  ]
);
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



