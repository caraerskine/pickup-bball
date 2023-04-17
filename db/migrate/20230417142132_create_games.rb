class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :time
      t.boolean :bring_ball

      t.timestamps
    end
  end
end
