/**
 * @author Alexander Kern
 */

mainApp.controller("lightCtrl", function ($scope){

    $scope.lights = [
        {
            id: 0,
            name: "L1",
            isOn: false,
            dimState: 1,
            isColorAble: false,
            color: "none"
        },
        {
            id: 1,
            name: "L2",
            isOn: true,
            dimState: 10,
            isColorAble: false,
            color: "none"
        },
        {
            id: 2,
            name: "L3C",
            isOn: false,
            dimState: 100,
            isColorAble: true,
            color: "FF0000"
        },
        {
            id: 3,
            name: "L4C",
            isOn: false,
            dimState: 55.5,
            isColorAble: true,
            color: "00FF00"
        }
    ];

    $scope.lightClicked = function (event, id) {
        $scope.lights[id].isOn = !$scope.lights[id].isOn;
    };

    $scope.colorPicker = function(){
        alert("COLOR PICKER");
    }


});