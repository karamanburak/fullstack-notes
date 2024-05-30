--1 SELECT Name, Composer FROM tracks;
--2 SELECT * FROM tracks;
--3 SELECT DISTINCT Composer FROM tracks;
--4 SELECT DISTINCT AlbumId, MediaTypeId FROM tracks
--5 SELECT Name FROM tracks WHERE Composer="Jorge Ben";
--6 SELECT * FROM invoices WHERE Total > 25;
--7 SELECT * FROM invoices WHERE Total < 15  LIMIT 5;
--8 SELECT * FROM invoices WHERE Total > 10 ORDER BY Total DESC LIMIT 2;
--9 SELECT * FROM invoices WHERE BillingCountry<>"Canada" ORDER BY Total ASC LIMIT 10 ;
--10 SELECT InvoiceId, CustomerId, Total FROM invoices ORDER BY CustomerId, Total DESC;
--11 SELECT Name FROM tracks WHERE Name LIKE 'B%S';
--? 12 SELECT InvoiceDate FROM invoices WHERE InvoiceDate BETWEEN "2008-01-01" AND "2011-01-01" ORDER BY InvoiceDate DESC LIMIT 1;
--? 12 SELECT InvoiceDate FROM invoices WHERE InvoiceDate BETWEEN "2008-01-01" AND "2011-12-31" ORDER BY InvoiceDate DESC LIMIT 1;
--13 SELECT FirstName, LastName FROM customers WHERE Country IN ('Belgium', 'Norway');
--14 SELECT Name FROM tracks WHERE Composer LIKE "%Zappa";
--15 SELECT COUNT(*) FROM tracks;
--15 SELECT COUNT(*) FROM invoices;
--16 SELECT COUNT(DISTINCT Composer) FROM tracks;
--17 SELECT AlbumId, COUNT(*) AS number_of_tracks FROM tracks GROUP BY AlbumId ORDER BY number_of_tracks DESC ; 
--18 SELECT Name, MIN(Milliseconds) AS Min, MAX(Milliseconds) FROM tracks;
--19 SELECT AVG(Milliseconds) FROM tracks;
--19 SELECT * FROM tracks WHERE Milliseconds < 393599.212103911;
--20 SELECT Composer, COUNT(*) FROM tracks WHERE Composer IS NOT NULL GROUP BY Composer;
--21 SELECT tracks.Name, genres.Name FROM tracks JOIN genres ON tracks.GenreId = genres.GenreId;
--22 SELECT albums.Title, artists.Name FROM artists LEFT JOIN albums ON albums.ArtistId = artists.ArtistId;
--23 SELECT tracks.AlbumId, albums.Title, MIN(tracks.Milliseconds) AS min_duration FROM albums JOIN tracks ON tracks.AlbumId = albums.AlbumId GROUP BY tracks.AlbumId ORDER BY min_duration DESC;
--24 SELECT albums.Title, SUM(tracks.Milliseconds) AS ahmet FROM tracks JOIN albums ON tracks.AlbumId = albums.AlbumId GROUP BY tracks.AlbumId HAVING ahmet > 3600000 ORDER BY ahmet DESC;
--!25 SELECT TrackId, Name, AlbumId FROM tracks WHERE AlbumId IN (SELECT AlbumId FROM albums WHERE Title IN ('Prenda Minha', 'Heart of the Night' AND 'Out Of Exile')); -- YANLIS KULLANIM
--!25 SELECT TrackId, Name, AlbumId FROM tracks WHERE AlbumId IN (SELECT AlbumId FROM albums WHERE Title IN('Prenda Minha', 'Heart of the Night' OR 'Out Of Exile')); -- YANLIS KULLANIM
--25 SELECT TrackId, Name, AlbumId FROM tracks WHERE AlbumId IN (SELECT AlbumId FROM albums WHERE Title IN('Prenda Minha', 'Heart of the Night', 'Out Of Exile'));
--25 SELECT tracks.TrackId, tracks.Name, albums.AlbumId FROM tracks JOIN albums ON tracks.AlbumId = albums.AlbumId WHERE albums.Title IN ('Prenda Minha', 'Heart of the Night' AND 'Out Of Exile');










