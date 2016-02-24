class AddPostdocToMentor < ActiveRecord::Migration
  def change
    add_reference :mentor, :postdoc, index: true, foreign_key: true
  end
end
