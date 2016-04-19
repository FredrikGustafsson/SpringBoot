var myApp = angular.module('myApp');

myApp.controller('ShowController',function($scope, BookResource) {
  
 	
  $scope.showAll = function () {
		
	  BookResource.showall(null, function(book) {
    	  $scope.book = book; 
      });
  };
  
  $scope.showAll();
  
});