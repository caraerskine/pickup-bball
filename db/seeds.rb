# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Court.destroy_all
Game.destroy_all

puts "seeding courts 🏀..."

Court.create(park: 'Brower', neighborhood: 'Bed-Stuy', street: 'Prospect Place', notes: 'back by the garden, NW end')
Court.create(park: 'St. Andrews', neighborhood: 'Bed-Stuy', street: 'Atlantic Ave', notes: 'near the swings')
Court.create(park: 'St. Johns', neighborhood: 'Bed-Stuy', street: 'St. Johns Place', notes: 'indoors 3rd floor')
Court.create(park: 'Rucker', neighborhood: 'Harlem', street: '155th St', notes: 'you will see it')
Court.create(park: 'Cooper', neighborhood: 'Bushwick', street: 'Maspeth Ave', notes: 'by the tennis courts')
Court.create(park: '24 Sycamores', neighborhood: 'Manhattan', street: 'E 60th St', notes: 'up front by the gate, cannot miss it')
Court.create(park: 'Triboro', neighborhood: 'Astoria', street: '23rd St and Hoyt Ave N', notes: 'under the overpass')

User.all.each do |user| 
    (1..3).each do |i| 
        court = Court.order('RANDOM()').first
        user.games.create!({
           time: Time.at(rand * Time.now.to_i).to_s,
           bring_ball: rand(2).zero?,
           skill_level: rand(1..10),
           contact_info: Faker::PhoneNumber.cell_phone,
           user_id: user.id,
           court_id: court.id
        })
    end
end


puts "done seeding 🏀!"


# User.all.each do |user| 
#     (1..3).each do |i| 
#         court = Court.order('RANDOM()').first
#         user.games.create!({
#            time: Time.at(rand * Time.now.to_i).to_s,
#            bring_ball: (rand(1..2)).modulo(2) == 0,
#            skill_level: rand(1..10),
#            contact_info: Faker::PhoneNumber.cell_phone,
#            user_id: user.id,
#            court_id: rand(1..7)
#         })
#     end
# end