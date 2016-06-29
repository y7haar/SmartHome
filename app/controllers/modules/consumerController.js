/**
 * Created by AlexK on 29.06.2016.
 */
mainApp.controller("consumerCtrl", function ($scope) {

    $scope.consumers = [
        {
            id: 0,
            name: "TV",
            isOn: false,
            isSwitchOffAble :true
        },
        {
            id: 1,
            name: "Kühlschrank",
            isOn: true,
            isSwitchOffAble :false
        },
        {
            id: 2,
            name: "Spülmaschine",
            isOn: false,
            isSwitchOffAble :true
        },
        {
            id: 3,
            name: "Kaffe Maschine",
            isOn: false,
            isSwitchOffAble :true
        },
        {
            id: 4,
            name: "Telefon",
            isOn: false,
            isSwitchOffAble :false
        }
    ];


    $scope.consumerClicked = function (id) {
        if($scope.consumers[id].isSwitchOffAble)
            $scope.consumers[id].isOn = !$scope.consumers[id].isOn
    }

});