DROP DATABASE IF EXISTS movieFinal;
CREATE DATABASE movieFinal;

\c

CREATE TABLE genres {
id SERIAL PRIMARY KEY,
name VARCHAR NOT NULL
};

CREATE TABLE movies {
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  genre_id INT NOT NULL REFERENCES genres(id),
  img_url VARCHAR
};

CREATE TABLE ratings {
  id SERIAL PRIMARY KEY,
  stars INT NOT NULL CHECK (stars between 1 and 5),
  movie_id INT NOT NULL REFERENCES movies(id)
};

CREATE TABLE comments {
  id SERIAL PRIMARY KEY,
  body TEXT,
  movie_id INT NOT NULL REFERENCES movies(id)
};

INSERT INTO genres(name) VALUES
('drama'),
('comedy'),
('romantic comedy'),
('thriller'),
('adventure'),
('horror'),
('sci-fi'),
('musical');

INSERT INTO movies(title, genre_id, img_url) VALUES
('Pilot', 1, 'https://mymodernmet.com/wp/wp-content/uploads/2018/06/your-post-as-movie-reddit-21.jpg'),
('Solace', 7, 'https://i.kinja-img.com/gawker-media/image/upload/s--j5eDxFeY--/c_scale,f_auto,fl_progressive,q_80,w_800/hys4ihs8u4bt4xdxgxzo.png'),
('Red Shift', 6, 'https://i.kinja-img.com/gawker-media/image/upload/s--34Ov9OI7--/c_scale,f_auto,fl_progressive,q_80,w_800/borkhs3mb5yz5rimsf0e.png'),
('System Failure', 4, 'https://i.kinja-img.com/gawker-media/image/upload/s--6bSYeVw_--/c_scale,f_auto,fl_progressive,q_80,w_800/kwkrvlk9a1oyy2qz8cbd.png'),
('Ark', 5, 'https://i.kinja-img.com/gawker-media/image/upload/s--jeHtxqIz--/c_scale,f_auto,fl_progressive,q_80,w_800/zdvylwnt7ldrhs3iqwim.png'),
('Under The Sun', 4, 'https://mymodernmet.com/wp/wp-content/uploads/2018/06/your-post-as-movie-reddit-18.jpg'),
('Battle For Sol', 7, 'https://mymodernmet.com/wp/wp-content/uploads/2018/06/your-post-as-movie-reddit-3-2.jpg'),
('Quality', 1, 'https://mymodernmet.com/wp/wp-content/uploads/2018/06/your-post-as-movie-reddit-17.jpg'),
('Popeye', 7, 'https://cdn.mos.cms.futurecdn.net/LR56BYzW5jyYLJxL3WjRqi-650-80.jpg'),
('England', 1, 'https://mymodernmet.com/wp/wp-content/uploads/2018/06/your-post-as-movie-reddit-13.jpg'),
('This Cabin of Mine', 6, 'https://mymodernmet.com/wp/wp-content/uploads/2018/06/your-post-as-movie-reddit-10.jpg'),
('Runners', 4, 'https://mymodernmet.com/wp/wp-content/uploads/2018/06/your-post-as-movie-reddit-11.jpg'),
('Year Zero', 5, 'https://mymodernmet.com/wp/wp-content/uploads/2018/06/your-post-as-movie-reddit-6-2.jpg');

INSERT INTO ratings(movie_id, stars) VALUES
(1, 4),
(1, 5),
(2, 4),
(2, 4),
(3, 3),
(3, 2),
(4, 3),
(4, 3),
(4, 2),
(5, 4),
(5, 5),
(5, 4),
(6, 4),
(6, 5),
(6, 3),
(7, 4),
(7, 4),
(7, 4),
(8, 4),
(8, 5),
(8, 4),
(9, 5),
(9, 5),
(9, 5),
(10, 5),
(10, 4),
(10, 5),
(11, 4),
(11, 4),
(11, 3),
(12, 4),
(12, 5),
(12, 5),
(13, 5),
(13, 5),
(13, 5);

INSERT INTO comments(movie_id, body) VALUES
(1, 'Simply amazing'),
(1, 'Did not expect it to be that good'),
(2, 'I lost track of time - it was that good'),
(2, 'They went a little overboard with the special effects, but a solid movie overall'),
(3, 'Pretty predictable'),
(3, 'Started out great, but the second half was quite dull'),
(4, 'It was like all thrillers mushed into one'),
(4, 'They lost me 20 minutes into the movie'),
(4, 'Good cast, bad script'),
(5, 'Very inspiring'),
(5, 'So good - just like the old days'),
(5, 'I will definitely watch that again'),
(6, 'Great script'),
(6, 'I loved all the unexpected turns of events'),
(6, 'I enjoyed it'),
(7, 'My wife was to scared to watch so we had to leave'),
(7, 'So dramatic'),
(7, 'The special effects are next level'),
(8, 'My gf and I had the best time'),
(8, 'Decent movie - solid plot and great cast'),
(8, 'A little too long but a good movie nonetheless'),
(9, 'My new favorite movie'),
(9, 'Great'),
(9, 'Must see'),
(10, 'Five stars'),
(10, 'So romantic'),
(10, 'Wonderful cast'),
(11, 'the ending did not really impress me'),
(11, 'so scary'),
(11, 'great horror movie'),
(12, 'loved it'),
(12, 'impressive'),
(12, 'cool'),
(13, 'nice'),
(13, 'Must see'),
(13, 'Simply fenomenal');
