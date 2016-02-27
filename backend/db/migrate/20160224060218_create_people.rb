class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.string :name, :null => false, :unique => true
      t.string :position
      t.boolean :approved, :null => false

      t.index :approved
      t.index :name

      t.integer :institution_id

      t.timestamps null: false
    end
  end
end
