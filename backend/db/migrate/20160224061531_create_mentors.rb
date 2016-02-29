class CreateMentors < ActiveRecord::Migration
  def change
    create_table :mentors do |t|
      # foreign keys to person and postdoc table
      t.integer :person_id, :null => false
      t.integer :postdoc_id, :null => false

      # !nil if mentor is in people table
      t.integer :mentor_id

      t.boolean :approved, :null => false
      t.index :approved

      # too many indices?
      t.index :person_id
      t.index :postdoc_id
      t.index :mentor_id

      t.timestamps null: false
    end
  end
end
