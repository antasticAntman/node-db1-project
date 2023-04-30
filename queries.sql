-- Database Queries

-- Find all customers with postal code 1010
'Select * from customers where postalcode 1010'
-- Find the phone number for the supplier with the id 11
'Select phonenumber from supplier where id = 11 '
-- List first 10 orders placed, sorted descending by the order date
'select * from orders order by date desc limit 10'
-- Find all customers that live in London, Madrid, or Brazil
'select * customers where city = (london, madrid, brazil)'
-- Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"
'insert into theShire (contactname,address, postalcode, country) values(biblobaggins, 1 Hobbit-hole in bag end, 111, middleEarth)'
-- Update Bilbo Baggins record so that the postal code changes to "11122"
'update theShire set postalCode = 11122 where customerName=bilboBaggins' 
-- (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted

-- (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name
