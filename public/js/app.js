var app=angular.module('MyApp', ['ngRoute','ngMaterial', 'ngMessages','ui.grid','ui.grid.expandable', 'ui.grid.edit','ui.grid.selection','ui.grid.pinning']);

		app.controller('mainController',['$scope','dataLoad','$location',function($scope,dataLoad,$location){
			dataLoad.getAllData(function(data){
					$scope.data=data;
					$scope.selectedList='dashboard';
			});
			

		}]);


		