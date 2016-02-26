class CreateSupervisors < ActiveRecord::Migration
  def change
    create_table :supervisors do |t|
      t.string :name

      t.boolean :approved
      t.index :approved

      t.integer :degree_id
      t.integer :person_id
      t.integer :supervisor_id

      t.index :degree_id
      t.index :person_id
      t.index :supervisor_id

      t.timestamps null: false
    end
  end
end
