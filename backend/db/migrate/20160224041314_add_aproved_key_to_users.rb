class AddAprovedKeyToUsers < ActiveRecord::Migration
  def change
    add_column :users, :approved, :int
  end
end
