SELECT CompanyName AS 'Société', ContactName AS 'contact', ContactTitle AS 'Fonction', Phone AS 'Téléphone'
FROM customers
WHERE Country = 'France'