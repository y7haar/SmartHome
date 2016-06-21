mainApp.controller("toolbarCtrl", function ($scope) {

    $scope.openUserMenu = function() {
        alert("lol");
    };

    var userId = parseInt(getUrlParameterByName("user"));

    $scope.user = Storage.getInstance().getUserById(userId);

    console.log(userId);

});