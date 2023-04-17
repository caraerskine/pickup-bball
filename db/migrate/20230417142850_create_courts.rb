class CreateCourts < ActiveRecord::Migration[6.1]
  def change
    create_table :courts do |t|
      t.string :park
      t.string :neighborhood

      t.timestamps
    end
  end
end
