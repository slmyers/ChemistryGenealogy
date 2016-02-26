class CreateApiDegrees < ActiveRecord::Migration
  def change
    create_table :degrees do |t|
      t.integer :year
      t.boolean :approved

      t.index :approved

      t.timestamps null: false
    end
  end
end
