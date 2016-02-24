class AddUsersToAdmins < ActiveRecord::Migration
  def change
    add_reference :admins, :users, index: true, foreign_key: true
  end
end
