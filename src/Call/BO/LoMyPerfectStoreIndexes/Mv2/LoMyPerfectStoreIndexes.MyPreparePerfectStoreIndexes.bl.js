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
 * @function myPreparePerfectStoreIndexes
 * @this LoMyPerfectStoreIndexes
 * @kind listobject
 * @async
 * @namespace CUSTOM
 * @param {Object} mainBO
 * @returns promise
 */
function myPreparePerfectStoreIndexes(mainBO){
    var me = this;
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //                                                                                           //
    //               Add your customizing javaScript code below.                                 //
    //                                                                                           //
    ///////////////////////////////////////////////////////////////////////////////////////////////
    
var jsonQuery = {};
jsonQuery.params = [{
  "field" : "currentCustomerPKey",
  "operator" : "EQ",
  "value" : mainBO.getBpaMainPKey()
}];

var totalPSI;
var availability;
var visibility;
var quality;
var price;
var totalPSIBenchmark;
var availabilityBenchmark;
var visibilityBenchmark;
var qualityBenchmark;
var priceBenchmark;
var totalPSIBenchmark;


var promise = BoFactory.loadObjectByParamsAsync("LoMyCustomerPerfectStoreIndex", jsonQuery)
.then(function(customerPSI) {
  
  mainBO.setLoMyCustomerPerfectStoreIndex(customerPSI);
  var currentCustomerPSI = customerPSI.getAllItems()[0];

  var items = [];

  var item1 = {
    "pKey" : PKey.next(),     
    "icon" : "MyActivityImage",     
    "score" : (Utils.isDefined(currentCustomerPSI.availability)) ? currentCustomerPSI.availability : 0 ,
    "benchmarkScore" : (Utils.isDefined(currentCustomerPSI.availabilityBenchmark)) ? currentCustomerPSI.availabilityBenchmark : " - ",
    "indicatorImage" : (currentCustomerPSI.availability>=currentCustomerPSI.availabilityBenchmark) ? "MyGreenUpArrow" : "MyRedDownImage"
  };
  items.push(item1);

  var item2 = {
    "pKey" : PKey.next(),     
    "icon" : "MyVisibilityImage",     
    "score" : (Utils.isDefined(currentCustomerPSI.visibility)) ? currentCustomerPSI.visibility : 0 ,
    "benchmarkScore" : (Utils.isDefined(currentCustomerPSI.visibilityBenchmark)) ? currentCustomerPSI.visibilityBenchmark : " - ",
    "indicatorImage" : (currentCustomerPSI.visibility>=currentCustomerPSI.visibilityBenchmark) ? "MyGreenUpArrow" : "MyRedDownImage"
  };
  items.push(item2);
  
  var item3 = {
    "pKey" : PKey.next(),     
    "icon" : "MyQualityImage",     
    "score" : (Utils.isDefined(currentCustomerPSI.quality)) ? currentCustomerPSI.quality : 0 ,
    "benchmarkScore" : (Utils.isDefined(currentCustomerPSI.qualityBenchmark)) ? currentCustomerPSI.qualityBenchmark : " - ",
    "indicatorImage" : (currentCustomerPSI.quality>=currentCustomerPSI.qualityBenchmark) ? "MyGreenUpArrow" : "MyRedDownImage"
  };
  items.push(item3);
  
  var item4 = {
    "pKey" : PKey.next(),     
    "icon" : "MyPriceImage",     
    "score" : (Utils.isDefined(currentCustomerPSI.price)) ? currentCustomerPSI.price : 0 ,
    "benchmarkScore" : (Utils.isDefined(currentCustomerPSI.priceBenchmark)) ? currentCustomerPSI.priceBenchmark : " - ",
    "indicatorImage" : (currentCustomerPSI.price>=currentCustomerPSI.priceBenchmark) ? "MyGreenUpArrow" : "MyRedDownImage"
  };
  items.push(item4);
  
  var item5 = {
    "pKey" : PKey.next(),     
    "icon" : "MyTotalImage",     
    "score" : (Utils.isDefined(currentCustomerPSI.totalPSI)) ? currentCustomerPSI.totalPSI : 0 ,
    "benchmarkScore" : (Utils.isDefined(currentCustomerPSI.totalPSIBenchmark)) ? currentCustomerPSI.totalPSIBenchmark : " - ",
    "indicatorImage" : (currentCustomerPSI.totalPSI>=currentCustomerPSI.totalPSIBenchmark) ? "MyGreenUpArrow" : "MyRedDownImage"
  };
  items.push(item5);
  
  me.removeAllItems();
  me.addItems(items);

});

    ///////////////////////////////////////////////////////////////////////////////////////////////
    //                                                                                           //
    //               Add your customizing javaScript code above.                                 //
    //                                                                                           //
    ///////////////////////////////////////////////////////////////////////////////////////////////

    return promise;
}