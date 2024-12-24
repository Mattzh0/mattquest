CREATE DATABASE mattquest;

-- go to the table: \c mattquest

CREATE TABLE games (
  game_id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(50) NOT NULL,
  release_date DATE NOT NULL,
  genre VARCHAR(25) NOT NULL,
  rating INT NOT NULL CHECK(rating >= 1 and rating <= 5),
  short_desc VARCHAR(150) NOT NULL,
  long_desc VARCHAR(1000) NOT NULL,
  img_src VARCHAR, NOT NULL
  review_ids INTEGER[],
  platforms TEXT[],
  featured BOOLEAN NOT NULL
);

-- view the table: \d games

INSERT INTO games (title, release_date, rating, short_desc, long_desc, featured) 
  VALUES
  -- Featured Games
  ('The Legend of Zelda: Tears of the Kingdom', '2023-05-12', 10, 
  'Epic adventure in Hyrule.', 
  'Embark on a massive open-world adventure in Hyrule with incredible mechanics, stunning visuals, and a captivating story.', 
  true),

  ('Baldur''s Gate 3', '2023-08-03', 10, 
  'A groundbreaking RPG masterpiece.', 
  'Step into the world of Dungeons & Dragons in this turn-based RPG. Baldur''s Gate 3 offers rich storytelling, deep character interactions, and strategic combat for fans of the genre.', 
  true),

  ('Call of Duty: Modern Warfare II', '2022-10-28', 9, 
  'Intense FPS action.', 
  'Experience cutting-edge combat with a gripping campaign and an immersive multiplayer mode. Modern Warfare II pushes boundaries with stunning visuals and adrenaline-pumping gameplay.', 
  true),

  ('Fortnite', '2017-07-21', 8, 
  'Battle royale phenomenon.', 
  'Join millions of players in this free-to-play battle royale game. Build, fight, and survive in a colorful world with regular updates and engaging collaborations.', 
  true),

  ('Elden Ring', '2022-02-25', 10, 
  'A dark fantasy epic.', 
  'Explore a vast, interconnected world crafted by FromSoftware and George R.R. Martin. Elden Ring combines deep lore, challenging combat, and breathtaking exploration for RPG enthusiasts.', 
  true),

  -- Non-Featured Games
  ('Cyberpunk 2077', '2020-12-10', 8, 
  'Futuristic open-world RPG.', 
  'Immerse yourself in the sprawling open world of Night City, where choices shape your story. Cyberpunk 2077 offers deep storytelling, dynamic gameplay, and a visually stunning experience.', 
  false),

  ('The Sims 4', '2014-09-02', 7, 
  'Life simulation game.', 
  'Create and control people in a virtual world where you can design homes, shape relationships, and guide your Sims through their lives.', 
  false),

  ('Stardew Valley', '2016-02-26', 9, 
  'Charming farming simulator.', 
  'Build and manage your farm, forge relationships, and explore the countryside in this beloved indie farming simulation game.', 
  false),

  ('Assassin''s Creed Valhalla', '2020-11-10', 8, 
  'Viking-themed open-world adventure.', 
  'Lead your Viking clan on epic raids, build your settlement, and shape your destiny in England during the Viking Age.', 
  false),

  ('Hollow Knight', '2017-02-24', 9, 
  'A stunning Metroidvania adventure.', 
  'Explore a vast, interconnected world filled with challenging enemies, secrets, and a hauntingly beautiful atmosphere.', 
  false);