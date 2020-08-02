({
    notifyVFPage : function(component) {
        this.updateLog("Notifying VF Page that Aura is initialized...");
        const payload = {
            nodeTitle: "Aura",
            data: "initialized"
        };
        component.find("testChannel").publish(payload);    
    },
    
	makeCallToApex : function(component) {
        var action = component.get("c.getApexAcknowledge");
        
        var startTime = new Date();
        action.setCallback(this, function(response) {
            var endTime = new Date();
            var duration = endTime - startTime; //milliseconds interval
            
            this.updateLog(component, "Apex transaction took " + duration + " milliseconds");            
            
            var resultLog;
            if(response.getState() === "SUCCESS") {
				resultLog = "Result:" + response.getReturnValue();
			} else {
                resultLog = "there was an error calling getApexAcknowledge from Apex";
			}
            this.updateLog(component, resultLog);
            this.updateLog(component, "======= FINISH TEST RUN =======");
        });
        $A.enqueueAction(action);
        
        this.updateLog(component, "Apex call enqueued...");
        //component.set("v.showLogOnUI", true);
	},
    
    updateLog : function(component, log) {
        var showLogOnUI = component.get("v.showLogOnUI");
        var showLogInConsole = component.get("v.showLogInConsole");
        
        if (showLogOnUI) {
            var logItems = component.get("v.logItems");
            logItems.push(log);
            component.set("v.logItems", logItems);
        }
        if (showLogInConsole) {
            console.log(log);
        }
	}
})