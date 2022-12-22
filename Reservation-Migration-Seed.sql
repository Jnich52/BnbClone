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
(2, 0, 0, 2, '15 Jan 2023', '21 Jan 2023', 6, 1000);