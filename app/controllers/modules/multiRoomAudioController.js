/**
 * @author Yannic Siebenhaar
 */

mainApp.controller("multiRoomAudioCtrl", function ($scope, $interval) {

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

    $scope.timePassedMin = 0;
    $scope.timePassedSec = 0;

    $scope.timeMin = 4;

    $scope.progress = ($scope.timePassedMin + (1/60) * $scope.timePassedSec) / $scope.timeMin * 100;

    $scope.timePassedSecF = $scope.timePassedSec;
    $scope.isPlaying = true;

    $scope.isShuffle = false;
    $scope.isRepeat = false;

    $scope.togglePlay = function() {
        $scope.isPlaying = !$scope.isPlaying;
    };

    function resetTime() {
        $scope.timeMin = 3 + parseInt(Math.random() * 2);
        $scope.timePassedMin = 0;
        $scope.timePassedSec = 0;
        $scope.timePassedSecF = "00";
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



    $interval(function() {
        if(! $scope.isPlaying)
            return;

        $scope.timePassedSecF = parseInt($scope.timePassedSec);

        if($scope.timePassedSecF < 10) {
            $scope.timePassedSecF = "0" + $scope.timePassedSecF;
        }

        if($scope.timePassedMin < $scope.timeMin) {

            $scope.timePassedSec +=2;

            if($scope.timePassedSec >= 60) {
                $scope.timePassedMin++;
                $scope.timePassedSec = 0;
            }

            $scope.progress = ($scope.timePassedMin + (1/60) * $scope.timePassedSec) / $scope.timeMin * 100;
        }

        else {
            $scope.nextTrack();
        }
    }, 2000);

});