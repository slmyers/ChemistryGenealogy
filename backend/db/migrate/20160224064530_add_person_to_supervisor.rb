class AddPersonToSupervisor < ActiveRecord::Migration
  def change
    add_reference :supervisor, :person, index: true, foreign_key: true
  end
end
