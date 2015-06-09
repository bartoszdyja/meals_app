class RemoveGithubFromUser < ActiveRecord::Migration
  def change
    remove_column :users, :github, :string
  end
end
