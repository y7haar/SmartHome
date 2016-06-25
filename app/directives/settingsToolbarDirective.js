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
            abortState: "@"
        },

        controller: settingsToolbarController
    };
});

var settingsToolbarController = function ($scope, $state) {

    $scope.title = null;
    $scope.abortMode = null;
    $scope.abortState = null;

    $scope.doAbort = function() {
        $state.go($scope.abortState);
    }

};