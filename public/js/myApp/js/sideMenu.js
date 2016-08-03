angular.module('MyApp')
		.controller('sideMenuController',['$scope','dataLoad','$location',function($scope,dataLoad,$location){
				$scope.updateView=function(selectedList,path){
					$scope.selectedList=selectedList;
					if(path!==undefined)
					$location.path(path);
				}

				if($location.path()=='/')
					$scope.updateView('dashboard');
				if($location.path()=='/equipment'){
					$scope.updateView('equipment');

				}


		}]);