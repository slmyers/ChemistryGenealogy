class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.string :name
      t.string :position
      t.boolean :approved

      t.index :approved
      t.index :name

      t.integer :institution 

      t.timestamps null: false
    end
  end
end
