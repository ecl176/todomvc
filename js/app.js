(function (angular) {
	'use strict';
	//主模块
var myApp = angular.module('myTodomvc',['ngRoute','app.controller.main']);
//配置路由
myApp.config(['$routeProvider',function  ($routeProvider) {
    $routeProvider
    .when('/:status?',{
      controller:'mainCtrl',
      templateUrl:'main_tmpl'
    })
    .otherwise({redirectTo:'/'});
}]);


//注册一个主要的控制器
// myApp.controller('mainCtrl',['$scope','$location',function($scope,$location){
// //文本框需要一份模型
// 	$scope.text = '';

//     $scope.todos = [{id: 1,text: '学习',completed:false},
// 					{id: 2,text: '睡觉',completed:false},
// 					{id: 3,text: '打豆豆',completed:true},];
// 	$scope.add = function(){
		
// 	$scope.todos.push({
// 	 id:Math.random(),
// 	 //id:getId(),
// 	 // function getId(){
// 	 // 	var id = Math.random();
// 	 // 	for(var i = 0;i<$scope.todos.length;i++){
// 	 // 		if(id===$scope.todos[i].id){
// 	 // 			id = getId();
// 	 // 			break;
// 	 // 		}
// 	 // 	}
// 	 // 	return id;
// 	 // };
// 	 text: $scope.text,
// 	 completed:false
// 	});
// 	$scope.text = '';
// 	};
//    $scope.remove = function(id){
//    	for(var i = 0;i < $scope.todos.length;i++){
//    	if ($scope.todos[i].id === id) {
//    		$scope.todos.splice(i,1);
//    	};
//    	}
//    };
//   $scope.clear = function(){
//   	var result = [];
//   	for(var i = 0; i < $scope.todos.length; i++){
//   		if(!$scope.todos[i].completed){
//   			result.push($scope.todos[i]);
//   		}
//   	}
//   	$scope.todos = result;
//   };
//    $scope.exisCompleted = function(){
//    	for(var i = 0; i < $scope.todos.length; i++){
//   		if($scope.todos[i].completed){
//   			return true;
//   		}
//   	}
//    	return false;
//    };
//    //编辑哪一个元素
//    $scope.currentEditingId = -1;
//    $scope.editing = function(id){

//    		$scope.currentEditingId = id;
   		
//    };
//    $scope.save = function(){
//    	$scope.currentEditingId = -1;
//    };
//    var now = true;
//    $scope.all = function(){
//    	for(var i = 0; i < $scope.todos.length; i++){
//   		$scope.todos[i].completed = now;
//   	}
//    	now = !now;
//    };
   
   
   
//    //状态筛选
//    $scope.selector = {};
//    $scope.$location = $location;
//    //$location只能监视属于$scope中的成员
//    $scope.$watch('$location.path()',function(now,old){
// 	   switch(now){
// 	   	case '/active':
// 	   	$scope.selector = { completed: false };
// 	   	break;
// 	   	case '/completed':
// 	   	$scope.selector = {completed:true};
// 	   	break;
// 	   	default:
// 	   	$scope.selector = {};
// 	   	break;
// 	   };	
// 	 });
// 	 //filter默认过滤器使用的是模糊匹配
// 	 $scope.equalCompare = function (source,target){

// 	 	return source == target;
// 	 };
   
   
// }]);
})(angular);
//不依赖全局的某个变量，可以使用angular对象