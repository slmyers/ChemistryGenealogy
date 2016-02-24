class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :password
      # Used for authentication
      t.string :password_digest
      t.timestamps null: false
      t.string :email
      t.string :first_name
      t.string :last_name
      t.boolean :approved
    end
  end
end
