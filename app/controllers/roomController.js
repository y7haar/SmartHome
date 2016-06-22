mainApp.controller("roomCtrl", function ($scope, $mdMedia) {

    $scope.$watch(function() { return $mdMedia('gt-md'); }, function(desktopView) {
        $scope.desktopView = desktopView;
    });

    $scope.rooms = Storage.getInstance().getRooms();

    $scope.getSelectedRoom = function () {
        $scope.selectedRoom = $scope.rooms[$scope.selectedRoomTab];
        return $scope.selectedRoom;
    };
});