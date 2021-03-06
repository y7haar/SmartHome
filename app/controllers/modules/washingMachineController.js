/**
 * @author Andreas Kurt Rohne
 */

mainApp.controller("washingMachineCtrl", function ($scope, $interval, $mdDialog) {
    $scope.rotations = [];
    $scope.minTemp = 30;
    $scope.maxTemp = 100;

    $scope.temperature = $scope.minTemp + 10 * parseInt(Math.random() * (($scope.maxTemp - $scope.minTemp) / 10));

    for (var i = 1000; i < 1800; i += 200) {
        $scope.rotations.push(i + " U/min");
    }

    $scope.rotation = $scope.rotations[2];
    $scope.timeLeftMin = 34;
    $scope.timeLeftSec = 10;

    $scope.timeMin = 120;
    $scope.progress = ($scope.timeMin - $scope.timeLeftMin - (1 / 60) * $scope.timeLeftSec) / $scope.timeMin * 100;

    $scope.timeLeftSecF = $scope.timeLeftSec;

    $scope.isRunning = true;

    $scope.stopMachine = function () {
        $scope.isRunning = false;
    };

    $scope.continueMachine = function () {
        $scope.isRunning = true;
    };

    $scope.openSettings = function (ev) {
        $mdDialog.show({
            template: "<" + "washing-machine-settings" + " class='module-settings'></" + "washing-machine-settings" + ">",
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: true
        });
    };

    $interval(function () {
        if (!$scope.isRunning) {
            return;
        }

        $scope.timeLeftSecF = $scope.timeLeftSec;

        if ($scope.timeLeftSec < 10) {
            $scope.timeLeftSecF = "0" + $scope.timeLeftSec;
        }

        if ($scope.timeLeftMin > 0 || $scope.timeLeftSec > 0) {

            $scope.timeLeftSec -= 1;

            if ($scope.timeLeftSec < 0) {
                $scope.timeLeftSec = 60 + $scope.timeLeftSec;
                $scope.timeLeftMin--;
            }

            else if ($scope.timeLeftSec === 0) {
                $scope.timeLeftMin--;
            }

            $scope.progress = ($scope.timeMin - $scope.timeLeftMin - (1 / 60) * $scope.timeLeftSec) / $scope.timeMin * 100;
        }
    }, 1000);
});