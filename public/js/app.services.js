app.factory('dataLoad', ['$http',function($http){
	var factory = {};

	factory.getAllData=function(success){
		 $http.get('/js/dataone.json').success( function(data) {
		        success(data);
      });

      	}


	return factory;
}]);
app.service('equipmentDtlsService', ['$http',function($http){
	var equipmentDetails = {};

	this.setSelectedEquipment=function(data){
		 equipmentDetails=data;
      };
	this.getSelectedEquipment=function(){
		 return equipmentDetails;
      };
}]);