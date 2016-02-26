class CreateMentors < ActiveRecord::Migration
  def change
    create_table :mentors do |t|
      t.string :name

      # foreign keys to person and postdoc table
      t.integer :person_id
      t.integer :postdoc_id

      # !nil if mentor is in people table
      t.integer :mentor_id

      t.boolean :approved
      t.index :approved

      # too many indices?
      t.index :person_id
      t.index :postdoc_id
      t.index :mentor_id

      t.timestamps null: false
    end
  end
end
