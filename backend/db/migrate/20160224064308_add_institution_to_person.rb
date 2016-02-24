class AddInstitutionToPerson < ActiveRecord::Migration
  def change
    add_reference :people, :institution, index: true, foreign_key: true
  end
end
