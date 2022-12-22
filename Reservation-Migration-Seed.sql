DROP TABLE IF EXISTS RESERVATIONS;

CREATE TABLE RESERVATIONS (
    id serial Primary Key,
    adults Int,
    children Int,
    infants Int,
    pets Int,
    checkIn text,
    checkOut text,
    numberOfNights Int,
    nightlyRate Int
);

INSERT INTO RESERVATIONS (adults, children, infants, pets, checkIn, checkOut, numberOfNights, nightlyRate) VALUES 
(1, 1, 0, 0, '01/15/2023', '01/21/2023', 2, 1000);