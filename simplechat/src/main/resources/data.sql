INSERT INTO SENDER(ID, NAME) VALUES(1, 'Frod');
INSERT INTO SENDER(ID, NAME) VALUES(2, 'Sam');
INSERT INTO SENDER(ID, NAME) VALUES(3, 'Gandalf');

INSERT INTO MESSAGE(ID, CONTENT, WHEN, ID_SENDER) VALUES(1, 'Hello! I am Frodo', '2018-04-01 01:00:00.00', 1);
INSERT INTO MESSAGE(ID, CONTENT, WHEN, ID_SENDER) VALUES(2, 'Hello! I am Sam','2018-04-01 02:00:00.00', 2);
INSERT INTO MESSAGE(ID, CONTENT, WHEN, ID_SENDER) VALUES(3, 'Hello! I am Gandalf', '2018-04-01 03:00:00.00', 3);