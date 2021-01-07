SELECT DISTINCT customers.Country AS 'Pays'
FROM customers
JOIN orders ON customers.CustomerID = orders.CustomerID
	JOIN order_details ON orders.OrderID = order_details.OrderID
		JOIN products ON order_details.ProductID = products.ProductID
			JOIN suppliers ON products.SupplierID = suppliers.SupplierID
WHERE suppliers.CompanyName = 'Exotic Liquids'
ORDER BY customers.Country ASC;

