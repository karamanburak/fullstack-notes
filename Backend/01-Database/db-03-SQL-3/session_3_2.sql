-- Active: 1716810251952@@127.0.0.1@3306
SELECT * FROM "Album";
SELECT * FROM "Customer";
SELECT "Country", count("Country") AS countryCount FROM "Customer" GROUP BY "Country" HAVING countryCount>1
-- müşteri sayısı birden büyük olanları getirir

SELECT "Country", count("Country") AS countryCount FROM "Customer" WHERE "Country" IN ("USA", "Germany") GROUP BY "Country" HAVING countryCount>5;
-- usa ve germany müşteri sayısı 5 den büyük olanlar

SELECT * FROM "Album";
SELECT * FROM 'ALbum';
SELECT * FROM Album;

SELECT "Country", count("Country") AS 'country Count' FROM 'Customer' GROUP BY "Country" HAVING 'country Count'>1;

SELECT "Country" as ulke FROM "Customer" HAVING ulke="USA";
-- Çalışmaz hata alırız çünkü GROUP BY komutu sonucuna göre sorgu yapar

------------------------ CRUD --------------------------------

SELECT "GenreId","Name" FROM "Genre"; -- Okuma

INSERT INTO "Genre" ("GenreId", "Name") VALUES (26, "Halk Müziği"); -- Yeni kayıt işlemi yapıyoruz
UPDATE "Genre" SET "Name"="Türk Halk Müziği" WHERE "GenreId"=26; --  Veriyi güncelliyoruz

delete from "Genre" where "GenreId" = 26; -- veriyi siliyoruz

-- ******* UPDATE ve DELETE komutları tehlikeli komutlardır ************

UPDATE "Genre" SET "Name"="Türk Halk Müziği" -- Tüm satırları Türk Halk Müziği yazar

DELETE FROM "Genre"; -- Tüm kayıtları siler

-- ******* UPDATE ve DELETE komutları tehlikeli komutlardır ************
