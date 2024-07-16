sap.ui.define([
    'com/tcs/hr/ui/project1/controllers/BaseController',
    'sap/ui/model/json/JSONModel'

], function(BaseController, JSONModel) {
    return BaseController.extend('com.tcs.hr.ui.project1.controllers.dashboard', {
        onInit: function() {
            console.log('Inside Dashboard controller');
            let oModel = new JSONModel();
            let typeVh = this.getTypeArr();

            oModel.setProperty('/requestArr', typeVh);

            this.getView().setModel(oModel);
        },
        typeChanged: function(oEvent) {
            
                // debugger;
                this.navToPage(this.oRouter, {to: 'UNDER_DEV'})
        
        }
    })
})