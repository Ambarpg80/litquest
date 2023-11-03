# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Start Seeding DB..."
Book.create(title: "Property of the Rebel Librarian", 
            author: "Allison Varnes", 
            publisher: "Penguin Random House", 
            genre: "Fiction", 
            thumbnail_url: "https://images4.penguinrandomhouse.com/cover/9781524771508",
            preview: "When twelve-year-old June Harper's parents discover what they deem an inappropriate library book, they take strict parenting to a whole new level. And everything June loves about Dogwood Middle School unravels: librarian Ms. Bradshaw is suspended, an author appearance is canceled, the library is gutted, and all books on the premises must have administrative approval. 
            But June can't give up books . . .")
Book.create(title: "Escape from Mr. Lemoncello's Library", 
            author: "Chris Grabenstein", 
            publisher: "Penguin Random House", 
            genre: "Fiction",
            thumbnail_url: "https://images2.penguinrandomhouse.com/cover/9780307931474",
            preview: "Kyle Keeley is the class clown, popular with most kids, (if not the teachers), and an ardent fan of all games: board games, word games, and particularly video games. His hero, Luigi Lemoncello, the most notorious and creative gamemaker in the world, just so happens to be the genius behind the building of the new town library. Lucky Kyle wins a coveted spot to be one of the first 12 kids in the library for an overnight of fun, food, and lots and lots of games. But when morning comes, the doors remain locked. Kyle and the other winners must solve every clue and every secret puzzle to find the hidden escape route. And the stakes are very high.")
Book.create(title: "The First Rule of Punk", 
            author: "Celia C. Pérez", 
            publisher: "Penguin Random House", 
            genre: "Fiction",
            thumbnail_url: "https://images.penguinrandomhouse.com/cover/9780425290422",
            preview: "There are no shortcuts to surviving your first day at a new school--you can't fix it with duct tape like you would your Chuck Taylors. On Day One, twelve-year-old Malú (Maria Luisa, if you want to annoy her) inadvertently upsets Posada Middle School's queen bee, violates the school's dress code with her punk rock look, and disappoints her college-professor mom in the process. Her dad, who now lives a thousand miles away, says things will get better as long as she remembers the first rule of punk: be yourself.")
Book.create(title: "The Miraculous Journey of Edward Tulane", 
            author: "Kate DiCamillo", 
            publisher: "Candlewick Press", 
            genre: "Fiction",
            thumbnail_url: "https://www.katedicamillo.com/wp-content/uploads/2021/07/bk_miraculous_260px.jpg",
            preview: "Once, in a house on Egypt Street, there lived a china rabbit named Edward Tulane. The rabbit was very pleased with himself, and for good he was owned by a girl named Abilene, who treated him with the utmost care and adored him completely. And then, one day, he was lost…")
Book.create(title: "Diary of an 8-Bit Warrior", 
            author: "Cube Kid", 
            publisher: "Andrews McMeel Publishing", 
            genre: "Fiction",
            thumbnail_url: "https://m.media-amazon.com/images/I/81LCpUQkgeL._SY466_.jpg",
            preview: "The first volume of this best-selling unofficial Minecraft adventure series begins with Runt, our 12-year-old hero, about to choose his future vocation at the Minecraftia school. His options are less than farmer, crafter, miner. But what this noob really wants is to be a warrior like his hero, Steve. So when he learns that the five best students in school that year will get the chance to start warrior training, it’s ON.")

jem = UserProfile.create!(email: "mamabear@example.com" , 
                    age: 40,
                    username: "mamabear", 
                    password: "12345", 
                    password_confirmation: "12345" , 
                    profileable: Parent.create(
                        name: "Jemma Alonzo",
                        image_url: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" ) )

lui = UserProfile.create!(email: "littlebear@example.com" ,
                   age: 10,
                   username: "littlebear", 
                   password: "12345", 
                   password_confirmation: "12345" , 
                   profileable: Child.create(
                        parent_id: jem.profileable.id,
                        name: "Luisa Alonzo", 
                        image_url: "https://img.freepik.com/free-vector/hand-drawn-caricature-illustration_23-2149871987.jpg?size=338&ext=jpg&ga=GA1.1.386372595.1697932800&semt=ais",
                        rewards: ""))

Review.create!(child_id: lui.profileable.id, 
              book_id: 1,
              summary: "June is a girl who likes to read a lot of books.", 
              rating: 4)

puts "Done Seeding!"