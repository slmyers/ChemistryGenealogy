class CreateApiSupervisors < ActiveRecord::Migration
  def change
    create_table :supervisors do |t|
      t.string :name
      t.boolean :approved

      t.index :approved

      t.timestamps null: false
    end
  end
end
