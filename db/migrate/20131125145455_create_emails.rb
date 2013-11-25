class CreateEmails < ActiveRecord::Migration
  def change
    create_table :emails do |t|
      t.string :label
      t.string :email
      t.references :contact

      t.timestamps
    end
    add_index :emails, :contact_id
  end
end
