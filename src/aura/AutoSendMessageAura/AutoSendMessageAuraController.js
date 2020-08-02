({
	doInit : function(component, event, helper) {
        helper.updateLog(component, "======= START TEST RUN =======");
        helper.updateLog(component, "Aura component is initialized.");
	},
    
    handleVFMessage : function(component, vfMessageEvent, helper) {
        if (vfMessageEvent != null) {
            const nodeTitle = vfMessageEvent.getParam('nodeTitle');
            const data = vfMessageEvent.getParam('data');
            if (nodeTitle === "VF" && data === "makeApexCall") {
                helper.updateLog(component, "Message received from VF Page...");                
                helper.makeCallToApex(component);
            }
        }
    }
})