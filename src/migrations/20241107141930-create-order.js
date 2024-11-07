"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      orderId: {
        type: Sequelize.STRING,
      },
      orderDate: {
        type: Sequelize.DATE,
      },
      fulfilmentDate: {
        type: Sequelize.DATE,
      },
      shippingName: {
        type: Sequelize.STRING,
      },
      company: {
        type: Sequelize.STRING,
      },
      contactName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tracking: {
        type: Sequelize.STRING,
      },
      address1: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address2: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING,
      },
      zipCode: {
        type: Sequelize.STRING,
      },
      countryCode: {
        type: Sequelize.CHAR,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
      },
      totalQuantity: {
        type: Sequelize.INTEGER,
      },
      totalValueUSD: {
        type: Sequelize.DECIMAL(10, 2),
      },
      insuranceValueUSD: {
        type: Sequelize.DECIMAL(10, 2),
      },
      service: {
        type: Sequelize.STRING,
      },
      taxPaidBy: {
        type: Sequelize.STRING,
      },
      customsDescriptionOverride: {
        type: Sequelize.TEXT,
      },
      trackingNumber: {
        type: Sequelize.STRING,
      },
      trackingStatus: {
        type: Sequelize.STRING,
      },
      parcelWeightKg: {
        type: Sequelize.DECIMAL(10, 2),
      },
      parcelWeightLbs: {
        type: Sequelize.DECIMAL(10, 2),
      },
      parcelHeightCm: {
        type: Sequelize.DECIMAL(10, 2),
      },
      parcelHeightIn: {
        type: Sequelize.DECIMAL(10, 2),
      },
      parcelWidthCm: {
        type: Sequelize.DECIMAL(10, 2),
      },
      parcelWidthIn: {
        type: Sequelize.DECIMAL(10, 2),
      },
      parcelLengthCm: {
        type: Sequelize.DECIMAL(10, 2),
      },
      parcelLengthIn: {
        type: Sequelize.DECIMAL(10, 2),
      },
      dimWeight: {
        type: Sequelize.DECIMAL(10, 2),
      },
      pickPackFee: {
        type: Sequelize.DECIMAL(10, 2),
      },
      actualCost: {
        type: Sequelize.DECIMAL(10, 2),
      },
      actualWeight: {
        type: Sequelize.DECIMAL(10, 2),
      },
      batchNumber: {
        type: Sequelize.STRING,
      },
      warehouse: {
        type: Sequelize.STRING,
      },
      clientPurchaseOrder: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("orders");
  },
};
