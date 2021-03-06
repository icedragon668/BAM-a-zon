USE bamazon_db;

ALTER TABLE products CHANGE COLUMN createdAt createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE products CHANGE COLUMN updatedAt updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;

INSERT INTO products(product_name,department_name,price,stock_quantity) VALUES ("Ultimate ABC's","Food",15.59,42);
INSERT INTO products(product_name,department_name,price,stock_quantity) VALUES ("The Leftovers","TV/Video",5.98,508);
INSERT INTO products(product_name,department_name,price,stock_quantity) VALUES ("Golden Retreiver","Animals",400.00,5);
INSERT INTO products(product_name,department_name,price,stock_quantity) VALUES ("Flambe for Fun","Books",37.86,79);
INSERT INTO products(product_name,department_name,price,stock_quantity) VALUES ("Mac 'n ABC's","Food",10.99,57);
INSERT INTO products(product_name,department_name,price,stock_quantity) VALUES ("Merlin","TV/Video",27.50,15);
INSERT INTO products(product_name,department_name,price,stock_quantity) VALUES ("a small rodent","Animals",0.10,9001);
INSERT INTO products(product_name,department_name,price,stock_quantity) VALUES ("Jumpingjacks: the Final Form","Books",35.00,20);
INSERT INTO products(product_name,department_name,price,stock_quantity) VALUES ("Roadkill","Toys",5.00,1000);
INSERT INTO products(product_name,department_name,price,stock_quantity) VALUES ("It's a Squid, It's an Alien, It's CTHULHU!","Toys",20.00,100);

#describe products