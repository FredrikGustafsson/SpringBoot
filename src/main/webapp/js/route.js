    var module = angular.module("myApp");

    module.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/showall', {
                    templateUrl: 'showall.html',
                    controller: 'BookController'
                }).
                when('/showid', {
                    templateUrl: 'showId.html',
                    controller: 'BookController'
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
