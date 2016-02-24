class AddInstitutionToDegree < ActiveRecord::Migration
  def change
    add_reference :degree, :institution, index: true, foreign_key: true
  end
end
