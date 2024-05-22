--comment
/*
	multi line comment
*/

--SELECT neler gelecek FROM tablo ismi
--SELECT * FROM invoices;
--SELECT BillingCountry, InvoiceId FROM invoices;
--SELECT BillingCountry as FaturaKesilenUlke, InvoiceId FROM invoices;
--SELECT DISTINCT BillingCountry FROM invoices;
--SELECT * FROM invoices where BillingCountry='USA';

-- where icinde case sensitive gecerlidir!!!
--SELECT * FROM invoices where BillingCountry='USA' and BillingCity="Boston";

/*SELECT * 
FROM invoices 
where BillingCountry='USA' and BillingCity="Boston" and Total >= 5;*/


SELECT * 
FROM invoices 
WHERE BillingCountry='USA' and BillingCity="Boston" and Total >= 5;

SELECT * 
FROM invoices 
WHERE BillingCountry='Canada' or BillingCountry="Germany";

SELECT * FROM artists ORDER BY name ;

--ORDER BY ASC, DESC
SELECT * FROM invoices ORDER BY BillingCountry, BillingCity DESC ;
SELECT * FROM invoices ORDER BY BillingCountry, Total;
SELECT * FROM customers;
-- SELECT FirstName,LastName,Email FROM customers ;
-- SELECT FirstName,LastName,Email 
-- FROM customers WHERE FirstName="Edward";

--"E%" E ile baslayan, "%E%" arada E olan, "%e" E ile biten
SELECT FirstName,LastName,Email 
FROM customers WHERE FirstName like "E%";

SELECT FirstName,LastName,Email 
FROM customers WHERE FirstName like "%f%"; 

-- ilk harfi ne olursa olsun ikinci harfi e olsun
SELECT FirstName,LastName,Email
FROM customers WHERE FirstName LIKE "_e%r"; --2. karakter e ve sonu r gerisi önemli degil

SELECT * FROM customers WHERE Email LIKE "%@gmail%";

SELECT * FROM invoices WHERE total >3.96 AND total<6; --Burada 3.96 ve 6 dahil degildir. Dahil etmek icin esittir eklemeliyiz.
SELECT * FROM invoices WHERE total BETWEEN 3.96 AND 6; --Burada 3.96 ve 6 da dahildir total >=3.96
SELECT * FROM invoices 
WHERE InvoiceDate BETWEEN "2009-01-02" AND "2009-04-05"; 