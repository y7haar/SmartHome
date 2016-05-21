mainApp.controller("roomCtrl", function ($scope) {

    $scope.rooms = [
        {icon: "kitchen", name: "Küche"},
        {icon: "free_breakfast", name: "Wohnzimmer"},
        {icon: "hot_tub", name: "Bad"},
        {icon: "casino", name: "Schlafzimmer"},
        {icon: "child_friendly", name: "Kinderzimmer"},
        {icon: "fitness_center", name: "Hobbyraum"},
        {icon: "business_center", name: "Büro"},
        {icon: "spa", name: "Waschkeller"}
    ];

    $scope.test = [];

    for (var i = 0; i < 1; ++i) {
        $scope.test.push(i);
    }

    $scope.getSelectedRoom = function () {
        $scope.selectedRoom = $scope.rooms[$scope.selectedRoomTab];
        return $scope.selectedRoom;
    };

});