class CreateApiPeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.string :name
      t.string :position
      t.boolean :approved

      t.index :approved
      t.index :name

      t.timestamps null: false
    end
  end
end
