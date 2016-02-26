class AddPersonToMentor < ActiveRecord::Migration
  def change
    add_reference :mentors, :people, index: true, foreign_key: true
  end
end
