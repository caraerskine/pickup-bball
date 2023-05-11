# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "seeding courts 🏀..."

Court.create(park: 'Brower', neighborhood: 'Bed-Stuy', street: 'Prospect Place', notes: 'back by the garden, NW end')
Court.create(park: 'St. Andrews', neighborhood: 'Bed-Stuy', street: 'Atlantic Ave', notes: 'near the swings')
Court.create(park: 'St. Johns', neighborhood: 'Bed-Stuy', street: 'St. Johns Place', notes: 'indoors 3rd floor')
Court.create(park: 'Rucker', neighborhood: 'Harlem', street: '155th St', notes: 'you will see it')
Court.create(park: 'Cooper', neighborhood: 'Bushwick', street: 'Maspeth Ave', notes: 'by the tennis courts')
Court.create(park: '24 Sycamores', neighborhood: 'Manhattan', street: 'E 60th St', notes: 'up front by the gate, cannot miss it')
Court.create(park: 'Triboro', neighborhood: 'Astoria', street: '23rd St and Hoyt Ave N', notes: 'under the overpass')

puts "done seeding 🏀!"