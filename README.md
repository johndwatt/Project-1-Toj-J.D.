# Thematic LMS
A full stack Learning Management Systen (LMS) application for project 1 at General Assembly.

By John D. Watt and Amitoj Singh


=== App Link ===

You can access the application here: https://thematiclms.herokuapp.com/


=== About this Application ===

Thematic LMS is a learning management system that reverse-engineers three features of the popular Canvas LMS:
- User Authentication
- Assignment Creation
- File Submission

Thematic LMS improves upon Canvas by adding themes that change the color of the site background as well as various UI features.  This full-stack, NEM application uses a mobile-first, responsive design with a simple, modern layout. The appliction demonstrates full CRUD functionality, use of RESTful routes, EJS partials/templating, multple database models with working relationships, and both front-end and back-end data validation. 


=== Technologies Used ===
- Javascript
- jQuery
- CSS
- HTML
- EJS
- Node
- Express
- Mongoose
- Mongo/MongoDB
- Heroku
- Git/GitHub
- Fomantic-UI CSS Framework: a Semantic-UI community fork


=== Screenshots of Site ===

Below, the screenshots of the site also show off the variety of themes available to users: 

- Login and Sign-up Pages
![mvp-page](./readme-images/lms-login.png)
![mvp-page](./readme-images/lms-signup.png)

- Assignments Index Page
![mvp-page](./readme-images/lms-index.png)

- Assignment Show Page
![mvp-page](./readme-images/lms-show.png)

- Submission Show Page
![mvp-page](./readme-images/lms-subshow.png)

- Create/Update Assignment Page
![mvp-page](./readme-images/lms-create.png)
![mvp-page](./readme-images/lms-update.png)

- Create Submission Page
![mvp-page](./readme-images/lms-subcreation.png)

- Sidebar
![mvp-page](./readme-images/lms-sidebar.png)


=== User Stories ===

Creating an Account: User will navigate to app register page. User will see 5 inputs: name, email, password, profile picture (optional), and instructor/studen. User will input their name, email and password as text. User will link a url with their profile picture, or they will be assigned a default if left blank. User will select whether they are an instructor or a student. User will then push the button that says sign up and will be redirected to the login page.

Logging In: User will be see a login box with 2 inputs: email, password. User will input their email and password as text. User will then push the button that says login and will be redirected to assignments page.

Accessing All Assignments: Upon logging in, user will be placed on assignments index page. Here, they will see all their assignments stacked on top of each other. Clicking menu at the top will show a navbar on the right with buttons redirecting to various pages. Clicking on specific assignment will take the user to the assignment show page.

Accessing specific assignments with list of submissions: Clicking on specific assignment will take the user to the assignment show page which will have submissions listened underneath the assignment. The assignment will list the name, content, and due date for the assignment.Submissions will list the students name, their submission date, and a link to the file they submitted. Options for updating and deleting the assignment will be below the assignment, as well as creating a submission. 

Creating/updating an assignment/submission: Either the create or update assignment/submission button will take the user to a page with inputs for altering the content of the assignment/submission. If updating, the user will see the saved info from the original assignment already filling the inputs. When complete, the user will select the green/blue button that says create/update assignment/submission. They will be redirected to the show page for thier creation. 


=== Wireframes ===

- Login and Sign-up Pages
![mvp-wireframe](https://trello.com/1/cards/61044cfc7f3ad82b9b0ff57a/attachments/61044d086023706fce1bf4d7/download/Screen_Shot_2021-07-30_at_10.19.29_AM.png)
![mvp-wireframe](https://trello.com/1/cards/61044cfc7f3ad82b9b0ff57a/attachments/61044d0a94a00d40faba9e53/download/Screen_Shot_2021-07-30_at_10.26.49_AM.png)

- Assignments Index Page
![mvp-wireframe](https://trello.com/1/cards/61044cfc7f3ad82b9b0ff57a/attachments/61044d0e3fd75968dc3d8543/download/Screen_Shot_2021-07-30_at_11.32.55_AM.png)

- Assignment Show Page
![mvp-wireframe](https://trello.com/1/cards/61044cfc7f3ad82b9b0ff57a/attachments/61044d0d1c73447b6385ba30/download/Screen_Shot_2021-07-30_at_12.01.39_PM.png)

- Submission Show Page
![mvp-wireframe](https://trello.com/1/cards/61044cfc7f3ad82b9b0ff57a/attachments/61046bbbcc1ca20e15581d6f/download/Screen_Shot_2021-07-30_at_2.11.33_PM.png)

- Create/Update Assignment Page
![mvp-wireframe](https://trello.com/1/cards/61044cfc7f3ad82b9b0ff57a/attachments/61044d11f1c2136392b87ad4/download/Screen_Shot_2021-07-30_at_11.50.11_AM.png)
![mvp-wireframe](https://trello.com/1/cards/61044cfc7f3ad82b9b0ff57a/attachments/61044d148f36e80acbd1b5e4/download/Screen_Shot_2021-07-30_at_11.51.57_AM.png)

- Create/Update Submission Page
![mvp-wireframe](https://trello.com/1/cards/61044cfc7f3ad82b9b0ff57a/attachments/61044d13676f2b0ed5701524/download/Screen_Shot_2021-07-30_at_11.58.26_AM.png)
![mvp-wireframe](https://trello.com/1/cards/61044cfc7f3ad82b9b0ff57a/attachments/61044d155ac6cb26936bbf8e/download/Screen_Shot_2021-07-30_at_11.54.58_AM.png)

- 404 Page
![mvp-wireframe](https://trello.com/1/cards/61044cfc7f3ad82b9b0ff57a/attachments/61044f67742506272c4c74ca/download/Screen_Shot_2021-07-30_at_12.12.10_PM.png)