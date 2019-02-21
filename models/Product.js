module.exports = function(connection, Sequelize) {
    const Product = connection.define('Product', {
        product_name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        department_name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        price: {
            type: Sequelize.INT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        stock_quantity: {
            type: Sequelize.INT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });
    return Product;
}