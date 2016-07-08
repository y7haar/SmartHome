/**
 * @author Andreas Kurt Rohne
 */

mainApp.controller("doorCtrl", function ($scope, $timeout, $mdDialog) {
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
    };

    $scope.openSettings = function (ev) {
        $mdDialog.show({
            template: "<" + "door-settings" + " class='module-settings'></" + "door-settings" + ">",
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: true
        });
    };


});