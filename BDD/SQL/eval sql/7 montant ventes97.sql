SELECT SUM(order_details.UnitPrice*order_details.Quantity) AS 'Montant Ventes 97'
FROM order_details
JOIN orders
ON orders.OrderID = order_details.OrderID
WHERE orders.OrderDate LIKE '1997%'
		
