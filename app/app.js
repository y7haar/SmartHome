var mainApp = angular.module('mainApp', ['ngMaterial','mdColorPicker'])
    .config(function ($mdThemingProvider) {

        var customPink = $mdThemingProvider.extendPalette('pink', {
            '500': '#bd2737'
        });
        // Register the new color palette map with the name <code>neonRed</code>
        $mdThemingProvider.definePalette('rhabarber', customPink);


        $mdThemingProvider.theme('default')
            .primaryPalette('rhabarber')
            .accentPalette('green')
            .warnPalette('red')
            .backgroundPalette('grey');
    });





