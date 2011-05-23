class CreateTaskLists < ActiveRecord::Migration
  def self.up
    create_table :task_lists do |t|
      t.string :title
      t.timestamps
    end
    change_table :tasks do |t|
      t.integer :task_list_id
    end
  end

  def self.down
    drop_table :task_lists
    change_table :tasks do |t|
      t.remove :task_list_id
    end
  end
end
