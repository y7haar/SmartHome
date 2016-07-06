/**
 * @author Yannic Siebenhaar
 */

mainApp.directive('roomSettings', function () {
    return {
        templateUrl: BASE_URL + "/app/views/settings/roomSettingsView.html",
        restrict: "E",
        controller:roomSettingsController
    };
});

var roomSettingsController = function($scope, $mdMedia, $mdDialog, settingsService) {

    var sizeXs = $mdMedia('xs');

    if(!sizeXs) {
        settingsService.setSelectedRoomIndex(0);
    }

    $scope.selectedRoom = function(){
        return settingsService.selectedRoomWithHouse;
    };

    $scope.selectedRoomIndex = function() {
        return settingsService.selectedRoomWithHouseIndex;
    };

    $scope.getSelectedModuleIndex = function() {
        return settingsService.selectedModuleIndex;
    };

    $scope.openModuleSettings = function (module, ev) {

        var mapping = {};

        mapping["blinds"] = "blinds-settings";
        mapping["door"] = "door-settings";
        mapping["multiRoomAudio"] = "multi-room-audio-settings";
        mapping["oven"] = "oven-settings";
        mapping["washingMachine"] = "washing-machine-settings";
        mapping["weather"] = "weather-settings";


        $mdDialog.show({
            template: "<" + mapping[module.name] + " class='module-settings'></" + mapping[module.name] + ">",
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: true
        });

    };
};
