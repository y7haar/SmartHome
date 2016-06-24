/**
 * @author Yannic Siebenhaar
 */

mainApp.service("mainService", [

    function () {
        this.currentUser = Storage.getInstance().getUserById(0);

        this.getCurrentUser = function () {
            return this.currentUser;
        };

        this.setCurrentUser = function (user) {
            this.currentUser = user;
        };

    }]
);