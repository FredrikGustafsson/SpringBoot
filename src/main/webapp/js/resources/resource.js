var myApp = angular.module('myApp');

myApp.factory("BookResource", function($resource) {
    var actions = {};
    actions['showall'] =  {
    		url : "/bookhouse/showall",
            method : 'GET',
            isArray: true
        };
    actions['showId'] =  {
            url : "/bookhouse/showid/:id",
            method : 'GET'
        };
    
    return $resource(null, null, actions);
});