class AddInstitutionToPostdoc < ActiveRecord::Migration
  def change
    add_reference :postdoc, :institution, index: true, foreign_key: true
  end
end
