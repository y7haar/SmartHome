/**
 * Created by AlexK on 22.06.2016.
 */


mainApp.controller("logCtrl", function ($scope) {

    $scope.users = Storage.getInstance().getUsers();
    $scope.logQuantity = 3;
    $scope.logData = [
        {
            "room":"Wohnzimmer",
            "user":$scope.users[parseInt(Math.random()*$scope.users.length)].name,
            "module": "Beleuchtung",
            "msg": "hat Licht1 ausgeschaltet.",
            "time": new Date()
        }
    ];

    $scope.logMsgs= [
        "[01.04.2016] 17:30: Maria hat die Haustür entriegelt",
        "[02.04.2016] 17:30: Maria hat die Haustür entriegelt",
        "[03.04.2016] 17:30: Maria hat die Haustür entriegelt",
        "[04.04.2016] 17:30: Maria hat die Haustür entriegelt",
        "[05.04.2016] 17:30: Maria hat die Haustür entriegelt",
        "[06.04.2016] 17:30: Maria hat die Haustür entriegelt",
        "[07.04.2016] 17:30: Maria hat die Haustür entriegelt",
        "[08.04.2016] 17:30: Maria hat die Haustür entriegelt",
        "[09.04.2016] 17:30: Maria hat die Haustür entriegelt",
        "[10.04.2016] 17:30: Maria hat die Haustür entriegelt",
        "[11.04.2016] 17:30: Maria hat die Haustür entriegelt",
        "[21.04.2016] 17:30: Maria hat die Haustür entriegelt",
        "[31.04.2016] 17:30: Maria hat die Haustür entriegelt",
        "[41.04.2016] 17:30: Maria hat die Haustür entriegelt",
        "[51.04.2016] 17:30: Maria hat die Haustür entriegelt",
        "[61.04.2016] 17:30: Maria hat die Haustür entriegelt",
        "[71.04.2016] 17:30: Maria hat die Haustür entriegelt",
        "[81.04.2016] 17:30: Maria hat die Haustür entriegelt",
        "[91.04.2016] 17:30: Maria hat die Haustür entriegelt",
        "[12.04.2016] 17:30: Maria hat die Haustür entriegelt",
        "[13.04.2016] 17:30: Maria hat die Haustür entriegelt"
    ];







});