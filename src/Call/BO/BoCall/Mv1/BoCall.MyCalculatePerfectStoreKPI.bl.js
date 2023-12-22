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
 * @function myCalculatePerfectStoreKPI
 * @this BoCall
 * @kind businessobject
 * @namespace CUSTOM
 */
function myCalculatePerfectStoreKPI(){
    var me = this;
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //                                                                                           //
    //               Add your customizing javaScript code below.                                 //
    //                                                                                           //
    ///////////////////////////////////////////////////////////////////////////////////////////////
    
var questions = me.getBoJobManager().getLoQuestions().getItems();
var availabityScore = 0;
var priceScore = 0;
var visibilityScore = 0;
var qualityScore = 0;
var totalPSI = 0;

for(var i=0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  if(currentQuestion.getDone() == "1"){
    var scoreAnsArray = currentQuestion.scoreAnswers.split(";");
    if(scoreAnsArray.includes(currentQuestion.getValue())){
      if (currentQuestion.getMyPerfectStoreVariable() == "Availability"){
        availabityScore = availabityScore + currentQuestion.getScore();
      }
      else if (currentQuestion.getMyPerfectStoreVariable() == "Price"){
        priceScore = priceScore + currentQuestion.getScore();
      }
      else if (currentQuestion.getMyPerfectStoreVariable() == "Visibility"){
        visibilityScore = visibilityScore + currentQuestion.getScore();
      }
      else if (currentQuestion.getMyPerfectStoreVariable() == "Quality"){
        qualityScore = qualityScore + currentQuestion.getScore();
      }
    }
  }
}

totalPSI = availabityScore + priceScore + visibilityScore + qualityScore;

me.getLoMyCustomerPerfectStoreIndex().getAllItems()[0].setAvailability(availabityScore);
me.getLoMyCustomerPerfectStoreIndex().getAllItems()[0].setPrice(priceScore);
me.getLoMyCustomerPerfectStoreIndex().getAllItems()[0].setVisibility(visibilityScore);
me.getLoMyCustomerPerfectStoreIndex().getAllItems()[0].setQuality(qualityScore);
me.getLoMyCustomerPerfectStoreIndex().getAllItems()[0].setTotalPSI(totalPSI);

    ///////////////////////////////////////////////////////////////////////////////////////////////
    //                                                                                           //
    //               Add your customizing javaScript code above.                                 //
    //                                                                                           //
    ///////////////////////////////////////////////////////////////////////////////////////////////

    
}