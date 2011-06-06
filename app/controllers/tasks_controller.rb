class TasksController < ApplicationController
  respond_to :json, :xml, except: :new
  respond_to :js, only: [:new, :close]
  def index
    @tasks = Task.all
    respond_with @tasks
  end
  
  def new
    @task_list = TaskList.find params[:task_list_id]
    @task = Task.new task_list: @task_list
    respond_with(@task)
  end
  
  def create
    @task = Task.new params[:task]
    respond_with(@task)
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
  
  def close
    @task_list = TaskList.find params[:task_list_id]
    respond_with @task_list
  end
end
