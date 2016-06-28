/**
 * @author Yannic Siebenhaar
 */

mainApp.controller("pinChangeCtrl", function ($scope, $mdDialog, $mdMedia) {

    $scope.showPinChangeDialog = function (ev) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));

        $mdDialog.show({
            controller: pinChangeDialogController,
            templateUrl: "app/views/dialogs/pinChangeDialog.html",
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: false,
            espaceToClose: false,
            fullscreen: useFullScreen
        });

    }

});

var pinChangeDialogController = function ($scope, $mdDialog, $state, mainService) {
    $scope.user = mainService.getCurrentUser();

    alert($scope.user.pin);

    $scope.hideDialog = function() {
        $mdDialog.hide();
    };

    $scope.changePin = function(ev) {

        var dialog = $mdDialog.alert()
            .title('Einstellungen gespeichert')
            .textContent('Die Hauseinstellungen wurden gespeichert.')
            .ariaLabel('Einstellungen gespeichert')
            .clickOutsideToClose(true)
            .targetEvent(ev)
            .ok('Ok');

        $mdDialog.show(dialog);

    };

};