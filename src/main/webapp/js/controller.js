var myApp = angular.module('myApp');

myApp.controller('BookController',function($scope, BookResource, BookSaveResource, BookUpdateResource,BookDeleteResource, $routeParams) {
  
  //$scope.book = BookResource.query();
  
  $scope.id = "test";
  
  $scope.textid = $routeParams.param;

  $scope.showId = function () {
	
	  BookResource.showId({
          id : $scope.textid
      }, function(id) {
    	  $scope.id = id;
      });
  };

  //showid at startup  
  if($routeParams.param != ""){
	  $scope.showId();  
  }
  
  $scope.save = function () {
	  BookSaveResource.save($scope.insert,
			  function(id){
		  		$scope.insertText = id
		  	},function(err) {
		        $scope.errors = err.statusText;
		      });
  };
  
  $scope.updateBook = function () {
	  BookUpdateResource.update($scope.update,
			  function(id){
		  		$scope.updateText = id
		  	},function(err) {
		        $scope.errors = err.statusText;
		      });	  
  };
  
  $scope.deleteBook = function () {
	  	  BookDeleteResource.delete_book($scope.delete_book,
			  function(id){
	  		  	if(id.errorStatus){
	  		  		$scope.deleteText = "Customer removed";
	  		  	} else {
	  		  		$scope.deleteText = id.responseText;
	  		  	}
		  	},function(err) {
		        $scope.errors = err.statusText;
		      });	  
  };
  
  $scope.keyCheck = function ($event) {
	  if($event.charCode == 13){
		  this.showId();
	  }
		
  };
  
  $scope.goBack = function () {
	    window.history.back();
	}
  
});