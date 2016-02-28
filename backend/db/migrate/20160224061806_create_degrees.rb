class CreateDegrees < ActiveRecord::Migration
  def change
    create_table :degrees do |t|
      t.integer :year, :null => false
      t.string :degree_type, :null => false
      t.boolean :approved, :null => false
      t.index :approved

      t.integer :institution_id, :null => false

      t.timestamps null: false
    end
  end
end
