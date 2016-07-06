/**
 * @author Yannic Siebenhaar
 */

mainApp.controller("doorCtrl", function ($scope, $timeout) {

    console.log("door");

    $scope.isLocked = false;
    $scope.isOpen = false;

    $scope.isLight = false;
    $scope.isPhone = false;

    $scope.toggleLock = function() {
        $scope.isLocked = !$scope.isLocked;
    };

    $scope.timeoutLight = function() {
        $scope.isLight = true;

        $timeout(function() {
            $scope.isLight = false;
        }, 10000);
    };

    $scope.timeoutOpen = function() {
        $scope.isOpen = true;

        $timeout(function() {
            $scope.isOpen = false;
        }, 3000);
    };

    $scope.togglePhone = function() {
        $scope.isPhone = !$scope.isPhone;
    }


});