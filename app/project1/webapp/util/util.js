sap.ui.define([

], function() {
    return {
        getAllRequestData: async () => {
            let data = await fetch(`http://localhost:8080/odata/v4/request/Requests`, {
                method: 'GET'
            });            
            return await data.json();
        }
    }
})