/**
 * @author Alexander Kern
 */

mainApp.controller("lightCtrl", function ($scope){
    console.log("LICHT TEST");

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


    $scope.lightClicked = function (event, id) {
        $scope.lights[id].isOn = !$scope.lights[id].isOn;
    };

    $scope.colorPicker = function(){
        alert("COLOR PICKER");
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

    $scope.test = function (id) {
        console.log($scope.lights[id].color);
    }



});