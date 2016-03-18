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

ActiveRecord::Schema.define(version: 20160317090940) do

  create_table "admins", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean  "approved",   null: false
    t.integer  "user_id",    null: false
  end

  add_index "admins", ["approved"], name: "index_admins_on_approved"

  create_table "audit_trails", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "degrees", force: :cascade do |t|
    t.integer  "year",           null: false
    t.string   "degree_type",    null: false
    t.boolean  "approved",       null: false
    t.integer  "institution_id", null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "degrees", ["approved"], name: "index_degrees_on_approved"

  create_table "institutions", force: :cascade do |t|
    t.string   "name",       null: false
    t.boolean  "approved",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "institutions", ["approved"], name: "index_institutions_on_approved"

  create_table "mentorships", force: :cascade do |t|
    t.integer  "person_id",      null: false
    t.integer  "mentor_id",      null: false
    t.integer  "institution_id", null: false
    t.integer  "start"
    t.integer  "end"
    t.boolean  "approved",       null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "mentorships", ["approved"], name: "index_mentorships_on_approved"
  add_index "mentorships", ["mentor_id"], name: "index_mentorships_on_mentor_id"
  add_index "mentorships", ["person_id"], name: "index_mentorships_on_person_id"

  create_table "people", force: :cascade do |t|
    t.string   "name",           null: false
    t.string   "position"
    t.boolean  "approved",       null: false
    t.integer  "institution_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "people", ["approved"], name: "index_people_on_approved"
  add_index "people", ["name"], name: "index_people_on_name"

  create_table "supervisions", force: :cascade do |t|
    t.boolean  "approved",      null: false
    t.integer  "degree_id",     null: false
    t.integer  "person_id",     null: false
    t.integer  "supervisor_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "supervisions", ["approved"], name: "index_supervisions_on_approved"
  add_index "supervisions", ["degree_id"], name: "index_supervisions_on_degree_id"
  add_index "supervisions", ["person_id"], name: "index_supervisions_on_person_id"
  add_index "supervisions", ["supervisor_id"], name: "index_supervisions_on_supervisor_id"

  create_table "users", force: :cascade do |t|
    t.string   "password",        null: false
    t.string   "password_digest", null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "email",           null: false
    t.string   "first_name",      null: false
    t.string   "last_name",       null: false
    t.boolean  "approved",        null: false
  end

  add_index "users", ["approved"], name: "index_users_on_approved"

  create_table "versions", force: :cascade do |t|
    t.string   "item_type",                         null: false
    t.integer  "item_id",                           null: false
    t.string   "event",                             null: false
    t.string   "whodunnit"
    t.text     "object",         limit: 1073741823
    t.datetime "created_at"
    t.text     "object_changes", limit: 1073741823
  end

  add_index "versions", ["item_type", "item_id"], name: "index_versions_on_item_type_and_item_id"

end
