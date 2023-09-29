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
            thumbnail_url: "https://images4.penguinrandomhouse.com/cover/9781524771508")
Book.create(title: "Escape from Mr. Lemoncello's Library", 
            author: "Chris Grabenstein", 
            publisher: "Penguin Random House", 
            genre: "Fiction",
            thumbnail_url: "https://images2.penguinrandomhouse.com/cover/9780307931474")
Book.create(title: "The First Rule of Punk", 
            author: "Celia C. Pérez", 
            publisher: "Penguin Random House", 
            genre: "Fiction",
            thumbnail_url: "https://images.penguinrandomhouse.com/cover/9780425290422")
Book.create(title: "The Miraculous Journey of Edward Tulane", 
            author: "Kate DiCamillo", 
            publisher: "Candlewick Press", 
            genre: "Fiction",
            thumbnail_url: "https://www.katedicamillo.com/wp-content/uploads/2021/07/bk_miraculous_260px.jpg")
Book.create(title: "Diary of an 8-Bit Warrior", 
            author: "Cube Kid", 
            publisher: "Andrews McMeel Publishing", 
            genre: "Fiction",
            thumbnail_url: "https://m.media-amazon.com/images/I/81LCpUQkgeL._SY466_.jpg")
puts "Done Seeding!"