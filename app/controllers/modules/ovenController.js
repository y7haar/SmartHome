/**
 * @author Yannic Siebenhaar
 */

mainApp.controller("ovenCtrl", function ($scope, $interval, $mdDialog) {
    $scope.ovenModes = ["Ober-/Unterhitze", "Umluft", "Grillen"];
    $scope.minTemp = 50;
    $scope.maxTemp = 200;

    $scope.ovenMode = $scope.ovenModes[1];

    $scope.temperature = $scope.minTemp + 10 * parseInt(Math.random() * (($scope.maxTemp - $scope.minTemp) / 10));

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

    $scope.plus5Min = function() {
      $scope.timeMin += 5;
        $scope.timeLeftMin +=5;
    };

    $scope.minus5Min = function() {
        $scope.timeMin -= 5;
        $scope.timeLeftMin -=5;
    };

    $scope.openSettings = function (ev) {
        $mdDialog.show({
            template: "<" + "oven-settings" + " class='module-settings'></" + "oven-settings" + ">",
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