# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Start Seeding DB..."
Book.create!(title: "Property of the Rebel Librarian", author: "Allison Varnes", publisher: "Penguin Random House", genre: "Fiction")
Book.create!(title: "Escape from Mr. Lemoncello's Library", author: "Chris Grabenstein", publisher: "Penguin Random House", genre: "Fiction")
Book.create!(title: "The First Rule of Punk", author: "Celia C. Pérez", publisher: "Penguin Random House", genre: "Fiction")
Book.create!(title: "The Miraculous Journey of Edward Tulane", author: "Kate DiCamillo", publisher: "	Candlewick Press", genre: "Fiction")
Book.create!(title: "Diary of an 8-Bit Warrior", author: "Cube Kid", publisher: "Andrews McMeel Publishing", genre: "Fiction")

puts "Done Seeding!"