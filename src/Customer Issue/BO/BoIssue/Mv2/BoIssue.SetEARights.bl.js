"use strict";

///////////////////////////////////////////////////////////////////////////////////////////////
//                 IMPORTANT - DO NOT MODIFY AUTO-GENERATED CODE OR COMMENTS                 //
//Parts of this file are auto-generated and modifications to those sections will be          //
//overwritten. You are allowed to modify:                                                    //
// - the tags in the jsDoc as described in the corresponding section                         //
// - the function name and its parameters                                                    //
// - the function body between the insertion ranges                                          //
//         "Add your customizing javaScript code below / above"                              //
//                                                                                           //
// NOTE:                                                                                     //
// - If you have created PRE and POST functions, they will be executed in the same order     //
//   as before.                                                                              //
// - If you have created a REPLACE to override core function, only the REPLACE function will //
//   be executed. PRE and POST functions will be executed in the same order as before.       //
//                                                                                           //
// - For new customizations, you can directly modify this file. There is no need to use the  //
//   PRE, POST, and REPLACE functions.                                                       //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Use the following jsDoc tags to describe the BL function. Setting these tags will
 * change the runtime behavior in the mobile app. The values specified in the tags determine
 * the name of the contract file. The filename format is “@this . @function .bl.js”.
 * For example, LoVisit.BeforeLoadAsync.bl.js
 * -> function: Name of the businessLogic function.
 * -> this: The LO, BO, or LU object that this function belongs to (and it is part of the filename).
 * -> kind: Type of object this function belongs to. Most common value is "businessobject".
 * -> async: If declared as async then the function should return a promise.
 * -> param: List of parameters the function accepts. Make sure the parameters match the function signature.
 * -> module: Use CORE or CUSTOM. If you are a Salesforce client or an implementation partner, always use CUSTOM to enable a seamless release upgrade.
 * -> extends: Base class of the LO, BO, and LU objects that this function belongs to.
 * -> maxRuntime: Maximum time this function is allowed to run, takes integer value in ms. If the max time is exceeded, error is logged.
 * -> returns: Type and variable name in which the return value is stored.
 * @function setEARights
 * @this BoIssue
 * @kind TODO_ADD_BUSINESS_OBJECT_TYPE
 * @namespace CORE
 */
function setEARights(){
    var me = this;
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //                                                                                           //
    //               Add your customizing javaScript code below.                                 //
    //                                                                                           //
    ///////////////////////////////////////////////////////////////////////////////////////////////
    
var acl = me.getACL();
var userPKey = ApplicationContext.get('user').getPKey();
var customerManagementInfoLookup = me.getLuCustomerManagementInfo();
var readOnlyBySubstitution = "0";
var substitutedIssue = "0";

if (Utils.isDefined(customerManagementInfoLookup)) {

  // Hide substitution information if no substitution is active
  if ((customerManagementInfoLookup.getIsSubstituted() == "0") && (customerManagementInfoLookup.getHasSubstitute() == "0")
      || ((me.getResponsiblePKey() == userPKey) && (customerManagementInfoLookup.getHasSubstitute() == "0"))
      || ((customerManagementInfoLookup.getIsSubstituted() == "1") && (me.getResponsiblePKey() != customerManagementInfoLookup.getSubstitutedUsrMainPKey()) )) {

    var aclLuCustomerManagementInfo = customerManagementInfoLookup.getACL();
    aclLuCustomerManagementInfo.removeRight(AclObjectType.PROPERTY, "combinedSubstitutedName", AclPermission.VISIBLE);
    aclLuCustomerManagementInfo.removeRight(AclObjectType.PROPERTY, "combinedSubstituteName", AclPermission.VISIBLE);
  }

  // Set edit rights based on substitution
  // a) Substituted user looses edit rights during an active substitution
  if (customerManagementInfoLookup.getHasSubstitute() == "1") {
    substitutedIssue = "1";

    if ((me.getResponsiblePKey() === customerManagementInfoLookup.getReferenceUsrMainPKey()) && (customerManagementInfoLookup.getHasSubstituteInLeadFollowUpTime() === "0")) {
      readOnlyBySubstitution = "1";
    }
  }

  // b) Substitute gets edit rights during active substitution
  if (customerManagementInfoLookup.getIsSubstituted() == "1") {
    substitutedIssue = "1";

    // If in lead or followup time - no edit rights for substiute
    if ((me.getResponsiblePKey() !== customerManagementInfoLookup.getReferenceUsrMainPKey()) && (customerManagementInfoLookup.getSubstitutedInLeadFollowUpTime() == "1")) {
      readOnlyBySubstitution = "1";
    }
  }
}

if (me.getIssuePhase().toLowerCase() === "closed" || me.getIssuePhase().toLowerCase() === "cancelled"
    || readOnlyBySubstitution == "1"
    || ((readOnlyBySubstitution === "0") && (substitutedIssue == "0") && (me.getResponsiblePKey()  != userPKey))) {

  // Issue fields should not be editable.
  acl.removeRight(AclObjectType.OBJECT, "BoIssue", AclPermission.EDIT);

  //Issue Note should also be not editable
  if(Utils.isDefined( me.getBoIssueNote())) {
    acl = me.getBoIssueNote().getACL();
    acl.removeRight(AclObjectType.OBJECT, "BoIssueNote", AclPermission.EDIT);
  }
}
else {
  acl.setAce({
    "objectType" : AclObjectType.OBJECT,
    "objectName" : "BoIssue",
    "rights" : AclPermission.ALL,
    "grant" : true
  });
}

    ///////////////////////////////////////////////////////////////////////////////////////////////
    //                                                                                           //
    //               Add your customizing javaScript code above.                                 //
    //                                                                                           //
    ///////////////////////////////////////////////////////////////////////////////////////////////

    
}