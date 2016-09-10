
angular.module('myApp', []).controller('controlNames', function ($scope) {

    $scope.name = [
        'Vilnius',
        'Kaunas',
        'Panevėžys',
        'Šiauliai',
        'Klaipėda',
        'Alytus',
        'Marijampolė',
        'Molėtai'
        ];

});

'use strict';


var app = angular.module('example359', []).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/', { templateUrl: 'pages/index.html', activetab: 'projects', controller: HomeCtrl }).
    when('/project/:projectId', {
        templateUrl: function (params) { return 'pages/' + params.projectId + '.html'; },
        controller: ProjectCtrl,
        activetab: 'projects'
    }).
    otherwise({ redirectTo: '/' });
}]).run(['$rootScope', '$http', '$browser', '$timeout', "$route", function ($scope, $http, $browser, $timeout, $route) {
    $scope.$on("$routeChangeSuccess", function (scope, next, current) {
        $scope.part = $route.current.activetab;
    });

}]);