class CreateSupervisions < ActiveRecord::Migration
  def change
    create_table :supervisions do |t|
      t.boolean :approved, :null => false
      t.index :approved

      t.integer :degree_id, :null => false
      t.integer :person_id, :null => false
      t.integer :supervisor_id

      t.index :degree_id
      t.index :person_id
      t.index :supervisor_id

      t.timestamps null: false
    end
  end
end
