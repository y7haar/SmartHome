/**
 * @author Alexander Kern
 */
mainApp.directive('hcStockChart', function () {
    return {
        restrict: 'E',
        template: '<div ></div>',
        scope: {
            options: '='
        },
        link: function (scope, element) {
            scope.chart =  Highcharts.stockChart(element[0], scope.options);
            scope.chart.reflow();
        }
    };
});

mainApp.directive('hcChart', function () {
    return {
        restrict: 'E',
        template: '<div ></div>',
        scope: {
            options: '='
        },
        link: function (scope, element) {
            scope.chart =  Highcharts.chart(element[0], scope.options);
            scope.chart.reflow();
        }
    };
});