sap.ui.define([
    'com/tcs/hr/ui/project1/controllers/BaseController'
], function(BaseController) {
    return BaseController.extend('com.tcs.hr.ui.project1.controllers.ctoRequest', {
        onInit: function() {
            console.log('Inside cto Request controller')
        }
    })
})