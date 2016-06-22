/**
 * @author Alexander Kern
 */

mainApp.controller("lightCtrl", function ($scope){

    var defaultColorOptions = {
        label: "Color",
        icon: "brush",
        default: "rgb(255,255,0)",
        genericPalette: false,
        history: false,
        sliders:false
    };

    $scope.lights = [
        {
            id: 0,
            name: "Decken Lampe",
            isOn: false,
            dimState: 1,
            isColorAble: false
        },
        {
            id: 1,
            name: "L2",
            isOn: true,
            dimState: 10,
            isColorAble: false
        },
        {
            id: 2,
            name: "L3C",
            isOn: false,
            dimState: 100,
            isColorAble: true,
            color:""
        },
        {
            id: 3,
            name: "L4C",
            isOn: false,
            dimState: 55,
            isColorAble: true,
            color:"#FF1212"
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