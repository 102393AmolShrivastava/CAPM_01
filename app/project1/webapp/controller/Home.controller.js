sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("com.tcs.hr.ui.project1.controller.Home", {
        onInit: function () {
            console.log('inside home controller')
        }
    });
});
