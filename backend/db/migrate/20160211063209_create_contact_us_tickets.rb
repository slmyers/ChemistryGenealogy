class CreateContactUsTickets < ActiveRecord::Migration
  def change
    create_table :contact_us_tickets do |t|

      # Creates columns in the table for email, title, and description
      t.string :email
      t.text :title
      t.text :desc

      t.timestamps null: false
    end
  end
end
