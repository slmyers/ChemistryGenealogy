class CreateApiPostdocs < ActiveRecord::Migration
  def change
    create_table :postdocs do |t|
      t.integer :start
      t.integer :end
      t.boolean :approved

      t.index :approved

      t.timestamps null: false
    end
  end
end
