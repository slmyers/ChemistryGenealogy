class CreateApiPostdocs < ActiveRecord::Migration
  def change
    create_table :postdoc do |t|
      t.date :start
      t.date :end
      t.boolean :approved

      t.index :approved

      t.timestamps null: false
    end
  end
end
