class AddDegreeToSupervisor < ActiveRecord::Migration
  def change
    add_reference :supervisors, :degree, index: true, foreign_key: true
  end
end
