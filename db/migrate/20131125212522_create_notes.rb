class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.text :note
      t.references :contact

      t.timestamps
    end
    add_index :notes, :contact_id
  end
end
