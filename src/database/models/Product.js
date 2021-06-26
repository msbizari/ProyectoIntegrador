module.exports = (sequelize, DataTypes) => {
    let alias = 'Product';
    let cols = {
         id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: DataTypes.STRING(100),
        description: DataTypes.STRING(255),
        price: DataTypes.DECIMAL(10,2),
        discount: DataTypes.INTEGER,
        image:DataTypes.STRING(100),
        category_id: DataTypes.INTEGER,
        size:DataTypes.STRING(100),
        brand_id: DataTypes.INTEGER,
    };
    // cambiar los nombres de las columnas 
    let options = {
        tableName: 'products',
        timestamps: false
    }

    const Product = sequelize.define(alias,cols,options);

    Product.associate = function(models){
        Product.belongsTo(models.Category,{
            as: "category",
            foreignKey: 'category_id',
            timestamps: false
        })
    
    
        Product.belongsTo(models.Brand,{
            as: "brand",
            foreignKey: 'brand_id',
            timestamps: false
        })

    }
    return Product;
}