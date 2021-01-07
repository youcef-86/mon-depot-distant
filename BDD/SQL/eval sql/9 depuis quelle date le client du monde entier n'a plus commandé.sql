SELECT MAX(OrderDate) AS 'Date de dernière commande'
FROM orders
WHERE orders.CustomerID = 'DUMON'