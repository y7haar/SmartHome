/**
 * @author Yannic Siebenhaar
 */

mainApp.directive('roomConfiguration', function () {
    return {
        templateUrl: BASE_URL + "/app/views/settings/roomConfigurationView.html",
        restrict: "E",
        controller: roomConfigurationController
    };
});

var roomConfigurationController = function ($scope, $mdDialog, settingsService) {
    $scope.rooms = settingsService.rooms;


    $scope.deleteRoom = function (roomIndex, ev) {

        var confirm = $mdDialog.confirm()
            .title('Raum löschen?')
            .textContent('Soll der Raum wirklich gelöscht werden?')
            .ariaLabel('Löschen bestätigen')
            .targetEvent(ev)
            .ok('Raum löschen')
            .cancel('Abbrechen');

        $mdDialog.show(confirm).then(function () {
            $scope.rooms.splice(roomIndex, 1);

            Storage.getInstance().saveRooms($scope.rooms);
        }, function () {
        });
        
    };

    $scope.moveRoomUp = function (roomIndex) {

        if (roomIndex === 0) {
            return;
        }

        var room = $scope.rooms[roomIndex];
        $scope.rooms.splice(roomIndex, 1);
        $scope.rooms.splice(roomIndex - 1, 0, room);

        Storage.getInstance().saveRooms($scope.rooms);
    };

    $scope.moveRoomDown = function (roomIndex) {
        if (roomIndex === $scope.rooms.length) {
            return;
        }

        var room = $scope.rooms[roomIndex];
        $scope.rooms.splice(roomIndex, 1);
        $scope.rooms.splice(roomIndex + 1, 0, room);

        Storage.getInstance().saveRooms($scope.rooms);
    };
};
