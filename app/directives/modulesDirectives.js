mainApp.directive('multiRoomAudio', function() {
    return {
        controller: "multiRoomAudioCtrl",
        templateUrl: BASE_URL + "/app/views/modules/multiRoomAudioView.html",
        restrict: "E"
    };
});

mainApp.directive('consumer', function() {
    return {
        controller: "consumerCtrl",
        templateUrl: BASE_URL + "/app/views/modules/consumerView.html",
        restrict: "E"
    };
});

mainApp.directive('scene', function() {
    return {
        controller: "sceneCtrl",
        templateUrl: BASE_URL + "/app/views/modules/sceneView.html",
        restrict: "E"
    };
});

mainApp.directive('light', function() {
    return {
        controller: "lightCtrl",
        templateUrl: BASE_URL + "/app/views/modules/lightView.html",
        restrict: "E"
    };
});

mainApp.directive('heater', function() {
    return {
        controller: "heaterCtrl",
        templateUrl: BASE_URL + "/app/views/modules/heaterView.html",
        restrict: "E"
    };
});

mainApp.directive('log', function() {
    return {
        controller: "logCtrl",
        templateUrl: BASE_URL + "/app/views/modules/logView.html",
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

mainApp.directive('oven', function() {
    return {
        controller: "ovenCtrl",
        templateUrl: BASE_URL + "/app/views/modules/ovenView.html",
        restrict: "E"
    };
});

mainApp.directive('weather', function() {
    return {
        controller: "weatherCtrl",
        templateUrl: BASE_URL + "/app/views/modules/weatherView.html",
        restrict: "E"
    };
});

mainApp.directive('blinds', function() {
    return {
        controller: "blindsCtrl",
        templateUrl: BASE_URL + "/app/views/modules/blindsView.html",
        restrict: "E"
    };
});