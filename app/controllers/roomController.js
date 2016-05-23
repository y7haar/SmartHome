mainApp.controller("roomCtrl", function ($scope) {

    $scope.rooms = Storage.getInstance().getRooms();

    $scope.getSelectedRoom = function () {
        $scope.selectedRoom = $scope.rooms[$scope.selectedRoomTab];
        return $scope.selectedRoom;
    };

    $scope.onModuleSwipeDown = function () {
        alert("Downswipe");
    };

});