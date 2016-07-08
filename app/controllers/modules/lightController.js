/**
 * @author Alexander Kern
 */

mainApp.controller("lightCtrl", function ($scope, $mdDialog){

    var falseTrue = [false, true];

    $scope.lights = [];

    for(var i = 0;i < $scope.module.components.length;++i) {
        var light = {
            id: i,
            name: $scope.module.components[i].name,
            isOn: falseTrue[Math.round(Math.random())],
            dimState: parseInt(Math.random() * 100),
            isColorAble: $scope.module.components[i].isColorAble
        };

        $scope.lights.push(light);
    }


    /*
    $scope.lights = [
        {
            id: 0,
            name: "Licht 1",
            isOn: false,
            dimState: 1,
            isColorAble: false
        },
        {
            id: 1,
            name: "Licht 2",
            isOn: true,
            dimState: 10,
            isColorAble: true,
            color:""
        },
        {
            id: 2,
            name: "Licht 3",
            isOn: false,
            dimState: 100,
            isColorAble: true,
            color:"#FFA1E4"
        }

    ];

    */


    $scope.lightClicked = function (event, id) {
        $scope.lights[id].isOn = !$scope.lights[id].isOn;
    };

    $scope.allLightOff = function () {
        (function () {
                for (var i = 0; i < $scope.lights.length; ++i) {
                    $scope.lights[i].isOn = false;
                }
            })();
    };

    $scope.allLightOn = function () {
        (function () {
            for (var i = 0; i < $scope.lights.length; ++i) {
                $scope.lights[i].isOn = true;
            }
        })();
    };


    $scope.openSettings = function (ev) {
        $mdDialog.show({
            template: "<" + "light-settings" + " class='module-settings'></" + "light-settings" + ">",
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: true
        });
    };

});