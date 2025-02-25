"use strict";

const fs = require("fs");
const { type } = require("os");
const path = require("path");
const { json, DataTypes } = require("sequelize");
const { sequelize } = require("../models");

// Change for how many sets of 3 are seeded. 4 setsresults in 12 products
const howManySets = 30;

// random function
const selectRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randomPriceWithDollarsString = () => `${Math.floor(Math.random() * 100) + 1}.${Math.floor(Math.random() * 99) + 1}`
// categories
const categories = {
  electronics: [
    "New",
    "Used",
    "Refurbished",
  ],
  clothing: [
    "American",
    "African",
    "Alien",
  ],
  knobs: [
    "Straight",
    "Crooked",
    "Curved",
  ]
}
// product names
const products = {
  electronics: [
    "Laptop",
    "Phone",
    "Charger",
    "Wire",
    "Tool",
    "Graphics Card",
    "Headset",
    "Keyboard",
    "Mouse",
    "Speaker",
    "Tablet",
    "TV",
    "Monitor",
    "Mouse Pad",
    "Keyboard Pad",
    "Memory Card",
    "Memory Stick",
    "External Hard Drive",
    "External SSD",
    "External DVD",
    "External Optical Drive",
    "External CD",
  ],
  clothing: [
    "Hoodie",
    "Shoe",
    "Pant",
    "T-shirt",
    "Sweatshirt",
    "Sweatpants",
    "Jacket",
    "Sweater",
    "Skirt",
    "Dress",
    "Blouse",
    "Jumper",
    "Sweatshirt",
    "Sweatpants",
    "Sweater",
    "Jacket",
    "Sweater",
    "Skirt",
    "Dress",
    "Blouse",
    "Jumper",
    "Sweatshirt"],
  knobs: [
    "Lock",
    "Knob",
    "Fastener",
    "Handle",
    "Door",
    "Window",
    "Furniture",
    "Closet",
    "Shelf",
    "Drawer",
    "Cabinet",
    "Desk",]
}
// descriptions
const descriptions = {
  electronics: [
    "This is such a high quality device",
    "Incredible workmanship",
    "The best ever",
    "This is the best",
    "Technology these days!",
  ],
  clothing: [
    "Sewing like this has never been seen",
    "Incredible sewmanship",
    "The best ever",
    "Sewn by experts",
    "Stiching like this is art.",
  ],
  knobs: [
    "This is such a high quality product",
    "Incredible workmanship",
    "The best ever",
    "Did Michaelangelo make this knob?",
    "Shockingly sturdy."
  ],}

  //generate random between 0 100
  const generateStock = () => Math.floor(Math.random() * 100)
  //random true or false
  const generateBoolean = () => Math.random() >= 0.5
  
  const generateBooleanUnlikely = () => Math.random() >= 0.9
  //detail keys value pair generator
  const generateDetailsObject = (storetype) => {
    let details = {};
    if (generateBoolean()) {
    details.color = selectRandom(["rainbow","black", "white", "red", "blue", "green", "yellow", "purple"]);
    }
    if (generateBoolean()) {
    details.material = selectRandom(["steel","rock","plastic","carbon", "aluminum", "copper", "leather"]);
    }
    if (generateBoolean()) {
    details.size = selectRandom(["tiny","small", "medium", "large","massive"]);
    }
    details.category = selectRandom(categories[storetype]);
    return details
  }
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    


    let sets = [];
    for (let i = 0; i < howManySets; i++) {
      sets.push(
        {
          product_id: 1 + i * 3,
          product_name: selectRandom(products.electronics),
          image: null,
          price: randomPriceWithDollarsString(),
          description: selectRandom(descriptions.electronics),
          stock: generateStock(),
          details_object: JSON.stringify(generateDetailsObject("electronics")),
          store_id: 2,
          best_seller: generateBooleanUnlikely()
        },
        {
          product_id: 2 + i * 3,
          product_name: selectRandom(products.clothing),
          image: null,
          price: randomPriceWithDollarsString(),
          description: selectRandom(descriptions.clothing),
          stock: generateStock(),
          details_object: JSON.stringify(generateDetailsObject("clothing")),
          store_id: 3,
          best_seller: generateBooleanUnlikely()
        },
        {
          product_id: 3 + i * 3,
          product_name: selectRandom(products.knobs),
          image: null,
          price:  randomPriceWithDollarsString(),
          description: selectRandom(descriptions.knobs),
          stock: generateStock(),
          details_object: JSON.stringify(generateDetailsObject("knobs")),
          store_id: 1,
          best_seller: generateBooleanUnlikely()
        }
      );
    }

    await queryInterface.bulkInsert("products", sets);
  },

  async down(queryInterface, Sequelize) {
    let idsToDelete = [];
    for (let i = 0; i < howManySets; i++) {
      idsToDelete.push(1 + i * 3, 2 + i * 3, 3 + i * 3);
    }
    console.log(idsToDelete);

    return queryInterface.bulkDelete("products", {
      product_id: idsToDelete,
    });
  },
};
