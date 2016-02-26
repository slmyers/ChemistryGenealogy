class CreatePostdocs < ActiveRecord::Migration
  def change
    create_table :postdocs do |t|
      t.integer :start, :null => false
      t.integer :end, :null => false

      t.boolean :approved, :null => false
      t.index :approved

      t.integer :institution_id, :null => false 

      t.timestamps null: false
    end
  end
end
