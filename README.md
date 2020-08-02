# LMSBug_VF_AURA_APEX
This repo demonstrates a potential bug that exists on the Salesforce platform in LEX.

You will need to deploy the following components to replicate the bug:
<ul>
  <li>TestLMSController (Apex Class)</li>
  <li>AutoSendMessageVFPage (VF Page)</li>
  <li>AutoSendMessageAura (Aura Component Bundle)</li>
  <li>VRBMessageChannel (Lightning message channel)</li>
</ul> 

In order to replicate the issue, BOTH the AutoSendMessageVFPage and AutoSendMessageAura component need to be on the same LEX page.
You can add the AutoSendMessageVFPage to the App Builder layout by using the Visualforce component and selecting it from the available pages (ensure that it is enabled for LEX)
