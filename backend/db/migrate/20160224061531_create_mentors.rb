class CreateMentors < ActiveRecord::Migration
  def change
    create_table :mentors do |t|
      t.string :name

      # foreign keys to person and postdoc table
      t.integer :person
      t.integer :postdoc

      # !nil if mentor is in people table
      t.integer :mentor_key

      t.boolean :approved
      t.index :approved

      # too many indices?
      t.index :person
      t.index :postdoc
      t.index :mentor_key

      t.timestamps null: false
    end
  end
end
