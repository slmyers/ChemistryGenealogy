class AddIndexToUsers < ActiveRecord::Migration
  def change
    add_index :users, :approved
  end
end
