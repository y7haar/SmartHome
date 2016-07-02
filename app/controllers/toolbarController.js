mainApp.controller("toolbarCtrl", function ($scope, $state, $timeout, mainService) {
    $scope.user = mainService.getCurrentUser();

    /*
    $scope.$watch(function() { return $("#main-toolbar").height(); }, function(height) {
        $scope.toolbarHeight=height;
        
        if(height === 48) {
            $scope.userMenuOffset = height + 20;
        }
        
        else if(height === 56) {
            $scope.userMenuOffset = height + 17;
        }
        
        else if(height === 64) {
            $scope.userMenuOffset = height + 14;
        }
    });

    */

    $scope.openSettings = function() {
        $state.go("settings");
    };



    var timeToHideNotificationBar = 30 * 1000;

    $scope.isNotificationBarShown = false;
    $scope.notificationCount = 0;

    var closing;

    $scope.showWashingMachineNotification = false;

    $scope.toggleNotificationBar = function() {

        $scope.user.name="test";

        $timeout.cancel(closing);

        if($scope.isNotificationBarShown) {
            $scope.hideNotificationBar();
        }
        else {
            $scope.showNotificationBar();
        }

    };

    $scope.showNotificationBar = function() {

        $scope.isNotificationBarShown = true;

        closing = $timeout(function() {
            $scope.hideNotificationBar()
        }, timeToHideNotificationBar);
    };

    $scope.hideNotificationBar = function() {
        $scope.isNotificationBarShown = false;

        $scope.showNotifications = [false, false, false, false];

        $scope.showNotifications[parseInt(Math.random() * $scope.showNotifications.length)] = true;
        $scope.showNotifications[parseInt(Math.random() * $scope.showNotifications.length)] = true;
        $scope.showNotifications[parseInt(Math.random() * $scope.showNotifications.length)] = true;

        var count = 0;

        for(var i = 0;i < $scope.showNotifications.length;++i) {
            if($scope.showNotifications[i] === true) {
                count++;
            }
        }

        $scope.notificationCount = count;
    };

    $scope.hideNotificationBar();

});