mainApp.controller("toolbarCtrl", function ($scope, mainService) {
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
});