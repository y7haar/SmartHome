var mainApp = angular.module('mainApp', ['ngMaterial'])
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('green')
            .accentPalette('pink')
            .warnPalette('red')
            .backgroundPalette('grey');
    });