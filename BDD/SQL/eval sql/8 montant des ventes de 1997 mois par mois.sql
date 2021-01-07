SELECT MONTH(OrderDate) AS 'Mois 97', SUM(order_details.UnitPrice*order_details.Quantity) AS 'Montant Ventes'
FROM order_details
JOIN orders
ON orders.OrderID = order_details.OrderID
WHERE orders.OrderDate LIKE '1997%'
GROUP BY MONTH(orders.OrderDate);