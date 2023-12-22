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
 * @function prepareCategoryQuickFilterList
 * @this BoOrder
 * @kind businessobject
 * @async
 * @namespace CORE
 * @param {Object} filterValue
 * @param {String} promotion
 * @returns promise
 */
function prepareCategoryQuickFilterList(filterValue, promotion){
    var me = this;
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //                                                                                           //
    //               Add your customizing javaScript code below.                                 //
    //                                                                                           //
    ///////////////////////////////////////////////////////////////////////////////////////////////
    
var promise;
var orderItems;
var ifSelectedInList = false;
var ifSelectedInCache = false;
var currentPromotion = "";

if(me.getBoOrderMeta().getConsiderSelectablePromotion() == '1' && Utils.isDefined(me.getLoSelectablePromotion().getCurrent())){
  currentPromotion = me.getLoSelectablePromotion().getCurrent();
}
var currentItemFilter = me.getLoItemFilter().getCurrent().getFilterCode();
var categoryId = me.getBoItemTabManager().getCurrentFilterId();

if(Utils.isDefined(me.getLoProductCategoryFilter())){
  ifSelectedInList = me.getLoProductCategoryFilter().getItemsByParam({"isSelected": true}).length > 0;
}
if(Utils.isDefined(me.getCategoryQuickFilterCache()) && !Utils.isEmptyString(me.getCategoryQuickFilterCache())){
  ifSelectedInCache = Object.keys(me.getCategoryQuickFilterCache()).length > 0;
}

//Creates list for all cases
var addItemsToLoProductCategoryFilter = function (items){
  var loProductCategoryFilter = me.getLoProductCategoryFilter();
  var categoryExists;
  var item;

  for (var i=0; i<items.length; i++){
    var category = Utils.getToggleText("DomPrdCategory", items[i].getCategory());
    categoryExists = loProductCategoryFilter.getItemsByParam({"text": category});
    if (categoryExists.length === 0){
      item = {
        "pKey": PKey.next(),
        "text": category,
        "isSelected": false,
        "specialOption": "",
        "filter": "Category"
      };
      loProductCategoryFilter.addListItems([item]);
    }
  }
  loProductCategoryFilter.orderBy({"text": "ASC"});
};

var selectedFilter;
//Reapply filter from either LoProductCategoryFilter or CategoryFilterCache
var applySelectedFilterToList = function (){
  var selectedFilterExistsInLo = me.getLoProductCategoryFilter().getItemsByParam({"text": selectedFilter});

  if(selectedFilterExistsInLo.length > 0){
    selectedFilterExistsInLo[0].setIsSelected(true);
  }
};


if((ifSelectedInList || ifSelectedInCache) && promotion === "0"){
  //Create list when one of the quick filters is selected either in LoProductQuickFilter or QuickFilterCache
  var loProductCategoryFilter = me.getLoProductCategoryFilter();

  if(ifSelectedInList === true){
    selectedFilter = loProductCategoryFilter.getItemsByParam({"isSelected": true})[0].text;
  } else{
    selectedFilter = me.getCategoryQuickFilterCache();
  }

  loProductCategoryFilter.removeAllItems();
  ApplicationContext.set('categoryFilter', selectedFilter);
  me.getLoItems().resetFilter("category");
  promise = loProductCategoryFilter.createAsync().then(
    function (){
      orderItems = me.getLoItems().getItems();
      if(!Utils.isDefined(filterValue)){
        me.getLoItems().resetAllFilters();
      }
      if(me.getBoOrderMeta().getConsiderSelectablePromotion() == '1' && Utils.isDefined(me.getLoSelectablePromotion().getCurrent())){
        me.getLoItems().setItemFilter(currentItemFilter, categoryId, currentPromotion.getPKey());
      }
      else{
        me.getLoItems().setItemFilter(currentItemFilter, categoryId, "");
      }
      if(orderItems.length > 0){
        addItemsToLoProductCategoryFilter(orderItems);
      }
      applySelectedFilterToList();
    });
} else{
  //Create new list when no quick filter is applied
  promise = BoFactory.createObjectAsync("LoProductCategoryFilter", {}).then(
    function (quickFilterList){
      me.setLoProductCategoryFilter(quickFilterList);

      if(promotion == "1"){
        //Reset filter and QuickFilterCache on promotion switch
        me.getLoItems().resetFilter("category");
        me.setCategoryQuickFilterCache(null);
        ApplicationContext.set('categoryFilter', null);
      } else{
        var loProductCategoryFilter = me.getLoProductCategoryFilter();
        orderItems = me.getLoItems().getItems();
        if(orderItems.length > 0){
          addItemsToLoProductCategoryFilter(orderItems);
        }
      }
    });
}

    ///////////////////////////////////////////////////////////////////////////////////////////////
    //                                                                                           //
    //               Add your customizing javaScript code above.                                 //
    //                                                                                           //
    ///////////////////////////////////////////////////////////////////////////////////////////////

    return promise;
}