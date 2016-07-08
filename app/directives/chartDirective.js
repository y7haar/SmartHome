/**
 * Created by Core on 30.06.2016.
 */
mainApp.directive('hcChart', function () {
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