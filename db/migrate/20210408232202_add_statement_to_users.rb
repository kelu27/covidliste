class AddStatementToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :statement, :boolean, default: false
  end
end
