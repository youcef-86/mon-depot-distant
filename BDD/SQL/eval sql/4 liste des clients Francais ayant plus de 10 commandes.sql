SELECT CompanyName AS 'Client', COUNT(orders.CustomerID) AS 'Nmbre commandes'
FROM customers
JOIN orders ON customers.CustomerID = orders.CustomerID
WHERE customers.Country ='france'
GROUP BY CompanyName
HAVING COUNT(orders.CustomerID) > '10';