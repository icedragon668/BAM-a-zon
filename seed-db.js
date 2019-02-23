const db = require('./models');

console.log("Copy?")

const seed = [
{
    "id": 1,
    "product_name": "Ultimate ABC's",
    "department_name": "Food",
    "price": 16,
    "stock_quantity": 42
    },
    {
    "id": 2,
    "product_name": "The Leftovers",
    "department_name": "TV/Video",
    "price": 6,
    "stock_quantity": 508
    },
    {
    "id": 3,
    "product_name": "Golden Retreiver",
    "department_name": "Animals",
    "price": 400,
    "stock_quantity": 5
    },
    {
    "id": 4,
    "product_name": "Flambe for Fun",
    "department_name": "Books",
    "price": 38,
    "stock_quantity": 79
    },
    {
    "id": 5,
    "product_name": "Mac 'n ABC's",
    "department_name": "Food",
    "price": 11,
    "stock_quantity": 57
    },
    {
    "id": 6,
    "product_name": "Merlin",
    "department_name": "TV/Video",
    "price": 28,
    "stock_quantity": 15
    },
    {
    "id": 7,
    "product_name": "a small rodent",
    "department_name": "Animals",
    "price": 0,
    "stock_quantity": 9001
    },
    {
    "id": 8,
    "product_name": "Jumpingjacks: the Final Form",
    "department_name": "Books",
    "price": 35,
    "stock_quantity": 20
    },
    {
    "id": 9,
    "product_name": "Roadkill",
    "department_name": "Toys",
    "price": 5,
    "stock_quantity": 1000
    },
    {
    "id": 10,
    "product_name": "It's a Squid, It's an Alien, It's CTHULHU!",
    "department_name": "Toys",
    "price": 20,
    "stock_quantity": 100
    }
]

db.sequelize.sync({force:true}).then(function(){
    db.Product.bulkCreate(seed)
    .then(function(rows){
        console.log(`\n\nINSERTED into database\n\n`);
        db.sequelize.close();
    })
    .catch(function(err){
        console.log("\n\nERROR:", err);
    });
})