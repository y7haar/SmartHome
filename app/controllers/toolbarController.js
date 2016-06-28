mainApp.controller("toolbarCtrl", function ($scope, $state, $timeout, mainService) {
    $scope.user = mainService.getCurrentUser();
    
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

    $scope.openSettings = function() {
        $state.go("settings");
    };



    var timeToHideNotificationBar = 30 * 1000;

    $scope.isNotificationBarShown = false;
    var closing;

    var falseTrue = [false, true];

    $scope.showWashingMachineNotification = false;

    $scope.toggleNotificationBar = function() {
        $timeout.cancel(close);

        if($scope.isNotificationBarShown) {
            $scope.hideNotificationBar();
        }
        else {
            $scope.showNotificationBar();
        }

    };

    $scope.showNotificationBar = function() {

        $scope.showNotifications = [false, false, false, false];

        $scope.showNotifications[parseInt(Math.random() * $scope.showNotifications.length)] = true;
        $scope.showNotifications[parseInt(Math.random() * $scope.showNotifications.length)] = true;


        $scope.isNotificationBarShown = true;

        closing = $timeout(function() {
            $scope.hideNotificationBar()
        }, timeToHideNotificationBar);
    };

    $scope.hideNotificationBar = function() {
        $scope.isNotificationBarShown = false;
    };

});