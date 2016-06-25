mainApp.controller("toolbarCtrl", function ($scope, $state, mainService) {
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
    }
});