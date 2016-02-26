class AddPersonToSupervisor < ActiveRecord::Migration
  def change
    add_reference :supervisors, :person, index: true, foreign_key: true
  end
end
