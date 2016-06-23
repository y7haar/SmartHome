var mainApp = angular.module('mainApp', ['ngMaterial','mdColorPicker'])
    .config(function ($mdThemingProvider) {

        var customPink = $mdThemingProvider.extendPalette('pink', {
            "100": "#ffffff",
            '500': '#bd2737',
            'A200': '#bd2737'
        });

        var customGreen = $mdThemingProvider.extendPalette('green', {
            "100":'#5d8e1a',
            "200":'#5d8e1a',
            "300":'#5d8e1a',
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





