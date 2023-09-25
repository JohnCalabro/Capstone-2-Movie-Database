CREATE TABLE users
(
    user_id SERIAL PRIMARY KEY,
    username text NOT NULL UNIQUE,
    password text NOT NULL
);




INSERT INTO users
    (username, password)
    VALUES('testUser', 'pw123');



CREATE TABLE favorites
(
    fav_id SERIAL PRIMARY KEY,
    user_name text REFERENCES users(username) ON DELETE CASCADE,
    movie_title text NOT NULL UNIQUE,
    movie_poster text NOT NULL UNIQUE,
    movie_id text NOT NULL UNIQUE
);

INSERT INTO favorites
    (user_name, movie_title, movie_poster, movie_id)
    VALUES ('barrymckiner', 'Good Will Hunting', 
    'https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    'tt0119217'
    );

INSERT INTO favorites
    (user_name, movie_title, movie_poster, movie_id)
    VALUES ('barrymckiner', 'Heat',
    'https://m.media-amazon.com/images/M/MV5BYjZjNTJlZGUtZTE1Ny00ZDc4LTgwYjUtMzk0NDgwYzZjYTk1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    'tt0113277'
    );

INSERT INTO favorites
    (user_name, movie_title, movie_poster, movie_id)
    VALUES ('gabeingleisas', 'Shrek',
    'https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    'tt0126029'
    );


    

    INSERT INTO users
    (username, password)
    VALUES('testUser2', 'pw456');


    INSERT INTO favorites
    (user_id, movie_title)
    VALUES (2, 'Wedding Crashers');




    ALTER TABLE favorites DROP UNIQUE (movie_title. movie_poster, movie_id);


     ALTER TABLE favorites DROP UNIQUE (movie_title);





CREATE TABLE favorites
(
    fav_id SERIAL PRIMARY KEY,
    user_name text REFERENCES users(username) ON DELETE CASCADE,
    movie_title text NOT NULL,
    movie_poster text NOT NULL,
    movie_id text NOT NULL
);