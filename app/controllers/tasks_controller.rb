class TasksController < ApplicationController
  respond_to :json, :xml
  def index
    @tasks = Task.all
    respond_with @tasks
  end
  
  def create
    @task = Task.new params[:task]
    respond_with @task
  end
  
  def update
    @task = Task.find params[:id]
    @task.update_attributes(params[:task])
    respond_with @task
  end
  
  def show
    @task = Task.find params[:id]
    respond_with @task
  end
end
