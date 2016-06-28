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

    $scope.hideDialog = function() {
        $mdDialog.hide();
    };

    $scope.changePin = function(ev) {

        var valid = true;

        $scope.isPinEmpty = false;
        $scope.isNewPinEmpty = false;
        $scope.isNewPinRepeatEmpty = false;

        $scope.pinIsWrong = false;
        $scope.isNewPinTooShort = false;
        $scope.newPinRepeatIsDifferent = false;

        if($scope.pinForm.currentPin.$viewValue === "" || $scope.pinForm.currentPin.$viewValue === undefined) {
            $scope.isPinEmpty = true;
            valid = false;
        }

        if($scope.pinForm.newPin.$viewValue === "" || $scope.pinForm.newPin.$viewValue === undefined) {
            $scope.isNewPinEmpty = true;
            valid = false;
        }


        if($scope.pinForm.newPinRepeat.$viewValue === "" || $scope.pinForm.newPinRepeat.$viewValue === undefined) {
            $scope.isNewPinRepeatEmpty = true;
            valid = false;
        }


        if($scope.pinForm.currentPin.$viewValue !== $scope.user.pin) {
            $scope.pinIsWrong = true;
            valid = false;
        }


        if($scope.pinForm.newPin.$viewValue.length < 4) {
            $scope.isNewPinTooShort = true;
            valid = false;
        }


        if($scope.pinForm.newPinRepeat.$viewValue!== $scope.pinForm.newPin.$viewValue) {
            $scope.newPinRepeatIsDifferent = true;
            valid = false;
        }

        if(valid) {

            $scope.user.pin = $scope.pinForm.newPin.$viewValue;
            Storage.getInstance().saveUser($scope.user);

            var dialog = $mdDialog.alert()
                .title('Einstellungen gespeichert')
                .textContent('Der PIN Code wurde geändert.')
                .ariaLabel('PIN gespeichert')
                .clickOutsideToClose(true)
                .targetEvent(ev)
                .ok('Ok');

            $mdDialog.show(dialog);
        }

    };

};