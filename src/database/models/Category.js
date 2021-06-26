module.exports = (sequelize, DataTypes) => {
    let alias = 'Category';
    let cols = {
         id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: DataTypes.STRING(100),
    };
    // cambiar los nombres de las columnas 
    let options = {
        tableName: 'categorys',
        timestamps: false
    }

    const Category = sequelize.define(alias,cols,options);
    
    Category.associate = function(models){
        Category.hasMany(models.Product,{
            as: "products",
            foreignKey: 'category_id',
            timestamps: false
        })
    }
    return Category;
}