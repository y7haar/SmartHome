mainApp.directive('multiRoomAudio', function() {
    return {
        controller: "multiRoomAudioCtrl",
        templateUrl: BASE_URL + "/app/views/modules/multiRoomAudioView.html",
        restrict: "E"
    };
});


mainApp.directive('door', function() {
    return {
        controller: "doorCtrl",
        templateUrl: BASE_URL + "/app/views/modules/doorView.html",
        restrict: "E"
    };
});

mainApp.directive('washingMachine', function() {
    return {
        controller: "washingMachineCtrl",
        templateUrl: BASE_URL + "/app/views/modules/washingMachineView.html",
        restrict: "E"
    };
});