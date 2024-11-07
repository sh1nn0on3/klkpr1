'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Order.init(
    {
      orderId: {
        type: DataTypes.STRING,
      },
      orderDate: {
        type: DataTypes.DATE,
      },
      fulfilmentDate: {
        type: DataTypes.DATE,
      },
      shippingName: {
        type: DataTypes.STRING,
      },
      company: {
        type: DataTypes.STRING,
      },
      contactName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tracking: {
        type: DataTypes.STRING,
      },
      address1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address2: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING,
      },
      zipCode: {
        type: DataTypes.STRING,
      },
      countryCode: {
        type: DataTypes.CHAR,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
      },
      totalQuantity: {
        type: DataTypes.INTEGER,
      },
      totalValueUSD: {
        type: DataTypes.DECIMAL(10, 2),
      },
      insuranceValueUSD: {
        type: DataTypes.DECIMAL(10, 2),
      },
      service: {
        type: DataTypes.STRING,
      },
      taxPaidBy: {
        type: DataTypes.STRING,
      },
      customsDescriptionOverride: {
        type: DataTypes.TEXT,
      },
      trackingNumber: {
        type: DataTypes.STRING,
      },
      trackingStatus: {
        type: DataTypes.STRING,
      },
      parcelWeightKg: {
        type: DataTypes.DECIMAL(10, 2),
      },
      parcelWeightLbs: {
        type: DataTypes.DECIMAL(10, 2),
      },
      parcelHeightCm: {
        type: DataTypes.DECIMAL(10, 2),
      },
      parcelHeightIn: {
        type: DataTypes.DECIMAL(10, 2),
      },
      parcelWidthCm: {
        type: DataTypes.DECIMAL(10, 2),
      },
      parcelWidthIn: {
        type: DataTypes.DECIMAL(10, 2),
      },
      parcelLengthCm: {
        type: DataTypes.DECIMAL(10, 2),
      },
      parcelLengthIn: {
        type: DataTypes.DECIMAL(10, 2),
      },
      dimWeight: {
        type: DataTypes.DECIMAL(10, 2),
      },
      pickPackFee: {
        type: DataTypes.DECIMAL(10, 2),
      },
      actualCost: {
        type: DataTypes.DECIMAL(10, 2),
      },
      actualWeight: {
        type: DataTypes.DECIMAL(10, 2),
      },
      batchNumber: {
        type: DataTypes.STRING,
      },
      warehouse: {
        type: DataTypes.STRING,
      },
      clientPurchaseOrder: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'order',
      tableName: 'orders',
      timestamps: true,
    }
  );

  return Order;
};