/**
 * @author Yannic Siebenhaar
 */

mainApp.controller("blindsCtrl", function ($scope, $interval, $mdDialog) {

    $scope.windows = [
        {name:"Fenster Links", status:10, slatOpened:true, autoMode:true},
        {name:"Fenster Mitte",  status:10, slatOpened:true, autoMode:true},
        {name:"Fenster Rechts",  status:10, slatOpened:true, autoMode:true}
    ];

    $scope.allWindowsStatus = "-";

    $scope.allWindowsFullUp = false;
    $scope.allWindowsFullDown = false;
    $scope.allWindowsUp = false;
    $scope.allWindowsDown = false;

    $scope.allSlatsStatus = "-";
    $scope.allAutoMode = "-";

    updateAllSlats();
    updateAllAutoMode();

    for(var i = 0;i < $scope.windows.length;++i) {
        $scope.windows[i].goingUp = false;
        $scope.windows[i].goingDown = false;

        $scope.windows[i].goingFullUp = false;
        $scope.windows[i].goingFullDown = false;
    }


    function clamp(num, min, max) {
        return num < min ? min : num > max ? max : num;
    }

    function updateAllWindowsStatus() {

        var firstStatus = $scope.windows[0].status;
        var firstSlatOpened = $scope.windows[0].slatOpened;

        if($scope.windows.length == 1) {
            $scope.allWindowsStatus = firstStatus + " %";
            $scope.allWindowsSlatOpened = firstSlatOpened ? "geöffnet" : "geschlossen";
            return;
        }

        for(var i = 1;i < $scope.windows.length;++i) {
            if($scope.windows[i].status != firstStatus) {
                $scope.allWindowsStatus = "unterschiedlich";
                $scope.allWindowsSlatOpened = "unterschiedlich";
                return;
            }
        }

        $scope.allWindowsStatus = firstStatus + " %";
        $scope.allWindowsSlatOpened = firstSlatOpened ? "geöffnet" : "geschlossen";

    }

    function updateAllAutoMode() {
        var firstAutoMode = $scope.windows[0].autoMode;

        if($scope.windows.length == 1) {
            $scope.allAutoMode = firstAutoMode;
            return;
        }

        for(var i = 1;i < $scope.windows.length;++i) {
            var window = $scope.windows[i];

            if(window.autoMode != firstAutoMode) {
                $scope.allAutoMode = false;
                return;
            }
        }

        $scope.allAutoMode = firstAutoMode;
    }

    function moveUpHelper(window) {
        resetActionsPerWindow(window);

        window.goingUp = true;
        window.valueToReach = clamp(window.status + 5, 0, 100);
    }

    function moveFullUpHelper(window) {
        resetActionsPerWindow(window);

        window.goingFullUp = true;
        window.valueToReach = 100;
    }

    function moveDownHelper(window) {
        resetActionsPerWindow(window);

        window.goingDown = true;
        window.valueToReach = clamp(window.status - 5, 0, 100);
    }

    function moveFullDownHelper(window) {
        resetActionsPerWindow(window);

        window.goingFullDown = true;
        window.valueToReach = 0;
    }


    function resetActionsPerWindow(window) {
        window.goingUp = false;
        window.goingDown = false;
        window.goingFullUp = false;
        window.goingFullDown = false;
    }

    function resetActionsAllWindows() {
        for(var i = 0;i < $scope.windows.length;++i) {
            var window = $scope.windows[i];

            resetActionsPerWindow(window);
        }
    }

    function resetAllActions() {
        $scope.allWindowsUp = false;
        $scope.allWindowsDown = false;
        $scope.allWindowsFullUp = false;
        $scope.allWindowsFullDown = false;
    }

    $scope.moveUp = function(window) {
        if(window.goingUp) {
            window.goingUp = false;
            return;
        }

        moveUpHelper(window);
    };

    $scope.moveDown = function(window) {
        if(window.goingDown) {
            window.goingDown = false;
            return;
        }

        moveDownHelper(window);
    };

    $scope.moveFullUp = function(window) {
        if(window.goingFullUp) {
            window.goingFullUp = false;
            return;
        }

        moveFullUpHelper(window);
    };

    $scope.moveFullDown = function(window) {
        if(window.goingFullDown) {
            window.goingFullDown = false;
            return;
        }

        moveFullDownHelper(window);
    };


    $scope.moveAllUp = function() {

        if($scope.allWindowsUp) {
            $scope.allWindowsUp = false;
            resetActionsAllWindows();

            return;
        }

        resetAllActions();

        for(var i = 0;i < $scope.windows.length;++i) {
            var window = $scope.windows[i];

            moveUpHelper(window);
        }

        $scope.allWindowsUp = true;
    };

    $scope.moveAllDown = function() {

        if($scope.allWindowsDown) {
            $scope.allWindowsDown = false;
            resetActionsAllWindows();

            return;
        }

        resetAllActions();

        for(var i = 0;i < $scope.windows.length;++i) {
            var window = $scope.windows[i];

            moveDownHelper(window);
        }

        $scope.allWindowsDown = true;
    };

    $scope.moveAllFullUp = function() {

        if($scope.allWindowsFullUp) {
            $scope.allWindowsFullUp = false;
            resetActionsAllWindows();

            return;
        }

        resetAllActions();

        for(var i = 0;i < $scope.windows.length;++i) {
            var window = $scope.windows[i];

            moveFullUpHelper(window);
        }

        $scope.allWindowsFullUp = true;
    };

    $scope.moveAllFullDown = function() {

        if($scope.allWindowsFullDown) {
            $scope.allWindowsFullDown = false;
            resetActionsAllWindows();

            return;
        }

        resetAllActions();

        for(var i = 0;i < $scope.windows.length;++i) {
            var window = $scope.windows[i];

            moveFullDownHelper(window);
        }

        $scope.allWindowsFullDown = true;
    };


    $scope.openSlat = function(window) {
        window.slatOpened = true;

        updateAllSlats();
    };

    $scope.closeSlat = function(window) {
        window.slatOpened = false;

        updateAllSlats();
    };

    $scope.openAllSlats = function() {
        for(var i = 0;i < $scope.windows.length;++i) {
            var window = $scope.windows[i];
            window.slatOpened = true;
        }

        updateAllSlats();
    };

    $scope.closeAllSlats = function() {
        for(var i = 0;i < $scope.windows.length;++i) {
            var window = $scope.windows[i];
            window.slatOpened = false;
        }

        updateAllSlats();
    };

    function updateAllSlats() {

        var firstSlat = $scope.windows[0].slatOpened;

        if($scope.windows.length == 1) {
            $scope.allSlatsStatus = firstSlat ? "geöffnet" : "geschlossen";
        }

        for(var i = 1;i < $scope.windows.length;++i) {
            var window = $scope.windows[i];

            if(window.slatOpened != firstSlat) {
                $scope.allSlatsStatus = "-";
                return;
            }
        }

        $scope.allSlatsStatus = firstSlat ? "geöffnet" : "geschlossen";
    }

    $scope.toggleAllAuto = function() {
      $scope.allAutoMode = !$scope.allAutoMode;

        for(var i = 0;i < $scope.windows.length;++i) {
            var window = $scope.windows[i];
            window.autoMode = $scope.allAutoMode;
        }

        updateAllAutoMode();
    };

    $scope.toggleAuto = function(window) {
        window.autoMode = !window.autoMode;

        updateAllAutoMode();
    };

    $scope.openSettings = function (ev) {
        $mdDialog.show({
            template: "<" + "blinds-settings" + " class='module-settings'></" + "blinds-settings" + ">",
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: true
        });
    };

    $interval(function () {
        for(var i = 0;i < $scope.windows.length;++i) {
            var window = $scope.windows[i];

            if(!window.goingUp && !window.goingDown && !window.goingFullUp && !window.goingFullDown) {
                continue;
            }

            if(window.goingUp || window.goingFullUp) {
                if(clamp(window.status, 0, 100) == window.valueToReach) {
                    resetActionsPerWindow(window);
                    continue;
                }

                window.status += 1;
            }

            else if(window.goingDown || window.goingFullDown) {
                if(clamp(window.status, 0, 100) == window.valueToReach) {
                    resetActionsPerWindow(window);
                    continue;
                }

                window.status -= 1
            }

        }

        updateAllWindowsStatus();

        var futureAllUp = false;
        var futureAllFullUp = false;
        var futureAllDown = false;
        var futureAllFullDown = false;

        for(var i = 0;i < $scope.windows.length;++i) {
            var window = $scope.windows[i];

            if(window.goingUp) {
                futureAllUp = true;
            }
        }

        for(var i = 0;i < $scope.windows.length;++i) {
            var window = $scope.windows[i];

            if(window.goingDown) {
                futureAllDown = true;
            }
        }

        for(var i = 0;i < $scope.windows.length;++i) {
            var window = $scope.windows[i];

            if(window.goingFullUp) {
                futureAllFullUp = true;
            }
        }

        for(var i = 0;i < $scope.windows.length;++i) {
            var window = $scope.windows[i];

            if(window.goingFullDown) {
                futureAllFullDown = true;
            }
        }

        $scope.allWindowsDown = futureAllDown;
        $scope.allWindowsUp = futureAllUp;
        $scope.allWindowsFullDown = futureAllFullDown;
        $scope.allWindowsFullUp = futureAllFullUp;

    }, 2000);

});