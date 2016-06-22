mainApp.controller("loginCtrl", function ($scope, $mdDialog, $mdMedia) {

    $scope.users = Storage.getInstance().getUsers();
    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

    $scope.showLoginDialog = function (ev, user) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;

        $mdDialog.show({
            controller: loginDialogCtrl,
            templateUrl: "app/views/loginDialog.html",
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: useFullScreen,
            resolve: {
                user: function () {
                    return user;
                }
            }
        });

    }

});

var loginDialogCtrl = function ($scope, $mdDialog, user) {
    $scope.user = user;

    $scope.login = function () {

        console.log($scope.pin);

        if ($scope.pin == "1234") {
            window.location.href = "rooms.html?user=" + $scope.user.id;
        }
    }
};