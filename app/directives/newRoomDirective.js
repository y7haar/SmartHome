/**
 * @author Yannic Siebenhaar
 */

mainApp.directive('newRoom', function () {
    return {
        templateUrl: BASE_URL + "/app/views/settings/newRoomView.html",
        restrict: "E",
        scope: {
            "room":"="
        },
        controller:newRoomController
    };
});

var newRoomController = function($scope, $mdDialog, $mdMedia, settingsService) {
    $scope.roomTypes = Storage.getInstance().getRoomTypes();

    $scope.roomTypesByName = {};

    for(var i = 0;i < $scope.roomTypes.length;++i) {
        $scope.roomTypesByName[$scope.roomTypes[i].name] = $scope.roomTypes[i].iconUrl;
    }

    $scope.getBarTitle = function() {
        return ($scope.room !== undefined) ? $scope.room.name : "Neuer Raum";
    };

    $scope.saveNewRoom = function() {
        $scope.room.iconUrl = $scope.roomTypesByName[$scope.room.type];

        console.log($scope.room);

        if(! settingsService.editingRoom) {
            settingsService.rooms.push($scope.room);
        }


        settingsService.saveAllRooms();
    };


    $scope.deleteModule = function(index, ev) {
        var confirm = $mdDialog.confirm()
            .title('Modul löschen?')
            .textContent('Soll das Modul ' + "'" + $scope.room.modules[index].displayName + "'" + ' wirklich gelöscht werden?')
            .ariaLabel('Löschen bestätigen')
            .targetEvent(ev)
            .clickOutsideToClose(true)
            .ok('Modul löschen')
            .cancel('Abbrechen');

        $mdDialog.show(confirm).then(function () {
            $scope.room.modules.splice(index, 1);

            settingsService.updateRoomModules();
            settingsService.saveAllRooms();

        }, function () {
        });
    };

    $scope.addModule = function(ev) {

        $mdDialog.show({
            template: "<add-module></add-module>",
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: true
        });
    }
};
