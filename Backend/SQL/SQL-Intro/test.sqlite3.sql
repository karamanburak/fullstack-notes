-- SQLite
-- * WHERE - Filtreleme
-- select * from Album; --* tüm veriler listelenir
-- select * from Album where AlbumId=1;
-- select * from Album where Title='For Those About To Rock We Salute You';
-- select * from Customer where Country='Canada'; --* Ülkesi kanada olanlar
-- SELECT * FROM Customer WHERE Country="USA";
-- SELECT * FROM Customer WHERE CustomerId=15;
-- SELECT * FROM Customer;

-- --! 1. Marktan sonraki müsterileri getir
-- SELECT * FROM Customer WHERE FirstName="Mark"; --* 1. Mark id si 14
-- SELECT * FROM Customer WHERE CustomerId>14;

-- --! 1. Mark ve sonraki müsterileri getir
-- SELECT * FROM Customer WHERE CustomerId>=14;

-- --! iki Mark arasindaki müsterileri getir
-- SELECT * FROM Customer WHERE FirstName="Mark"; --* 2. Mark id si 55
-- SELECT * FROM Customer WHERE CustomerId > 14;
-- SELECT * FROM Customer WHERE CustomerId < 55;

-- --! iki komutu birlestirmek icin...
-- SELECT * FROM Customer WHERE CustomerId BETWEEN 14 AND 55;

-- --! USA da yasamayanlari getir
-- SELECT * FROM Customer WHERE Country="USA";
-- SELECT * FROM Customer WHERE Country<>"USA";
-- SELECT * FROM Customer WHERE Country!="USA";
-- SELECT * FROM Customer WHERE not Country="USA";

-- --! Canada ve Brezilyada yasayanlari getir..
-- SELECT * FROM Customer WHERE Country = "Canada";
-- SELECT * FROM Customer WHERE Country = "Brazil";
-- SELECT * FROM Customer WHERE Country = "Canada" or Country = "Brazil";
-- SELECT * FROM Customer WHERE Country = "Canada" or Country = "Brazil" or Country = "USA";
-- SELECT * FROM Customer WHERE Country IN ('Canada', 'Brazil', 'USA');
-- SELECT * FROM Customer WHERE Country IN ('USA');
-- SELECT * FROM Customer WHERE Country NOT IN ('USA');
-- SELECT * FROM Customer WHERE CustomerId IN (1,4,8,45) AND (Country = "Brazil" OR Country = "USA") OR CustomerId = 45
-- SELECT * FROM Customer WHERE (Country = 'USA' OR Country = 'Brazil' OR Country='Denmark') AND (CustomerId BETWEEN 25 AND 27);
-- SELECT * FROM Customer WHERE Country IN ('USA','Brazil','Denmark') AND (CustomerId BETWEEN 25 AND 27);
-- SELECT * FROM Customer WHERE Country = 'USA';
-- SELECT * FROM Customer WHERE Country LIKE 'USA'; --* bu durumda eşittirden farklı bir sonuç vermez
-- SELECT * FROM Customer WHERE Country LIKE '%U%';
-- SELECT * FROM Customer WHERE Country LIKE 'U%'; --* U ile başlayanları getiri
-- SELECT * FROM Customer WHERE Country LIKE '%A'; --* A ile birenler gelir
-- SELECT * FROM Customer WHERE Country LIKE 'U_A%';
-- SELECT * FROM Customer;
-- SELECT * FROM Customer WHERE Country LIKE 'U%A';

-- * ORDER BY
-- SELECT * FROM Customer ORDER BY CustomerId ASC; --* ARTAN SIRALAMA
-- SELECT * FROM Customer ORDER BY CustomerId DESC; --* AZALAN SIRALAMA
-- SELECT * FROM Customer ORDER BY FirstName,LastName DESC WHERE CustomerId IN (14,55); --* Bu satir hata verir. WHERE Komutu ilk önce gelmelidir.
-- SELECT * FROM Customer WHERE CustomerId IN (14,55) ORDER BY FirstName,LastName DESC;
-- SELECT * FROM Customer WHERE CustomerId IN (14,55) ORDER BY FirstName,LastName DESC LIMIT 0,10
-- SELECT count(*) as 'toplam kisi' FROM Customer;  --* toplam kisi
-- SELECT SUM(Total) as total FROM Invoice;

--* *** iliski durumu -- Iliskisel veri tabani ***
-- SELECT * FROM Album  JOIN Artist  ON Album.ArtistId = Artist.ArtistId; --* orjinal hali
-- SELECT * FROM Album a JOIN Artist r ON a.ArtistId = r.ArtistId; --* kisa yolu
SELECT a.ArtistId,a.Title, r.Name FROM Album a JOIN Artist r ON a.ArtistId = r.ArtistId; 

