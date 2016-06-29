var mainApp = angular.module('mainApp', ['ngMaterial', 'ngAnimate', 'ngMessages','mdColorPicker', 'ui.router'])
    .config(function ($mdThemingProvider) {

        var customPink = $mdThemingProvider.extendPalette('pink', {
            "100": "#ffffff",
            '500': '#bd2737',
            'A200': '#bd2737'
        });

        var customGreen = $mdThemingProvider.extendPalette('green', {
            "100": '#5d8e1a',
            "200": '#5d8e1a',
            "300": '#5d8e1a',
            '500': '#5d8e1a',
            "A200": '#5d8e1a',
            'contrastDefaultColor': 'light'
        });

        // Register the new color palette map with the name <code>neonRed</code>
        $mdThemingProvider.definePalette('rhabarber', customPink);
        $mdThemingProvider.definePalette('customGreen', customGreen);


        $mdThemingProvider.theme('default')
            .primaryPalette('rhabarber')
            .accentPalette('customGreen')
            .warnPalette('red')
            .backgroundPalette('grey');
    });



mainApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");

    $stateProvider
        .state('login', {
            url:'/login',
            views: {
                "content": { templateUrl: "app/views/loginView.html", controller: "loginCtrl"}
            }
        })
        .state('rooms', {
            url:'/rooms',
            views: {
                "content": { templateUrl: "app/views/rooms/roomsView.html", controller: "roomCtrl"}
            }
        })
        .state('settings', {
            url:'/settings',
            views: {
                "content": { templateUrl: "app/views/settings/settingsView.html", controller: "settingsCtrl"}
            }
        })

}]);


mainApp.run(['$rootScope', '$state', function($rootScope, $state, $timeout){

    $rootScope.$on('$stateChangeSuccess',function(){
        $rootScope.stateIsLoading = true;
    });


    $rootScope.$on('$viewContentLoaded',function(){
        $rootScope.stateIsLoading = false;
    });

}]);

