sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/core/routing/History'
], function(oController, History) {
    return oController.extend('com.tcs.hr.ui.project1.controllers.BaseController', {
        navToPage: function(oRouter, configObj) {
            oRouter.navTo(configObj.to)
        },
        getTypeArr: function() {
            return [{
                key: 'CAS',
                text: 'CAS'
            }, {
                key: 'CFRT',
                text: 'CFRT'
            },
            {
                key: 'CTO',
                text: 'CTO'
            }
        ]
        },
        onBack: function(oEvent) {
            const oHistory = History.getInstance();
			const sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				const oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo("RouteHome");
			}
        }

    })
})