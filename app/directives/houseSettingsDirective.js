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

var houseSettingsController = function($scope, $mdDialog, $location, settingsService) {

    $scope.mobile = false;

    var url = $location.url();

    if(url === "/settings/admin/housesettings") {
        $scope.mobile=true;
    }

    $scope.houseSettings = Storage.getInstance().getHouseSettings();

    $scope.countries = Storage.getInstance().getCountries();
    
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
    };

};
