# Welcome to LitQuest

### About
 This project is a book logging application for kids of reading/writing age. The purpose of this application is to create discussion between parents and their kids about books chosen by the kids. Keeping a log helps kids keep track of the books that they are reading as well as promote comprehension, memory recall and enforcement of the language arts skills learned at school. It gives parents the ability to see what their child is reading and use it as a way to have further discussions with their child or children. It's a gateway for parents who want to be more involved in their kids education to connect and gauge how their child learns when they read what they like to read. 

 I created this application because this was my way to engage my kids in discussion beyond the daily conversation of "How was your day?" I typically encourage my kids to read and engage them with questions to see why they pick the stories they read and what they like about them. I also like to see if they are really reading the books. Studying software development became very time consuming and I couldn't always dedicate the usual time to discussion because I had deadlines to meet. So I created LitQuest as a way for them to still tell me what they read and then I can read it at my convenience and discuss with them for a shorter time span.  It's meant to foster a love of reading and learning in general.

**This project is a work in progress, as we all are...**

*Interested in learning more?...*

### PROJECT DEMO/WALKTHROUGH: 
[demo-walkthrough](https://youtu.be/b4i5j_kFs70)

#### This Project is currently deployed on Render: 
[LitQuest](https://litquest-v2-0.onrender.com/) 
*Since this project is running on a service that spins down servers from inactivity, please allow time for the site to be displayed. It can take upto a minute for the site to be displayed and interactive.*

#### Basic Specs:
* Ruby version: 3.0

* Rails version: 7.0.8

* React version: 18.2.0

* Database: postgresql 14

* No test suite was used for the project. 

### START UP INSTRUCTIONS AND COMMANDS:
    1. To install all necessary gems run command: `bundle install`
    2. To run migrations use the command: `rails db:migrate`
    3. To seed the database run the command: `rails db:seed`
    4. To run backend run command:  `rails s or rails server`. The server will run port 3000 or localhost:3000
    5. To run the frontend run command `npm start --prefix client`. command to run react app on localhost:4000

---

#### IMAGES:
[Generic profile pic placeholder](https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png)
- Homepage Background Images: 
[Book pages](https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)
[Child Reading Image](https://images.unsplash.com/photo-1599689868384-59cb2b01bb21?q=80&w=1646&auto=format&fit=fill&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==)
[Color Pencils](https://images.unsplash.com/photo-1501349800519-48093d60bde0?q=80&w=1680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==)
[Statistics](https://www.thenationalliteracyinstitute.com/literacy-statistics)
- User profile Avatars:
[Girl](https://img.freepik.com/free-vector/hand-drawn-caricature-illustration_23-2149871987.jpg?size=338&ext=jpg&ga=GA1.1.386372595.1697932800&semt=ais)
[Boy](https://i.pinimg.com/originals/aa/97/48/aa9748f05c476ade5ffcb2cc15643372.png)
[Favicon Generator](https://favicon.io/favicon-generator/)

#### SOCIAL MEDIA ICONS: (https://fontawesome.com/)

---

#### USER FUNCTIONS: 
**This app has 2 types of users in mind: a parent and a child.**
- All users can currently sign up and login to their accounts. 
- When a parent account is created, it is currently with the intention of having 3 main actions: 
    - Creating accounts for their children.
     - Deleting accounts accounts for their children.
    - Reading the summaries that their children created about each of the books that they're reading. 
    - When a parent first signs up, they will be automatically logged in, and can go to the *Dashboard* link. There they will be able to create accounts for the children. 
- When a child account is created, it is currently with the intention that:
    - The child will add books to their list and add, delete and update the summaries that they create.
    - The child is meant to use the summary as a recap of whatever chapters or pages they covered while reading. This means that each book with a series of summaries as the child goes through the book.
    - When the child first logs in or signs up they will see a link titled *My Books* in the navigation bar. There they will be able to add their first summary from the books available in the collection *(currently smample data)* or they can add a book to the overall collection and a summary that will show up on their page. 

*If you've made it this far, thank you for your interest. If you'd like to learn more about me you can visit* [my portfolio site](https://www.ambarindev.com/)