var app = angular.module('MyCV', ['ngRoute']); //, [],
app.value("AppConfig", { "Api_Server": $("#hdApiUrl").val() + "/api", "Api_Server2": "" });
app.value("MessageConfig", { "message1": "<p>Thông tin đã được gửi đến email của Quý khách.</p><p>Xin trân trọng cảm ơn!</p>", "message2": "<p>Thông tin liên hệ của Quý khách đã được tiếp nhận.</p><p>Chúng tôi sẽ liên hệ Quý khách trong thời gian sớm nhất.</p><p>Xin trân trọng cảm ơn!</p>", "message3": "<p>Cám ơn quý khách đã đăng ký nhận những tin mới nhất từ chúng tôi !</p>" });


app.config(['$routeProvider', '$httpProvider', '$controllerProvider', '$provide', '$locationProvider', '$filterProvider', '$compileProvider', //
    function($routeProvider, $httpProvider, $controllerProvider, $provide, $locationProvider, $filterProvider, $compileProvider) { //
        app.registerController = $controllerProvider.register;
        app.registerService = $provide.service;
        app.registerFilter = $filterProvider.register;
        app.registerDirective = $compileProvider.directive;
        app.registerFactory = $provide.factory;
        //var version = "?ci-date=" + (new Date()).getTime();

        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
        // $httpProvider.interceptors.push(['$q', '$location', function($q, $location) {
        //     return {
        //         request: function(config) {
        //             return config;
        //         },
        //         response: function(result) {
        //             return result;
        //         },
        //         responseError: function(rejection) {
        //             var date = new Date();
        //             //var str = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds();
        //             return $q.reject(rejection);
        //         }
        //     }
        // }]);

        $routeProvider.when('/home', { templateUrl: 'App/index.html', controller: 'Home' });

        $routeProvider.when('/about', { templateUrl: 'App/about.html', controller: 'About' });
    }
    ]);

app.run(['$rootScope', '$location', '$filter', '$route', 'MessageConfig',
    function($rootScope, $location, $filter, $route, message) {
        $rootScope.MainAlert = "Hello World! This is my first time.";
    }
    ]);

app.controller('Home', function ($scope, $location) {
    $scope.Title="Home page";
    $scope.Hello="Welcome to Home page";
});

app.controller('About', function ($scope, $location) {    
    $scope.Title="About us";
    $scope.Hello="Welcome to About us page";
});