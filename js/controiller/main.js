/*
* @Author: eclipse
* @Date:   2016-10-08 14:45:03
* @Last Modified by:   eclipse
* @Last Modified time: 2016-10-08 18:19:52
*/

(function(angular){
	'use strict';

var controllers = angular.module('app.controller.main',['app.service.main']);
	controllers.controller('mainCtrl',[
		'$scope',
		'$routeParams',
		'$route',
		'mainService',
		function($scope,$routeParams,$route,mainService){
//文本框需要一份模型
		    $scope.text = '';

		    $scope.todos = mainService.get();

		    $scope.add = function(){
		    	if(!$scope.text){
		    		return;
		    	}
		    	mainService.add($scope.text);
		    	$scope.text = '';
		   };
		    
		    $scope.remove = mainService.remove;
		    // $scope.remove = function(id){
		    // 	mainService.remove(id);
		    // }

    		$scope.clear = function(){
		    var newTodos = mainService.clearcomplated();
		    $scope.todos = newTodos;	
		   };

		   $scope.all = mainService.toggleAll;

    		$scope.toggle = function() {
        	mainService.save();
      		};

		    $scope.exisCompleted = mainService.exisCompleted;
		   
		   //编辑哪一个元素
		   $scope.currentEditingId = -1;
		   $scope.editing = function(id){
		      $scope.currentEditingId = id;
		   };
		   $scope.save = function(){
		    $scope.currentEditingId = -1;
		   };


		   

		    $scope.selector = {};
		    var status = $routeParams.status;
		    switch(status){
		      case 'active':
		      $scope.selector = { completed: false };
		      break;
		      case 'completed':
		      $scope.selector = {completed:true};
		      break;
		      default:
		      $route.updateParams({status:''});
		      $scope.selector = {};
		      break;
		     }; 
		   
		   //filter默认过滤器使用的是模糊匹配
		   $scope.equalCompare = function (source,target){

		    return source == target;
		   };
   
   
}]);

})(angular);