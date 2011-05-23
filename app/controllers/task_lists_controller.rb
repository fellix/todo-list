class TaskListsController < ApplicationController
  respond_to :json, :xml
  def index
    @task_lists = TaskList.all
    respond_with @task_lists
  end
  
  def create
    @task_list = TaskList.new params[:task_list]
    @task_list.save
    respond_with @task_list
  end
  
  def update
    @task_list = TaskList.find params[:id]
    @task_list.update_attributes(params[:task_list])
    respond_with @task_list
  end
  
  def show
    @task_list = TaskList.find params[:id]
    respond_with @task_list
  end
end
