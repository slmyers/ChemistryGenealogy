class AddPostdocToMentor < ActiveRecord::Migration
  def change
    add_reference :mentors, :postdoc, index: true, foreign_key: true
  end
end
