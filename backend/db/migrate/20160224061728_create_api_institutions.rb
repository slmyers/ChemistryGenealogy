class CreateApiInstitutions < ActiveRecord::Migration
  def change
    create_table :institution do |t|
      t.string :name
      t.boolean :approved

      t.index :approved

      t.timestamps null: false
    end
  end
end
