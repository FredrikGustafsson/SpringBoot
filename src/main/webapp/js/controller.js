var myApp = angular.module('myApp');

myApp.controller('BookController',function($scope, BookResource, BookSaveResource, BookUpdateResource, BookDeleteResource) {
  
  //$scope.book = BookResource.query();
  
  $scope.id = "test";
  
  
  $scope.showId = function () {
	
	  BookResource.showId({
          id : $scope.textid
      }, function(id) {
    	  $scope.id = id;
      });
  };
  
  $scope.showAll = function () {
		
	  BookResource.showall(null, function(book) {
    	  $scope.book = book; 
      });
  };
  
  $scope.save = function () {
	  var bookSaveResource = new BookSaveResource($scope.insert);
	  bookSaveResource.$save($scope.insert,
			  function(id){
		  		$scope.insertText = id
		  	},function(err) {
		        $scope.errors = err.statusText;
		      });
  };
  
  $scope.updateBook = function () {
	  var bookUpdateResource = new BookUpdateResource($scope.update);
	  bookUpdateResource.$update($scope.update,
			  function(id){
		  		$scope.updateText = id
		  	},function(err) {
		        $scope.errors = err.statusText;
		      });	  
  };
  
  $scope.deleteBook = function () {
	  	  BookDeleteResource.delete_book($scope.delete_book,
			  function(id){
		  		if(id.data == "true"){
		  			$scope.errors = "Customer Deleted";
		  		} else {
		  			$scope.errors = "Cant deleted customer";
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
  
});