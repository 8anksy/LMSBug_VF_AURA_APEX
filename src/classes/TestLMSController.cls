public with sharing class TestLMSController {
	@auraEnabled
    public static String getApexAcknowledge() {
        return 'Successful call to Apex.';
    }
}