mainApp.controller("loginCtrl", function ($scope) {

    $scope.users = Storage.getInstance().getUsers();

});