class AddInstitutionToDegree < ActiveRecord::Migration
  def change
    add_reference :degrees, :institution, index: true, foreign_key: true
  end
end
