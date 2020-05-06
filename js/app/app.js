var MTWPApp=angular.module("MTWPApp",['ngRoute'])
    .config(function($routeProvider){
        $routeProvider.when('/',{
            templateUrl: 'main.html'
        })
        .when('/about',{
            templateUrl: 'about.html'
        })
        .when('/ask',{
            templateUrl: 'ask.html'
        })
        .when('/build',{
            templateUrl:'build.html'
        })
        .when('/contact',{
            templateUrl:'contact.html'
        })
        .when('/results',{
            templateUrl:'results.html'
        })
        .when('/update',{
            templateUrl:'update.html'
        })
        .when('/why',{
            templateUrl:'why.html'
        })
        .otherwise({
            redirectTo: '/'
        });
    });