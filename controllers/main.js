// Creación del módulo
var rulesApp = angular.module('rulesApp', ['ngRoute']);

// Configuración de las rutas
rulesApp.config(function($routeProvider) {

    $routeProvider
        .when('/main', {
            templateUrl : 'views/main.html',
            controller  : 'mainController'
        })
        .when('/about', {
            templateUrl : 'views/about.html',
            controller  : 'aboutController'
        })
        .when('/home', {
            templateUrl : 'views/home.html',
            controller  : 'homeController'
        })
        .when('/users', {
            templateUrl : 'views/users.html',
            controller  : 'userController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});

rulesApp.controller('mainController', function($scope) {
    $scope.message = 'Hola, Mundo!';
});

rulesApp.controller('aboutController', function($scope) {
    $scope.message = 'Esta es la página "Acerca de"';
});

rulesApp.controller('homeController', function($scope) {
    $scope.message = 'Esta es la página de "Contacto", aquí podemos poner un formulario';
});

rulesApp.controller('userController', function($scope) {
    $scope.message = 'Usuarios de la aplicación';
    $scope.users={};
  	$scope.getAllUsers = function($http){
      $scope.users=[{"id":11,"firstname":"Lilia","lastname":"Espinosa"},
                    {"id":15,"firstname":"Martha Patricia","lastname":"Espinosa"},
                    {"id":26,"firstname":"Marta Patricia","lastname":"Espinosa"},
                    {"id":34,"firstname":"Juan Antonio","lastname":"Perez"},
                    {"id":35,"firstname":"José Miguel","lastname":"Mora"},
                    {"id":36,"firstname":"Juan","lastname":"Gonzales"}];
  	}
});

rulesApp.controller('parserMenu', function($scope, $http) {
  $http.get('models/menu.json')
       .then(function(res){
          $scope.menu = res.data.menu;
        });
});
