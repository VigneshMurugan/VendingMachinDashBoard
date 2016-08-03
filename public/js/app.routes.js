app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl : 'js/myApp/views/dashboard.view.html',
      controller : 'dashboardController'
    })
    .when('/equipment', {
      templateUrl : 'js/myApp/views/equipment.view.html',
      controller : 'equipmentController'
    })
    .when('/equipmentDetails', {
      templateUrl : 'js/myApp/views/equipmentDetails.view.html',
      controller : 'equipmentDetailsController'
    })

  }
]);
