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

ActiveRecord::Schema.define(version: 20160224070335) do

  create_table "admins", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "users_id"
  end

  add_index "admins", ["users_id"], name: "index_admins_on_users_id"

  create_table "degree", force: :cascade do |t|
    t.date     "year"
    t.boolean  "approved"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.integer  "institution_id"
  end

  add_index "degree", ["approved"], name: "index_degree_on_approved"
  add_index "degree", ["institution_id"], name: "index_degree_on_institution_id"

  create_table "institution", force: :cascade do |t|
    t.string   "name"
    t.boolean  "approved"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "institution", ["approved"], name: "index_institution_on_approved"

  create_table "mentor", force: :cascade do |t|
    t.string   "name"
    t.boolean  "approved"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "people_id"
    t.integer  "postdoc_id"
  end

  add_index "mentor", ["approved"], name: "index_mentor_on_approved"
  add_index "mentor", ["people_id"], name: "index_mentor_on_people_id"
  add_index "mentor", ["postdoc_id"], name: "index_mentor_on_postdoc_id"

  create_table "people", force: :cascade do |t|
    t.string   "name"
    t.string   "position"
    t.boolean  "approved"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.integer  "institution_id"
  end

  add_index "people", ["approved"], name: "index_people_on_approved"
  add_index "people", ["institution_id"], name: "index_people_on_institution_id"
  add_index "people", ["name"], name: "index_people_on_name"

  create_table "postdoc", force: :cascade do |t|
    t.date     "start"
    t.date     "end"
    t.boolean  "approved"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.integer  "institution_id"
  end

  add_index "postdoc", ["approved"], name: "index_postdoc_on_approved"
  add_index "postdoc", ["institution_id"], name: "index_postdoc_on_institution_id"

  create_table "supervisor", force: :cascade do |t|
    t.string   "name"
    t.boolean  "approved"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "degree_id"
    t.integer  "person_id"
  end

  add_index "supervisor", ["approved"], name: "index_supervisor_on_approved"
  add_index "supervisor", ["degree_id"], name: "index_supervisor_on_degree_id"
  add_index "supervisor", ["person_id"], name: "index_supervisor_on_person_id"

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
