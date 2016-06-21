/**
 * @author Yannic Siebenhaar
 */

mainApp.controller("multiRoomAudioCtrl", function ($scope) {

    $scope.tracks = [
        {
            title: "Californication",
            album: "Californication",
            artist: "Red Hot Chili Peppers",
            coverUrl: "assets/img/album_covers/cover_1.jpg"
        },

        {
            title: "This World",
            album: "Selah Sue",
            artist: "Selah Sue",
            coverUrl: "assets/img/album_covers/cover_3.jpg"
        },

        {
            title: "Sound Of Muzak",
            album: "In Absentia",
            artist: "Porcupine Tree",
            coverUrl: "assets/img/album_covers/cover_2.jpg"
        },

        {
            title: "Come As You Are",
            album: "Nevermind",
            artist: "Nirvana",
            coverUrl: "assets/img/album_covers/cover_0.jpg"
        },

        {
            title: "Highway Song",
            album: "Steal This Album",
            artist: "System Of A Down",
            coverUrl: "assets/img/album_covers/cover_4.jpg"
        }
    ];


    $scope.currentTrackIndex = parseInt(Math.random() * $scope.tracks.length);
    $scope.currentTrack = $scope.tracks[$scope.currentTrackIndex];

    $scope.volume = parseInt(Math.random() * 100);
    $scope.timeLeftMin = 3;
    $scope.timeLeftSec = 40;

    $scope.timeMin = 4;

    $scope.progress = ($scope.timeMin - $scope.timeLeftMin - (1/60) * $scope.timeLeftSec) / $scope.timeMin * 100;

    $scope.timeLeftSecF = $scope.timeLeftSec;
    $scope.isPlaying = true;

    $scope.isShuffle = false;
    $scope.isRepeat = false;

    $scope.togglePlay = function() {
        $scope.isPlaying = !$scope.isPlaying;
    };

    function resetTime() {
        $scope.timeMin = 3 + parseInt(Math.random() * 2);
        $scope.timeLeftMin = $scope.timeMin;
        $scope.timeLeftSec = 0;
        $scope.timeLeftSecF = "00";
    }

    $scope.nextTrack = function() {
        $scope.currentTrackIndex = ($scope.currentTrackIndex + 1) % $scope.tracks.length;
        $scope.currentTrack = $scope.tracks[$scope.currentTrackIndex];

        resetTime();
    };


    $scope.previousTrack = function() {
        $scope.currentTrackIndex = mod(($scope.currentTrackIndex - 1), $scope.tracks.length);
        $scope.currentTrack = $scope.tracks[$scope.currentTrackIndex];

        resetTime();
    };

    $scope.toggleShuffle = function() {
        $scope.isShuffle = !$scope.isShuffle;
    };

    $scope.toggleRepeat = function() {
        $scope.isRepeat = !$scope.isRepeat;
    };



    setInterval(function() {
        if(! $scope.isPlaying)
            return;

        $scope.timeLeftSecF = parseInt($scope.timeLeftSec);

        if($scope.timeLeftSec < 10) {
            $scope.timeLeftSecF = "0" + $scope.timeLeftSecF;
        }

        if($scope.timeLeftMin > 0 || $scope.timeLeftSec > 0) {

            $scope.timeLeftSec -=0.1;

            if($scope.timeLeftSec === 0) {
                $scope.timeLeftMin--;
            }

            else if($scope.timeLeftSec < 0) {
                $scope.timeLeftSec = 60 + $scope.timeLeftSec;
                $scope.timeLeftMin--;
            }

            $scope.progress = ($scope.timeMin - $scope.timeLeftMin - (1/60) * $scope.timeLeftSec) / $scope.timeMin * 100;
        }
    }, 100);

});