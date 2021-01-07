
SELECT CompanyName AS 'Fournisseur', count(productID) AS `Nbre produits`
FROM suppliers
JOIN Products ON suppliers.SupplierID = Products.SupplierID
WHERE  Country = 'France'
group by CompanyName
order by `Nbre produits` desc