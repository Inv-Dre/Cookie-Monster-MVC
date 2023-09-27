// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");

// class Order extends Model {}

// Order.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     order_status: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     order_date: {
//       type: DataTypes.DATE,
//       allowNull: false,
//       validate: {
//         isDate: true,
//       },
//     },

//     customer_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: "user",
//         key: "id",
//       },
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "order",
//   }
// );

// module.exports = Order;
