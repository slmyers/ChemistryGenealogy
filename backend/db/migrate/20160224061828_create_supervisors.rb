class CreateSupervisors < ActiveRecord::Migration
  def change
    create_table :supervisors do |t|
      # in case the supervisor is not in the people table
      t.string :supervisor_name

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
