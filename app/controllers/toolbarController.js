mainApp.controller("toolbarCtrl", function ($scope) {
    var userId = parseInt(getUrlParameterByName("user"));
    $scope.user = Storage.getInstance().getUserById(userId);

    $scope.openUserMenu = function() {
        alert("lol");
    };
});