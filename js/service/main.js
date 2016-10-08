/*
* @Author: eclipse
* @Date:   2016-10-08 14:59:05
* @Last Modified by:   eclipse
* @Last Modified time: 2016-10-08 18:21:38
*/

	(function(angular){
		'use strict';

		angular.module('app.service.main',[])
		.service('mainService',['$window',function ($window) {
			var storage = $window.localStorage;
			var todos = storage['my_todo_list'] ? JSON.parse(storage['my_todo_list']) : [];
          	
          	function getId(){
          		var id = Math.random();
          		for(var i = 0;i<todos.length;i++){
          			if(todos[i].id === id){
          				id = getId();
          				break;
          			}
          		}
          		return id;
          	};

          	this.save = function(){
          		storage['my_todo_list'] = JSON.stringify(todos); 
          	};

          	// 控制私有字段的访问权限
		    this.get = function() {
		        return todos;
		    };

			//添加
			this.add = function(text){
				todos.push({
				id:getId(),
				text:text,
				completed:false
			  });
				this.save();
			};
			//处理删除
			this.remove = function(id){
				for(var i = 0;i<todos.length;i++){
					if(todos[i].id == id){
						todos.splice(i,1);
					}
				}
				this.save();
			};

			//删除已完成的
			this.clearcomplated = function(){
				var result = [];
				for(var i = 0;i<todos.length;i++){
					if(!todos[i].completed){
						result.push(todos[i]);
					}
				}
				todos = result;
				this.save();
				return todos;
			};
			//是否有已经完成的
			this.exisCompleted = function(){
				for( var i = 0;i<todos.length;i++){
					if(todos[i].completed){
						return true;
					}
				}
				return false;
			};

			//全选
			var now = true;
      		this.toggleAll = function() {
               for (var i = 0; i < todos.length; i++) {
               todos[i].completed = now;
                }
                    now = !now;
                    this.save();
          };


		}]);


	})(angular);