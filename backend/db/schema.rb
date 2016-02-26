# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160224070033) do

  create_table "admins", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean  "approved"
    t.integer  "user_id"
  end

  add_index "admins", ["approved"], name: "index_admins_on_approved"

  create_table "degrees", force: :cascade do |t|
    t.integer  "year"
    t.boolean  "approved"
    t.integer  "institution"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "degrees", ["approved"], name: "index_degrees_on_approved"

  create_table "institutions", force: :cascade do |t|
    t.string   "name"
    t.boolean  "approved"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "institutions", ["approved"], name: "index_institutions_on_approved"

  create_table "mentors", force: :cascade do |t|
    t.string   "name"
    t.integer  "person"
    t.integer  "postdoc"
    t.integer  "mentor_key"
    t.boolean  "approved"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "mentors", ["approved"], name: "index_mentors_on_approved"
  add_index "mentors", ["mentor_key"], name: "index_mentors_on_mentor_key"
  add_index "mentors", ["person"], name: "index_mentors_on_person"
  add_index "mentors", ["postdoc"], name: "index_mentors_on_postdoc"

  create_table "people", force: :cascade do |t|
    t.string   "name"
    t.string   "position"
    t.boolean  "approved"
    t.integer  "institution"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "people", ["approved"], name: "index_people_on_approved"
  add_index "people", ["name"], name: "index_people_on_name"

  create_table "postdocs", force: :cascade do |t|
    t.integer  "start"
    t.integer  "end"
    t.boolean  "approved"
    t.integer  "institution"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "postdocs", ["approved"], name: "index_postdocs_on_approved"

  create_table "supervisors", force: :cascade do |t|
    t.string   "name"
    t.boolean  "approved"
    t.integer  "degree"
    t.integer  "person"
    t.integer  "supervisor_key"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "supervisors", ["approved"], name: "index_supervisors_on_approved"
  add_index "supervisors", ["degree"], name: "index_supervisors_on_degree"
  add_index "supervisors", ["person"], name: "index_supervisors_on_person"
  add_index "supervisors", ["supervisor_key"], name: "index_supervisors_on_supervisor_key"

  create_table "users", force: :cascade do |t|
    t.string   "password"
    t.string   "password_digest"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "email"
    t.string   "first_name"
    t.string   "last_name"
    t.boolean  "approved"
  end

  add_index "users", ["approved"], name: "index_users_on_approved"

end
