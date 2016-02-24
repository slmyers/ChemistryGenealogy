class AddDegreeToSupervisor < ActiveRecord::Migration
  def change
    add_reference :supervisor, :degree, index: true, foreign_key: true
  end
end
