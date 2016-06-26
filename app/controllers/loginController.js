mainApp.controller("loginCtrl", function ($scope, $mdDialog, $mdMedia) {

    $scope.users = Storage.getInstance().getUsers();
    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

    $scope.showLoginDialog = function (ev, user) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;

        $mdDialog.show({
            controller: loginDialogCtrl,
            templateUrl: "app/views/dialogs/loginDialog.html",
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

var loginDialogCtrl = function ($scope, $mdDialog, $state, user, mainService) {
    $scope.user = user;

    $scope.login = function () {
        if ($scope.pin == "1234") {

            mainService.setCurrentUser(user);

            $state.go("rooms");

            $mdDialog.hide();
        }
    };

    $scope.hideLoginDialog = function() {
        $mdDialog.hide();
    }
};