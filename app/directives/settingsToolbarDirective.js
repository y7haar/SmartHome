/**
 * @author Yannic Siebenhaar
 */

mainApp.directive('settingsToolbar', function() {
    return {
        templateUrl: BASE_URL + "/app/views/settings/settingsToolbarView.html",
        restrict: "E",
        scope: {
            title: "@",
            abortMode: '@',
            abortState: "@",
            abortFunction: "&?"
        },

        controller: settingsToolbarController
    };
});

var settingsToolbarController = function ($scope, $state) {

    $scope.doAbort = function() {
        
        if($scope.abortFunction !== undefined)
        {
            $scope.abortFunction();
            return;
        }

        $state.go($scope.abortState);
    }

};