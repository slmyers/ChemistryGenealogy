class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :password, :null => false
      # Used for authentication
      t.string :password_digest, :null => false
      t.timestamps null: false

      t.string :email, :null => false
      t.string :first_name, :null => false
      t.string :last_name, :null => false

      t.boolean :approved, :null => false
      t.index :approved
    end
  end
end
