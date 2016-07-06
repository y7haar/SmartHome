/**
 * @author Yannic Siebenhaar
 */


mainApp.directive('blindsSettings', function () {
    return {
        templateUrl: BASE_URL + "/app/views/settings/modules/blindsSettingsView.html",
        restrict: "E"
    };
});


mainApp.directive('doorSettings', function () {
    return {
        templateUrl: BASE_URL + "/app/views/settings/modules/doorSettingsView.html",
        restrict: "E",
        controller: doorSettingsController
    };
});

function doorSettingsController($scope, $mdDialog) {

    $scope.notifications = ["Klingeln", "Öffnen der Tür", "Sperren der Tür"];
    $scope.selected = [1];

    $scope.volTalk = 50;
    $scope.volHear = 60;

    $scope.check1 = true;
    $scope.check3 = true;

    $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) {
            list.splice(idx, 1);
        }
        else {
            list.push(item);
        }
    };
    
    $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
    };
    
    $scope.isIndeterminate = function() {
        return ($scope.selected.length !== 0 &&
        $scope.selected.length !== $scope.notifications.length);
    };
    
    $scope.isChecked = function() {
        return $scope.selected.length === $scope.notifications.length;
    };
    
    $scope.toggleAll = function() {
        if ($scope.selected.length === $scope.notifications.length) {
            $scope.selected = [];
        } else if ($scope.selected.length === 0 || $scope.selected.length > 0) {
            $scope.selected = $scope.notifications.slice(0);
        }
    };


    $scope.close = function() {
        $mdDialog.hide();
    }
}

mainApp.directive('multiRoomAudioSettings', function () {
    return {
        templateUrl: BASE_URL + "/app/views/settings/modules/multiRoomAudioSettingsView.html",
        restrict: "E"
    };
});

mainApp.directive('ovenSettings', function () {
    return {
        templateUrl: BASE_URL + "/app/views/settings/modules/ovenSettingsView.html",
        restrict: "E"
    };
});

mainApp.directive('washingMachineSettings', function () {
    return {
        templateUrl: BASE_URL + "/app/views/settings/modules/washingMachineSettingsView.html",
        restrict: "E"
    };
});

