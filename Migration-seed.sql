DROP TABLE IF EXISTS USERS;
DROP TABLE IF EXISTS REVIEW;

CREATE TABLE USERS (
    id serial Primary Key,
    Name varchar(50)
)

CREATE TABLE REVIEW (
    id serial Primary Key,
    user_id Int,
    comment text,
    cleanliness TINYINT,
    checkin TINYINT,
    location TINYINT,
    communication TINYINT,
    accuracy TINYINT,

    FOREIGN KEY(user_id) REFERENCES USERS(id) ON DELETE CASCADE,
)

INSERT INTO USERS (name) VALUES 
('Jordan'), ('Brandon'), ('Gabe'), ('Jacquon'),
('Brian'), ('Bain'), ('Aaron'), ('David'),
('Simon'), ('Alex'), ('Bekmambet'), ('Jullian'),
('Roohullah'), ('Scott'), ('Dustin'), ('Huy'),
('Fernando'), ('Jou'), ('Travis'), ('Jarret')
('Kaydynce'), ('Jonathan')

INSERT INTO REVIEW (user_id, comment, cleanliness, checkin, location, communication, accuracy) VALUES 
(1, 'The quick brown fox jumps over the lazy dog.', 3.8, 0.4, 2.1, 4.2, 1.9),
(2,'She sells sea shells by the sea shore.', 1.3, 4.7, 3.9, 0.2, 2.4),
(3,'The rain in Spain stays mainly in the plain.', 4.1, 2.6, 0.8, 1.7, 3.5),
(4,'Peter Piper picked a peck of pickled peppers.', 3.4, 1.2, 4.6, 2.9, 0.5),
(5,'A proper copper coffee pot.', 2.8, 0.1, 3.2, 1.4, 4.9),
(6,'How can a clam cram in a clean cream can?', 0.6, 1.9, 2.7, 4.3, 3.0),
(7,'The fifth sick sheik''s sixth sheep''s sick.', 4.8, 3.1, 1.6, 0.3, 2.2),
(8,'How vexingly quick daft zebras jump!', 2.5, 4.4, 0.9, 3.7, 1.1),
(9,'The quick onyx goblin jumps over the lazy dwarf.', 1.8, 3.0, 2.3, 0.7, 4.5),
(10,'The quick, brown fox jumps over a lazy dog.', 3.3, 0.5, 1.5, 2.8, 4.0),
(11,'Pack my box with five dozen liquor jugs.', 2.0, 4.2, 1.4, 3.6, 0.9),
(12,'A big black bug bit a big black bear.', 1.5, 3.7, 0.3, 2.1, 4.4),
(13,'Bright vixens jump; dozy fowl quack.', 4.3, 2.0, 1.8, 0.6, 3.2),
(14,'Jived fox nymph grabs quick waltz.', 3.0, 1.3, 4.5, 2.4, 0.8),
(15,'Sphinx of black quartz, judge my vow.', 2.4, 0.7, 3.4, 1.6, 4.1),
(16,'Bawds jog, flick quartz, vex nymphs.', 1.2, 4.9, 2.8, 0.4, 3.3),
(17,'The five boxing wizards jump quickly.', 4.6, 3.2, 1.1, 2.3, 0.2),
(18,'How vexingly quick daft zebras jump!', 3.5, 0.9, 2.6, 4.0, 1.7),
(19,'Jackdaws love my big sphinx of quartz.', 2.9, 1.8, 4.4, 3.1, 0.3),
(20,'A quick movement of the enemy will jeopardize six guns.', 1.7, 3.9, 2.2, 0.5, 4.8),
(21,'The quick brown fox jumps over the lazy dog''s back.', 4.0, 2.3, 1.3, 3.8, 0.6),
(22,'A wickedly ambitious king played with a jester.', 3.2, 0.2, 2.5, 1.0, 4.7),