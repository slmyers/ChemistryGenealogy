class AddInstitutionToPostdoc < ActiveRecord::Migration
  def change
    add_reference :postdocs, :institution, index: true, foreign_key: true
  end
end
