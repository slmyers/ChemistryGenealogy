class CreateSupervisors < ActiveRecord::Migration
  def change
    create_table :supervisors do |t|
      t.string :name

      t.boolean :approved
      t.index :approved

      t.integer :degree
      t.integer :person
      t.integer :supervisor_key

      t.index :degree
      t.index :person
      t.index :supervisor_key 

      t.timestamps null: false
    end
  end
end
