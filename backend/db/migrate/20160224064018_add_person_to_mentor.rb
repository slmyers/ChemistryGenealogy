class AddPersonToMentor < ActiveRecord::Migration
  def change
    add_reference :mentor, :people, index: true, foreign_key: true
  end
end
