class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :time
      t.boolean :bring_ball
      t.string :skill_level
      t.string :contact_info
      t.integer :user_id
      t.integer :court_id

      t.timestamps
    end
  end
end

#a game belongs to a user therefore user_id is here
#a game belongs to a court therefore court_id is here
#join or through table

#contact_info might need to be a string or an integer (?)
#use <tel> input in form and see what happens 
#see W3 docs tab u have open re: tel and (or an email?)
#if so, should these be separate fields?