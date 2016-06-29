/**
 * Created by AlexK on 29.06.2016.
 */

mainApp.controller("sceneCtrl", function ($scope) {

    $scope.currentScene = 0;
    $scope.hasSceneStarted = false;
    $scope.currentSceneDuration=  0;
    $scope.progress = 100;
    //$scope.progress = ($scope.timePassedMin + (1/60) * $scope.timePassedSec) / $scope.timeMin * 100
    $scope.hasSceneDuration = true;

    $scope.timePassedMin = 0;
    $scope.timePassedSec = 0;
    $scope.timeMin = 0;
    $scope.timePassedSecF = $scope.timePassedSec;
    
    $scope.scenes = [
        {
            id:0,
            name:"Party",
            infos:["Alle Lichter An",
                "Licht1 Dimmen auf 50%",
                "Licht2 Dimmen auf 100%",
                "Licht2 Farbe auf Rot",
                "Licht3 Dimmen auf 80%",
                "Licht3 Farbe auf Blau"
                ],
            duration: 0
        },
        {
            id:1,
            name:"Chillen",
            infos:["Alle Lichter An",
                "Licht1 Dimmen auf 25%",
                "Licht2 Dimmen auf 25%",
                "Licht3 Dimmen auf 25%",
                "Heizung auf 25°"
            ],
            duration: 60
        }];

    var interval;

    $scope.startScene = function () {
        $scope.hasSceneStarted = true;
        $scope.progress = 100;
        var duration = $scope.scenes[$scope.currentScene].duration;
        if(duration>0){
            $scope.hasSceneDuration = true;
            $scope.timeMin = duration;
        }
        else
            $scope.hasSceneDuration = false;

        //startAnimation();

    };

    $scope.stopScene = function () {
        $scope.hasSceneStarted = false;
        $scope.progress = 0;
        $scope.timeMin = 1;

        //stopAnimation();
    };

    function startAnimation() {
        $interval.cancel(interval);

        interval = $interval(function() {
            $scope.timePassedSecF = parseInt($scope.timePassedSec);

            if($scope.timePassedSecF < 10) {
                $scope.timePassedSecF = "0" + $scope.timePassedSecF;
            }

            if($scope.timePassedMin < $scope.timeMin) {

                $scope.timePassedSec +=1;

                if($scope.timePassedSec >= 60) {
                    $scope.timePassedMin++;
                    $scope.timePassedSec = 0;
                }

                $scope.progress = ($scope.timePassedMin + (1/60) * $scope.timePassedSec) / $scope.timeMin * 100;
            }

            else {
                $scope.nextTrack();
            }
        }, 1000);
    }

    function stopAnimation() {
        $interval.cancel(interval);
    }



});