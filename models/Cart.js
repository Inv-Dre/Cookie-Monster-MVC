const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Cart extends Model {}

Cart.init(
    {
        items: {
           type: DataTypes.STRING,
           allowNull: true  
            },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "user",
          
          },
          required: true,
        },
       
        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "cart",
    }
    
);

module.exports = Cart;
