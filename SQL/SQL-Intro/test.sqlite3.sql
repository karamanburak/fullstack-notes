-- SQLite
-- SELECT * FROM Customer WHERE Country='Canada';
-- SELECT * FROM Customer WHERE Country="USA";
-- SELECT * FROM Customer WHERE CustomerId=15;
-- SELECT * FROM Customer;

-- -- 1. Marktan sonraki müsterileri getir
-- SELECT * FROM Customer WHERE FirstName="Mark"; -- 1. Mark id si 14
-- SELECT * FROM Customer WHERE CustomerId>14;

-- -- 1. Mark ve sonraki müsterileri getir
-- SELECT * FROM Customer WHERE CustomerId>=14;

-- --iki Mark arasindaki müsterileri getir
-- SELECT * FROM Customer WHERE FirstName="Mark"; -- 2. Mark id si 55
-- SELECT * FROM Customer WHERE CustomerId > 14;
-- SELECT * FROM Customer WHERE CustomerId < 55;

-- --iki komutu birlestirmek icin...
-- SELECT * FROM Customer WHERE CustomerId BETWEEN 14 AND 55;

-- --USA da yasamayanlari getir
-- SELECT * FROM Customer WHERE Country="USA";
-- SELECT * FROM Customer WHERE Country<>"USA";
-- SELECT * FROM Customer WHERE Country!="USA";
-- SELECT * FROM Customer WHERE not Country="USA";

-- -- Canada ve Brezilyada yasayanlari getir..
-- SELECT * FROM Customer WHERE Country = "Canada";
-- SELECT * FROM Customer WHERE Country = "Brazil";
-- SELECT * FROM Customer WHERE Country = "Canada" or Country = "Brazil";
-- SELECT * FROM Customer WHERE Country = "Canada" or Country = "Brazil" or Country = "USA";
-- SELECT * FROM Customer WHERE Country IN ('Canada', 'Brazil', 'USA');
-- SELECT * FROM Customer WHERE Country IN ('USA');
-- SELECT * FROM Customer WHERE Country NOT IN ('USA');
SELECT * FROM Customer WHERE CustomerId IN (1,4,8,45) AND Country = "Brazil" or CustomerId = 45