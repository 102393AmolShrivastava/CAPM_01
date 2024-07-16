sap.ui.define([
    "com/tcs/hr/ui/project1/controllers/BaseController",
    "sap/ui/model/json/JSONModel",
    "com/tcs/hr/ui/project1/util/util",
    "sap/m/StandardListItem"
],
function (BaseController, JSONModel, util,StandardListItem) {
    "use strict";

    return BaseController.extend("com.tcs.hr.ui.project1.controllers.Home", {
        onInit: function () {
            console.log('inside home controller');
            this.oRouter = this.getOwnerComponent().getRouter();
        },
        onBeforeRendering: function() {},
        
        tilePressed: function(oEvent) {
            let controlId = oEvent.getSource().getId();
            let obj = {
                to: '',
                args: null
            };
            switch(true) {
                case controlId.includes('cas_tile'): {
                    obj.to="CAS_REQUEST"
                    this.navToPage(this.oRouter, obj)
                }
                break;
                case controlId.includes('cfrt_tile'): {
                    obj.to="CFRT_REQUEST"
                    this.navToPage(this.oRouter, obj)
                }
                break;
                case controlId.includes('cto_tile'): {
                    obj.to="CTO_REQUEST"
                    this.navToPage(this.oRouter, obj)
                }
                break;
                case controlId.includes('dashboard'): {
                    obj.to="DASHBOARD"
                    this.navToPage(this.oRouter, obj)
                }
                break;
                case controlId.includes('master'): {
                    obj.to="MASTER_DATA"
                    this.navToPage(this.oRouter, obj)
                }
                break;
            }
           
        }
    
    });
});
