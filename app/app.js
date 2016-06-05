var mainApp = angular.module('mainApp', ['ngMaterial'])
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('pink')
            .accentPalette('green')
            .warnPalette('red')
            .backgroundPalette('grey');
    });