# README

# PROJECT TITLE: LITQUEST
# ABOUT
 This project is a book logging application for parents and their children. The purspose of the log is to help kids keep track of the books that they are reading. Parents can also see what their child is reading and use it as a way to have further discussions with their child or children. 

* Ruby version: 3.0

* Rails version: 7.0.8

* React version: 18.2.0

* Database: postgresql 14

* No test suite was used for the project.

# START UP INSTRUCTIONS AND COMMANDS
    * To install all necessary gems run command: `bundle install`
    * To run migrations use the command: `rails db:migrate`
    * To seed the database run the command: `rails db:seed`
    * To run backend run command:  `rails s or rails server`. The server will run port 3000 or localhost:3000
    * To run the frontend run command `npm start --prefix client`. command to run react app on localhost:4000

# IMAGES:
    * Generic profile pic placeholder:
       (https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png)
    * Homepage Background Images- 
       * Book pages: (https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)
       * Child Reading: (https://images.unsplash.com/photo-1599689868384-59cb2b01bb21?q=80&w=1646&auto=format&fit=fill&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==)
       * Color Pencils: (https://images.unsplash.com/photo-1501349800519-48093d60bde0?q=80&w=1680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==)
    * Statistics- (https://www.thenationalliteracyinstitute.com/literacy-statistics)
    * User profile Avatars:
       Girl: (https://img.freepik.com/free-vector/hand-drawn-caricature-illustration_23-2149871987.jpg?size=338&ext=jpg&ga=GA1.1.386372595.1697932800&semt=ais)

       Boy: (https://i.pinimg.com/originals/aa/97/48/aa9748f05c476ade5ffcb2cc15643372.png)
    * Favicon Generator: (https://favicon.io/favicon-generator/)

# SOCIAL MEDIA ICONS: (https://fontawesome.com/)
# PROJECT DEMO/WALKTHROUGH: (https://youtu.be/b4i5j_kFs70)

# USER FUNCTIONS 
* This app has 2 types of users in mind: a parent and a child.
    * All users can currently sign up and login to their accounts. 
    * When a parent account is created, it is currently with the intention of having 3 main actions: 
        * Creating accounts for their children.
        * Deleting accounts accounts for their children.
        * Reading the summaries that their children created about each of the books that they're reading. 
    * When a parent first signs up, they will be automatically logged in, and can go to the dashboard link. There they will be able to create accounts for the children. 
    * When a child account is created, it is currently with the intention that:
        * The child will add books to their list and add, delete and update the summaries that they create.
       * The child is meant to use the summary as a recap of whatever chapters or pages they covered while reading. This means that each book with a series of summaries as the child goes through the book.
       * When the child first logs in or signs up they will see a link titled my_books in the navigation bar. There they will be able to add their first summary from the books available in the collection (currently smample data) or they can add a book to the overall collection and a summary that will show up on their page. 