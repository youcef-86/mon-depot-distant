SELECT CompanyName AS 'Client', SUM(order_details.UnitPrice*order_details.Quantity) AS 'CA', Country AS 'Pays'
FROM customers
JOIN orders ON customers.CustomerID = orders.CustomerID
	JOIN order_details ON orders.OrderID = order_details.OrderID
GROUP BY customers.CustomerID
HAVING SUM(order_details.UnitPrice*order_details.Quantity) > 30000 
ORDER BY SUM(order_details.UnitPrice*order_details.Quantity) DESC;

