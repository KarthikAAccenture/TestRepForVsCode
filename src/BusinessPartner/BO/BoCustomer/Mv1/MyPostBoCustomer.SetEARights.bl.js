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
 * @function postSetEARights
 * @this BoCustomer
 * @kind businessobject
 * @namespace CUSTOM
 * @param {String} mode
 */
function postSetEARights(mode){
    var me = this;
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //                                                                                           //
    //               Add your customizing javaScript code below.                                 //
    //                                                                                           //
    ///////////////////////////////////////////////////////////////////////////////////////////////
    
var acl = me.getACL();
// global fields which are present in both usa and canada are declared below
acl.removeRight(AclObjectType.PROPERTY, "name", AclPermission.EDIT);
acl.removeRight(AclObjectType.PROPERTY, "phone1", AclPermission.EDIT);

if(ApplicationContext.get('user').getSalesOrg() == Localization.resolve("Canada_SalesOrg"))
{
  //fields which are specific to canada are declared below
  if(me.getBoBpaMeta().getMobilityNameConstant() == "Canada Account"){
    acl.removeRight(AclObjectType.PROPERTY, "retailOutletId", AclPermission.EDIT);
    acl.removeRight(AclObjectType.PROPERTY, "sapId", AclPermission.EDIT);
    acl.removeRight(AclObjectType.PROPERTY, "accountStatus", AclPermission.EDIT);
    acl.removeRight(AclObjectType.PROPERTY, "aopCustomerGroup", AclPermission.EDIT);
    acl.removeRight(AclObjectType.PROPERTY, "calledOnAccounts", AclPermission.EDIT);
    acl.removeRight(AclObjectType.PROPERTY, "canada3rdTier", AclPermission.EDIT);
    acl.removeRight(AclObjectType.PROPERTY, "canadaUsefulLinks", AclPermission.EDIT);
    acl.removeRight(AclObjectType.PROPERTY, "closingweek", AclPermission.EDIT);
    acl.removeRight(AclObjectType.PROPERTY, "craftPotential", AclPermission.EDIT);
    acl.removeRight(AclObjectType.PROPERTY, "creditBlock", AclPermission.EDIT);
    acl.removeRight(AclObjectType.PROPERTY, "customerHierarchyLevel7", AclPermission.EDIT);
    acl.removeRight(AclObjectType.PROPERTY, "customerHierarchyLevel8", AclPermission.EDIT);
    acl.removeRight(AclObjectType.PROPERTY, "customerPricingGroup", AclPermission.EDIT);
    acl.removeRight(AclObjectType.PROPERTY, "dateofLastTelesalesCall", AclPermission.EDIT);
    acl.removeRight(AclObjectType.PROPERTY, "dateofLastVisit", AclPermission.EDIT);
    acl.removeRight(AclObjectType.PROPERTY, "deliveryFrequency", AclPermission.EDIT);
    acl.removeRight(AclObjectType.PROPERTY, "deliveryInstructions", AclPermission.EDIT);
    acl.removeRight(AclObjectType.PROPERTY, "deliveryPlantDescription", AclPermission.EDIT);
    acl.removeRight(AclObjectType.PROPERTY, "distributorWarehouse", AclPermission.EDIT);
    acl.removeRight(AclObjectType.PROPERTY, "eMailAddress", AclPermission.EDIT);
    acl.removeRight(AclObjectType.PROPERTY, "fridge", AclPermission.EDIT);
    acl.removeRight(AclObjectType.PROPERTY, "lowCellar", AclPermission.EDIT);
    acl.removeRight(AclObjectType.PROPERTY, "molsonAccountManager", AclPermission.EDIT);
    acl.removeRight(AclObjectType.PROPERTY, "openingweek", AclPermission.EDIT);
    acl.removeRight(AclObjectType.PROPERTY, "outletTypeLVL2OffPremise", AclPermission.EDIT);
    acl.removeRight(AclObjectType.PROPERTY, "outletTypeLVL2OnPremise", AclPermission.EDIT);
    acl.removeRight(AclObjectType.PROPERTY, "perfectStoreScore", AclPermission.EDIT);
    acl.removeRight(AclObjectType.PROPERTY, "regionalKeyAcct", AclPermission.EDIT);
    acl.removeRight(AclObjectType.PROPERTY, "routingIndicator", AclPermission.EDIT);
    acl.removeRight(AclObjectType.PROPERTY, "salesChannelDescription", AclPermission.EDIT);
    acl.removeRight(AclObjectType.PROPERTY, "seasonalIndicator", AclPermission.EDIT);
    acl.removeRight(AclObjectType.PROPERTY, "tableauDashboardLinks", AclPermission.EDIT);
    acl.removeRight(AclObjectType.PROPERTY, "termsofPayment", AclPermission.EDIT);
    acl.removeRight(AclObjectType.PROPERTY, "outletPriceCluster", AclPermission.EDIT);
    acl.removeRight(AclObjectType.PROPERTY, "licenseNumber", AclPermission.EDIT);    
    acl.removeRight(AclObjectType.PROPERTY, "priority", AclPermission.EDIT);
    acl.removeRight(AclObjectType.PROPERTY, "rollingIndustryVolume", AclPermission.EDIT);    
    acl.removeRight(AclObjectType.PROPERTY, "rollingMolsonVolume", AclPermission.EDIT);
  }
}

if(ApplicationContext.get('user').getSalesOrg() == Localization.resolve("USA_SalesOrg"))
{

  //fields which are specific to usa are declared below

  switch(me.getBoBpaMeta().getMobilityNameConstant())
  {
    case "Chain Parent" :
      acl.removeRight(AclObjectType.PROPERTY, "assignedEmployeeName", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "assignedSalesPosition", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "chainLevel1Name", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "accountDescription", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "eCommerceAccounts", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "hoursofOperations", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "howManyTapsatAccount", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "lastInvoiceDate", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "managedSubChannel", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "outletCode", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "preferredVisitDay", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "primaryOrderDay", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "status", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "storeLevelInstruction", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "tdLinkCode", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "teraAccountID", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "tradeChannel", AclPermission.EDIT);
      break;

    case "Chain On-Premise" :
      acl.removeRight(AclObjectType.PROPERTY, "assignedEmployeeName", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "assignedSalesPosition", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "chainLevel1Name", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "accountDescription", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "eCommerceAccounts", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "lastInvoiceDate", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "managedSubChannel", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "outletCode", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "status", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "tdLinkCode", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "teraAccountID", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "tradeChannel", AclPermission.EDIT);
      break;


    case "Chain Off-Premis" :
      acl.removeRight(AclObjectType.PROPERTY, "assignedEmployeeName", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "assignedSalesPosition", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "chainLevel1Name", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "accountDescription", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "eCommerceAccounts", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "howManyTapsatAccount", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "lastInvoiceDate", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "managedSubChannel", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "outletCode", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "status", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "tdLinkCode", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "teraAccountID", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "tradeChannel", AclPermission.EDIT);
      break;


    case "On-Premise" :
      acl.removeRight(AclObjectType.PROPERTY, "assignedEmployeeName", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "assignedSalesPosition", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "chainLevel1Name", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "accountDescription", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "eCommerceAccounts", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "lastInvoiceDate", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "managedSubChannel", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "outletCode", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "status", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "tdLinkCode", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "teraAccountID", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "tradeChannel", AclPermission.EDIT);
      break;


    case "Off-Premise" :
      acl.removeRight(AclObjectType.PROPERTY, "assignedEmployeeName", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "assignedSalesPosition", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "chainLevel1Name", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "accountDescription", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "eCommerceAccounts", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "lastInvoiceDate", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "managedSubChannel", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "outletCode", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "status", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "tdLinkCode", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "teraAccountID", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "tradeChannel", AclPermission.EDIT);
      break;

    case "Hierarchy" :
      acl.removeRight(AclObjectType.PROPERTY, "assignedEmployeeName", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "assignedSalesPosition", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "chainLevel1Name", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "accountDescription", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "eCommerceAccounts", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "lastInvoiceDate", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "managedSubChannel", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "outletCode", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "status", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "tdLinkCode", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "teraAccountID", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "tradeChannel", AclPermission.EDIT);
      break;

    case "Distributor" :
      acl.removeRight(AclObjectType.PROPERTY, "assignedEmployeeName", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "assignedSalesPosition", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "chainLevel1Name", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "accountDescription", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "eCommerceAccounts", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "hoursofOperations", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "howManyTapsatAccount", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "lastInvoiceDate", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "managedSubChannel", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "outletCode", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "preferredVisitDay", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "primaryOrderDay", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "status", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "tdLinkCode", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "teraAccountID", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "tradeChannel", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "visitFrequency", AclPermission.VISBLE);
      break;

    case "Ship-To" :
      acl.removeRight(AclObjectType.PROPERTY, "assignedEmployeeName", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "assignedSalesPosition", AclPermission.VISBLE);
      acl.removeRight(AclObjectType.PROPERTY, "chainLevel1Name", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "accountDescription", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "eCommerceAccounts", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "lastInvoiceDate", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "managedSubChannel", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "outletCode", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "status", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "tdLinkCode", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "teraAccountID", AclPermission.EDIT);
      acl.removeRight(AclObjectType.PROPERTY, "tradeChannel", AclPermission.EDIT);
      break;
  }
}

    ///////////////////////////////////////////////////////////////////////////////////////////////
    //                                                                                           //
    //               Add your customizing javaScript code above.                                 //
    //                                                                                           //
    ///////////////////////////////////////////////////////////////////////////////////////////////

    
}