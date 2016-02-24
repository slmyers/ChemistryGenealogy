class CreateApiDegrees < ActiveRecord::Migration
  def change
    create_table :degree do |t|
      t.date :year
      t.boolean :approved

      t.index :approved

      t.timestamps null: false
    end
  end
end
