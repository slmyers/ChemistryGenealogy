class CreateAdmins < ActiveRecord::Migration
  def change
    create_table :admins do |t|
      t.timestamps null: false
      t.boolean :approved
    end
  end
end
