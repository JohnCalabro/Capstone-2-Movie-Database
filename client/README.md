Welcome to Media Search


This application is inspired by IMDB (Internet Movie Database), it allows multiple users to sign up and favorite their favorite media, ranging from movies, TV shows, video games ect. A user types into a search bar and can view rows of movie posters which are clickable. When clicked you are directed to a details page which includes the title, director, ratings, cast ect. A users' favorites are saved and displayed at the top of the page when a user is logged in.


This is my largest project so far and serves as a Capstone project. I own none of the media presented on this project, this app is purely for educational purposes and to showcase my skills. This is my very first full-stack application. On the front-end this is a React app, on the back-end I make use of Node.js and Express. From react I fetch data using axios to grab data from the OMDB API (an online API I did not create) and use that data in my JSX to present information, and images. To save users I made my own API, and to save favorites I populated my database with information from OMDB.


Frameworks and Dependencies:


-react
-express
-node.js
-postgreSQL
-pg
-express
-axios
-cors
-bcrypt
-supertest
-jsonwebtoken


Areas of Improvement:


Because this is my very first full-stack application there are some areas of improvement I want to note here. In this section I will discuss some of my stretch goals. This project is time sensitive and I fully intend to address these issues in future commits. First I want to protect routes on the front-end and the back-end so that unauthorized users (those who are not logged in or signed up) cannot access forbidden routes by typing into the url bar. This is a feature I fully intend to add.


I would also like to add more error handling for a better user experience. Also due to some confusion with React state and re-rendering pages when state changes, I ended up relying on window.location.reload() in order to refresh the page when favorites were added or deleted. I also rely on window.location.reload() once I user logs in, logs out, or registers, I would like to fix this and use setState instead so the app flows smoother. The last thing I would like to do is improve the styling on certain pages, and display messages when a user does an invalid action.


I am also convinced my postgres table set up could be a bit better, I believe that my performance could suffer if there were to be a large amount of users. 


In the future I will look over my code further and address any other issue I notice.


In conclusion I hope this is a decent user experience for anyone who might use this app, I had fun creating it and look forward to improving on it in the future.
