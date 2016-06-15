var myApp = angular.module('myApp');

myApp.controller('ShowIdController',function($scope, BookResource,$routeParams) {
  
  //$scope.book = BookResource.query();
  
  $scope.id = "test";
  
  $scope.textid = $routeParams.param;
  
  $scope.showbutton = false;

  $scope.showId = function () {
	
	  BookResource.showId({
          id : $scope.textid
      }, function(id) {
    	  $scope.id = id;
      });
  };

  //showid at startup  
  if($routeParams.param != null){
	  $scope.showbutton = true;
	  $scope.showId();  
  }

  
  $scope.keyCheck = function ($event) {
	  if($event.charCode == 13){
		  this.showId();
	  }
		
  };
  
  $scope.goBack = function () {
	    window.history.back();
	}
  
});