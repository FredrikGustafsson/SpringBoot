var myApp = angular.module('myApp');

myApp.factory("BookUpdateResource", function($resource) {

     return $resource("/bookhouse/update/:id/:name", {id: '@id', name: '@name'}, {
         update: {
             method: 'PUT'
         }
     });
});