/**
 * @author Yannic Siebenhaar
 */

mainApp.directive('washingMachineNotification', function () {
    return {
        templateUrl: BASE_URL + "/app/views/notifications/washingMachineNotification.html",
        restrict: "E",
        controller:washingMachineController
    };
});

var washingMachineController = function($scope) {
};

mainApp.directive('weatherNotification', function () {
    return {
        templateUrl: BASE_URL + "/app/views/notifications/weatherNotification.html",
        restrict: "E",
        controller:weatherController
    };
});

var weatherController = function($scope) {
};


mainApp.directive('doorNotification', function () {
    return {
        templateUrl: BASE_URL + "/app/views/notifications/doorNotification.html",
        restrict: "E",
        controller:doorController
    };
});

var doorController = function($scope) {
};


mainApp.directive('ovenNotification', function () {
    return {
        templateUrl: BASE_URL + "/app/views/notifications/ovenNotification.html",
        restrict: "E",
        controller:ovenController
    };
});

var ovenController = function($scope) {

    $scope.plusMinutes = null;

    $scope.add1Min = function() {
        if($scope.plusMinutes === null) {
            $scope.plusMinutes = 0;
        }

        $scope.plusMinutes++;
    };

    $scope.add5Min = function() {
        if($scope.plusMinutes === null) {
            $scope.plusMinutes = 0;
        }

        $scope.plusMinutes += 5;
    };

};



mainApp.directive('notificationBar', function () {
    return {
        templateUrl: BASE_URL + "/app/views/notificationBarView.html",
        restrict: "E",
        controller:notificationBarController
    };
});

var notificationBarController = function($scope) {
};