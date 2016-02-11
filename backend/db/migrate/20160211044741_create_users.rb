class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|

      # Creates columns in the table for username and password
      t.string :username
      t.string :password

      # Used for authentication
      t.string :password_digest

      t.timestamps null: false
    end
  end
end
