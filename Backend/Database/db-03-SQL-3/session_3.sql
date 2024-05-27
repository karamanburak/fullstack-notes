-- -- -- -- SQL-3  -- -- -- -- 

-- -- -- -- GROUP BY -- -- -- -- 

-- * GROUP BY -- İşlemleri gruplayarak yap.

-- SELECT COUNT(CustomerID), Country FROM Customer GROUP BY Country;
/*
SELECT art.Name, COUNT(alb.Title)
FROM Album AS alb
INNER JOIN Artist AS art ON art.ArtistId = alb.ArtistId
GROUP BY art.Name
*/
-- SELECT BillingCountry, COUNT(InvoiceId) AS faturaSayisi FROM Invoice GROUP BY BillingCountry;  -- Hangi ülkeye kaç adet fatura kesildi.
-- SELECT BillingCountry, COUNT(InvoiceId) AS faturaSayisi, SUM(Total) AS toplam FROM Invoice GROUP BY BillingCountry; -- Ülkeye göre toplam adet/tutarları ver.
-- SELECT BillingCountry, MIN(Total) AS minimum, MAX(Total) AS maximum FROM Invoice GROUP BY BillingCountry;  -- Ülkeye göre min/max fatura tutarı.
/*
SELECT BillingCountry, 
	COUNT(InvoiceId) AS faturaSayisi, 
	SUM(Total) AS toplam, 
	MIN(Total) AS minimum, 
	MAX(Total) AS maximum,
	ROUND(AVG(Total), 2) AS ortalama
FROM Invoice
GROUP BY BillingCountry;
*/

-- -- -- -- INSERT & UPDATE & DELETE  -- -- -- --
/*
-- * INSERT -- Yeni Kayıt Ekle
INSERT INTO Artist (ArtistId, Name)
VALUES (276, 'Qadir Adamson');
*/
/*
-- * INSERT -- Çok Kayıt Ekle
INSERT INTO
	Artist (ArtistId, Name)
VALUES
	(277, 'Qadir1 Adamson'),
	(278, 'Qadir2 Adamson'),
	(279, 'Qadir3 Adamson');
*/
/*
-- * UPDATE -- Güncelleme
UPDATE Artist
SET
	Name = 'Qadir5 Adamson',
	ArtistId = 280
WHERE ArtistId = 279;
*/
/*
-- * DELETE -- Silme
-- DELETE FROM Artist WHERE ArtistId = 280;
-- DELETE FROM Artist WHERE Name LIKE '%Qadir%';
*/