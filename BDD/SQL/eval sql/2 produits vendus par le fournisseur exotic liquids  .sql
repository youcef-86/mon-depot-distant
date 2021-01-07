SELECT ProductName AS 'Produit', UnitPrice AS 'Prix'
FROM Products
JOIN suppliers ON suppliers.SupplierID
WHERE suppliers.CompanyName = 'Exotic Liquids'
LIMIT 3;
