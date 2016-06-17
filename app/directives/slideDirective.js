mainApp.directive('slideToggle', function() {
    return {
        restrict: 'A',
        scope: {
            isOpen: "=slideToggle"
        },
        link: function(scope, element, attr) {
            var slideDuration = parseInt(attr.slideToggleDuration, 10) || 200;

            scope.$watch('isOpen', function(newIsOpenVal, oldIsOpenVal) {
                element.stop().slideToggle(slideDuration);
            });

        }
    };
});