class CreateInstitutions < ActiveRecord::Migration
  def change
    create_table :institutions do |t|
      t.string :name, :null => false, :unique => true

      t.boolean :approved, :null => false
      t.index :approved

      t.timestamps null: false
    end
  end
end
