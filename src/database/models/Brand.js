module.exports = (sequelize, DataTypes) => {
    let alias = 'Brand';
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
        tableName: 'brands',
        timestamps: false
    }

    const Brand = sequelize.define(alias,cols,options);
    
    Brand.associate = function(models){
        Brand.hasMany(models.Product,{
            as: "products",
            foreignKey: 'brand_id',
            timestamps: false
        })
    }
    return Brand;
}