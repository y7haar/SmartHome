/**
 * @author Yannic Siebenhaar
 */

mainApp.directive('roomSettings', function () {
    return {
        templateUrl: BASE_URL + "/app/views/settings/roomSettingsView.html",
        restrict: "E",
        controller: roomSettingsController
    };
});

var roomSettingsController = function ($scope, $mdMedia, $mdDialog, $stateParams, settingsService) {
    var sizeXs = $mdMedia('xs');

    $scope.mobile = false;

    if (!sizeXs) {
        settingsService.setSelectedRoomIndex(0);
    }

    var id = $stateParams.roomId;

    if (id !== undefined) {
        $scope.mobile = true;
        settingsService.setSelectedRoomWithHouseIndex(id);
    }

    $scope.selectedRoom = function () {
        return settingsService.selectedRoomWithHouse;
    };

    $scope.selectedRoomIndex = function () {
        return settingsService.selectedRoomWithHouseIndex;
    };

    $scope.getSelectedModuleIndex = function () {
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
        mapping["light"] = "light-settings";
        mapping["heater"] = "heater-settings";
        mapping["consumer"] = "consumer-settings";
        mapping["log"] = "log-settings";
        mapping["scene"] = "scene-play-settings";
        mapping["photovoltaic"] = "photovoltaic-settings";


        $mdDialog.show({
            template: "<" + mapping[module.name] + " class='module-settings'></" + mapping[module.name] + ">",
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: true
        });

    };
};
