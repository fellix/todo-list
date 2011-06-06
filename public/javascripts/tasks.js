$(function(){
	window.Task = Backbone.Model.extend({
		url: function(){
			return this.id ? '/task_lists/'+this.task_list_id+'/tasks/'+this.id : '/task_lists/'+this.task_list_id+'/tasks';
		},
		defaults: { task: { 
		  task_list_id: null,
			title: "nothing"
		} },
		
		initialize: function(){
		}
	});
	
	window.TaskCollection = Backbone.Collection.extend({
		model: Task,
		url: '/tasks'
	});
	
	window.Tasks = new TaskCollection;
	
	window.TaskView = Backbone.View.extend({
		tagName: "li",
		
		events:{
			
		},
		initialize: function(){
			
		},
		
		render: function(){
			var task = this.model.toJSON();
			$(this.el).html(ich.task_template(task));
			return this;
		}
	});
});