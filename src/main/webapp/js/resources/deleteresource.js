var myApp = angular.module('myApp');

myApp.factory("BookDeleteResource", function($resource) {

     return $resource("/bookhouse/delete/:id", {id: '@id'}, {
         delete_book: {
             method: 'DELETE',
             transformResponse: function(data, headersGetter){
                   return {data};
                 }

         }
     });
});