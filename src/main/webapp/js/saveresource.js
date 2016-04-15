var myApp = angular.module('myApp');

myApp.factory("BookSaveResource", function($resource) {
     return $resource("/bookhouse/save");
});