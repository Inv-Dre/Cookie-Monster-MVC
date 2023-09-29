const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Cart extends Model {}

Cart.init(
    {
        items: [
            {
              productId: {
                type: DataTypes.OBJECT,
                references: {
                    model: "product",
                    key: "id",
                },
                
              },
              qty: {
                type: Number,
                default: 0,
              },
              price: {
                type: Number,
                default: 0,
              },
              title: {
                type: String,
              },
              productCode: {
                type: String,
              },
            },
        ],
    
        totalQty: {
          type: DataTypes.INTEGER,
          allowNull: false,
          
        },
        totalCost: {
            type: DataTypes.INTEGER,
            allowNull: false,
            required: true,
        
        },
        user: {
          type: DataTypes.OBJECT,
          allowNull: false,
          references: {
            model: "user",
          
          },
          required: true,
        },
        createdAt: {
            type: DataTypes.Date,
            allowNull: false,
            default: Date.now,
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
