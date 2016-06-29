mainApp.controller("logoutCtrl", function ($scope, $mdDialog, $mdMedia) {
    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

    $scope.showLogoutDialog = function (ev) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;

        $mdDialog.show({
            controller: logoutDialogCtrl,
            templateUrl: "app/views/dialogs/logoutDialog.html",
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: false,
            escapeToClose: false,
            fullscreen: useFullScreen
        });

    }

});

var logoutDialogCtrl = function ($scope, $mdDialog, $state, mainService) {
    $scope.user = mainService.getCurrentUser();

    $scope.logout = function() {
        $state.go("login");

        $mdDialog.hide();
    }
};