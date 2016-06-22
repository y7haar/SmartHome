/**
 * Created by AlexK on 22.06.2016.
 */


mainApp.controller("logCtrl", function ($scope) {

    $scope.logMsgs = ["[Wohnzimmer][Licht1][Maria] angeschaltet um [Datum]",
        "[Wohnzimmer][Fenster][Maria] geöffnet um [Datum]",
        "[Wohnzimmer][Licht1][Maria] ausgemacht um [Datum]",
        "[Wohnzimmer][Licht2][Maria] angemacht um [Datum]"];

    $scope.users = Storage.getInstance().getUsers();
    $scope.modules = {

    };




    console.dir($scope.users);

});