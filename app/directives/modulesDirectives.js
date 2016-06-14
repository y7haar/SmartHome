mainApp.directive('multiRoomAudio', function() {
    return {
        templateUrl: BASE_URL + "/app/views/modules/multiRoomAudioView.html",
        restrict: "E"
    };
});


mainApp.directive('door', function() {
    return {
        templateUrl: BASE_URL + "/app/views/modules/doorView.html",
        restrict: "E"
    };
});