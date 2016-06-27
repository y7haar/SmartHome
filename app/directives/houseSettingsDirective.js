/**
 * @author Yannic Siebenhaar
 */

mainApp.directive('houseSettings', function () {
    return {
        templateUrl: BASE_URL + "/app/views/settings/houseSettingsView.html",
        restrict: "E",
        controller:houseSettingsController
    };
});

var houseSettingsController = function($scope, $mdDialog, settingsService) {
    $scope.houseSettings = Storage.getInstance().getHouseSettings();

    $scope.countries = ["Deutschland", "Kaufland", "Schlaraffenland"];
    
    $scope.saveSettings = function(ev) {
        Storage.getInstance().saveHouseSettings($scope.houseSettings);

        var dialog = $mdDialog.alert()
            .title('Einstellungen gespeichert')
            .textContent('Die Hauseinstellungen wurden gespeichert.')
            .ariaLabel('Einstellungen gespeichert')
            .clickOutsideToClose(true)
            .targetEvent(ev)
            .ok('Ok');

        $mdDialog.show(dialog);
    }
};
