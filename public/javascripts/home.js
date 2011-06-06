$(function(){
	window.NewTaskListForm = Backbone.View.extend({
		el: $("#new_task_list_form"),
		
		render: function(){
			$(this.el).html($('#new_list_template').html());
			return this;
		},
		hide: function(){
			$(this.el).html("");
			return this;
		}
	});
	
	window.AppView = Backbone.View.extend({
		el: $("#task_app"),
	
		events:{
			"click a#new_task_list": "renderForm",
			"click a#done_task_list": "closeForm",
			"click a.done_task": "closeForm",
			"submit form#new_task_list": "createTaskList",
		},
		
		initialize: function(){
			_.bindAll(this, 'addOne', 'addAll');
			
			TaskLists.bind('add', this.addOne);
			TaskLists.bind('refresh', this.addAll);
			TaskLists.bind('all', this.render);
			
			TaskLists.fetch();
			
			Tasks.bind('add', this.addTask);
			Tasks.bind('refresh', this.addTasks);
			Tasks.bind('all', this.renderTask);
			
			Tasks.fetch();
			
		},
		renderForm: function(){
			var task_form = new NewTaskListForm;
			task_form.render();
		},
		closeForm: function(){
			var task_form = new NewTaskListForm;
			task_form.hide();
		},
		addOne: function(task_list){
			var view = new TaskListView({model: task_list});
			this.$("#task_lists").append(view.render().el);
		},
		
		addAll: function(){
			TaskLists.each(this.addOne);
		},
		
		newAttributes: function(event){
			var new_task_list_form = $(event.currentTarget).serializeObject();
			return { task_list: { 
				title: new_task_list_form["task_list[title]"]
			} };
		},
		createTaskList: function(e){
			e.preventDefault();
			var params = this.newAttributes(e);
			TaskLists.create(params);
			$(e.currentTarget).clearForm();
		},
		addTask: function(task){
			var view = new TaskView({model: task});
			this.$("#tasks_"+task.task_list_id).append(view.render().el);
		},
		
		addTasks: function(){
			Tasks.each(this.addTask);
		}
	
	});

	window.App = new AppView;
});
