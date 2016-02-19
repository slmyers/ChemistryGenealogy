class CreateInformation < ActiveRecord::Migration
  def change
    create_table :information do |t|
    	# the class information and class user is related by user's email
    	t.string :email

    	# this information class contains information about
    	# the user's educational credential
    	t.string :name
    	t.date :year
    	t.string :institution
    	t.string :title
    	t.string :degree
    	t.string :mentors
    	t.string :post_doc_appointer

    end
  end
end
