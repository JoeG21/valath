class CreateUserOpps < ActiveRecord::Migration[6.0]
  def change
    create_table :user_opps do |t|
      t.integer :user_id
      t.integer :opp_id

      t.timestamps
    end
  end
end
