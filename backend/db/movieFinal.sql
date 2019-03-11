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
