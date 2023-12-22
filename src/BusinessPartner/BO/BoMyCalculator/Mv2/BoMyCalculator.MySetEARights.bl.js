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
 * @function mySetEARights
 * @this BoMyCalculator
 * @kind businessobject
 * @namespace CUSTOM
 */
function mySetEARights(){
    var me = this;
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //                                                                                           //
    //               Add your customizing javaScript code below.                                 //
    //                                                                                           //
    ///////////////////////////////////////////////////////////////////////////////////////////////
    
var me = this;
var acl = me.getACL();

if(me.getRecordTypeId() === " ") {
  acl.removeRight(AclObjectType.PROPERTY, "timeFrame", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "packageType", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "size", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "beerBrand", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "servingSizeOz", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "otherBrandName", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "priceToConsumer", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "priceToRetailer", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "kegsCasesPerWeek", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "numberOfStores", AclPermission.VISIBLE);
}
else {
  acl.addRight(AclObjectType.PROPERTY, "timeFrame", AclPermission.VISIBLE);
  acl.addRight(AclObjectType.PROPERTY, "packageType", AclPermission.VISIBLE);
  acl.addRight(AclObjectType.PROPERTY, "size", AclPermission.VISIBLE);
  acl.addRight(AclObjectType.PROPERTY, "beerBrand", AclPermission.VISIBLE);
  acl.addRight(AclObjectType.PROPERTY, "servingSizeOz", AclPermission.VISIBLE);
  acl.addRight(AclObjectType.PROPERTY, "otherBrandName", AclPermission.VISIBLE);
  acl.addRight(AclObjectType.PROPERTY, "priceToConsumer", AclPermission.VISIBLE);
  acl.addRight(AclObjectType.PROPERTY, "priceToRetailer", AclPermission.VISIBLE);
  acl.addRight(AclObjectType.PROPERTY, "kegsCasesPerWeek", AclPermission.VISIBLE);
  acl.addRight(AclObjectType.PROPERTY, "numberOfStores", AclPermission.VISIBLE);
}

if(me.getPackageType() === " ") {
  acl.removeRight(AclObjectType.PROPERTY, "size", AclPermission.EDIT);
}
else {
  acl.addRight(AclObjectType.PROPERTY, "size", AclPermission.EDIT);
}

if(me.getIsCalculated()==='true'){
  acl.addRight(AclObjectType.PROPERTY, "grossRevenuePerYear", AclPermission.VISIBLE);
  acl.addRight(AclObjectType.PROPERTY, "costPerOunce", AclPermission.VISIBLE);
  acl.addRight(AclObjectType.PROPERTY, "numberOfServings", AclPermission.VISIBLE);
  acl.addRight(AclObjectType.PROPERTY, "sizeInOunce", AclPermission.VISIBLE);
  acl.addRight(AclObjectType.PROPERTY, "costPerServing", AclPermission.VISIBLE);
  acl.addRight(AclObjectType.PROPERTY, "profitMargin", AclPermission.VISIBLE);
  acl.addRight(AclObjectType.PROPERTY, "grossRevenuePerKegCase", AclPermission.VISIBLE);
  acl.addRight(AclObjectType.PROPERTY, "netMarginPerKegCase", AclPermission.VISIBLE);
  acl.addRight(AclObjectType.PROPERTY, "grossRevenuePerWeek", AclPermission.VISIBLE);
  acl.addRight(AclObjectType.PROPERTY, "netMarginPerWeek", AclPermission.VISIBLE);
  acl.addRight(AclObjectType.PROPERTY, "netMarginPerYear", AclPermission.VISIBLE);
  acl.addRight(AclObjectType.PROPERTY, "grossRevenuePerYear", AclPermission.VISIBLE);
}
else{
  acl.removeRight(AclObjectType.PROPERTY, "grossRevenuePerYear", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "costPerOunce", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "numberOfServings", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "sizeInOunce", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "costPerServing", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "profitMargin", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "grossRevenuePerKegCase", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "netMarginPerKegCase", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "grossRevenuePerWeek", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "netMarginPerWeek", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "netMarginPerYear", AclPermission.VISIBLE);
  acl.removeRight(AclObjectType.PROPERTY, "grossRevenuePerYear", AclPermission.VISIBLE);
}

    ///////////////////////////////////////////////////////////////////////////////////////////////
    //                                                                                           //
    //               Add your customizing javaScript code above.                                 //
    //                                                                                           //
    ///////////////////////////////////////////////////////////////////////////////////////////////

    
}