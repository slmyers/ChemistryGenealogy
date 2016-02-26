class CreateAdmins < ActiveRecord::Migration
  def change
    create_table :admins do |t|
      t.timestamps null: false
      t.boolean :approved
      t.index :approved
      t.integer :user
    end
  end
end
