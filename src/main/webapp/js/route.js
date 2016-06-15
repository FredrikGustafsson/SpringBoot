    var module = angular.module("myApp");

    module.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/showall', {
                    templateUrl: 'showall.html',
                    controller: 'ShowController'
                }).
                when('/showid', {
                    templateUrl: 'showId.html',
                    controller: 'ShowIdController'
                }).
                when('/showid:param', {
                    templateUrl: 'showId.html',
                    controller: 'ShowIdController'
                }).
                when('/insert', {
                    templateUrl: 'insertId.html',
                    controller: 'BookController'
                }).
                when('/update', {
                    templateUrl: 'updateId.html',
                    controller: 'BookController'
                }).
                when('/delete', {
                    templateUrl: 'deleteId.html',
                    controller: 'BookController'
                }).
                when('/static', {
                    templateUrl: 'teststatic.html',
                }).
                otherwise({
                    redirectTo: '/'
                });
        }]);
