class CreateAuditTrails < ActiveRecord::Migration
  def change
    create_table :audit_trails do |t|

      t.timestamps null: false
    end
  end
end
