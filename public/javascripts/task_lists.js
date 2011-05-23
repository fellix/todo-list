$(function(){
	window.TaskList = Backbone.Model.extend({
		url: function(){
			return this.id ? '/task_lists/'+this.id : '/task_lists';
		},
		defaults: { task_list: { 
			title: "nothing"
		} },
		
		initialize: function(){
		}
	});
	
	window.TaskListCollection = Backbone.Collection.extend({
		model: TaskList,
		url: '/task_lists'
	});
	
	window.TaskLists = new TaskListCollection;
	
	window.TaskListView = Backbone.View.extend({
		tagName: "li",
		
		events:{
			
		},
		initialize: function(){
			
		},
		
		render: function(){
			var task_list = this.model.toJSON();
			$(this.el).html(ich.list_template(task_list));
			return this;
		}
	});
});