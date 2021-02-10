class CreateOpps < ActiveRecord::Migration[6.0]
  def change
    create_table :opps do |t|
      t.string :title
      t.string :des
      t.datetime :date
      t.integer :howlong
      t.integer :shelter_id

      t.timestamps
    end
  end
end
