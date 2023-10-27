# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version: 3.0

* Database : postgresql

* no test suite

* Deployment instructions
    * running backend requires rails s command to run server on localhost:3000
    * running frontend requires npm start --prefix client command to run react app on localhost:4000

* Images 
    * Generic profile pic placeholder:
        https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png
    * Homepage- Cerritos library entrance
        https://lh5.googleusercontent.com/p/AF1QipNPlvI-xFrHSMfxUQRh2z7Zk0EwE_QRZBXXrW6k=w800-h600-k-no
    * User profile Avatars:
     * Girl: https://img.freepik.com/free-vector/hand-drawn-caricature-illustration_23-2149871987.jpg?size=338&ext=jpg&ga=GA1.1.386372595.1697932800&semt=ais
     * Boy: https://i.pinimg.com/originals/aa/97/48/aa9748f05c476ade5ffcb2cc15643372.png

* This app has 2 types of users in mind: a parent and a child.
    * All users can currently sign up and login to their accounts. 
    * When a parent account is created, it is currently with the intention of having 3 main actions: 
        * Creating accounts for their children.
        * Deleting accounts accounts for their children.
        * Reading the summaries that their children create about the books that they're reading.
    * When a child account is created, it is currently with the intention that:
        * The child will add books to their list.
        * Add, delete and update the summaries that they create.