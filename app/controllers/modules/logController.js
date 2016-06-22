/**
 * Created by AlexK on 22.06.2016.
 */


mainApp.controller("logCtrl", function ($scope) {


    $scope.users = Storage.getInstance().getUsers();

});