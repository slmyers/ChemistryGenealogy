class CreateMentorships < ActiveRecord::Migration
  def change
    create_table :mentorships do |t|
      # foreign keys to person table
      t.integer :person_id, :null => false
      t.integer :mentor_id, :null => false
      t.integer :institution_id, :null => false


      t.integer :start
      t.integer :end

      t.boolean :approved, :null => false
      t.index :approved

      # too many indices?
      t.index :person_id
      t.index :mentor_id

      t.timestamps null: false
    end
  end
end
