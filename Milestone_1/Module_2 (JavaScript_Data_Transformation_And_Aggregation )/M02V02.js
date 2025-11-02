const rewApiData = [
  {
    id: 1,
    productName: "Wireless Bluetooth Headphones",
    category: "Electronics",
    price: 1999,
    rating: 4.5,
    stock: 25
  },
  {
    id: 2,
    productName: "Mechanical Gaming Keyboard",
    category: "Computer Accessories",
    price: 3499,
    rating: 4.7,
    stock: 18
  },
  {
    id: 3,
    productName: "Smart Fitness Watch",
    category: "Wearables",
    price: 2799,
    rating: 4.3,
    stock: 30
  },
  {
    id: 4,
    productName: "Portable Power Bank 20000mAh",
    category: "Mobile Accessories",
    price: 1499,
    rating: 4.4,
    stock: 50
  },
  {
    id: 5,
    productName: "USB-C Fast Charger",
    category: "Mobile Accessories",
    price: 799,
    rating: 4.2,
    stock: 40
  },
  {
    id: 6,
    productName: "Noise Cancelling Earbuds",
    category: "Audio",
    price: 2599,
    rating: 4.6,
    stock: 32
  },
  {
    id: 7,
    productName: "Full HD Webcam",
    category: "Computer Accessories",
    price: 2199,
    rating: 4.1,
    stock: 22
  },
  {
    id: 8,
    productName: "Smart LED Bulb",
    category: "Home Appliances",
    price: 499,
    rating: 4.0,
    stock: 75
  },
  {
    id: 9,
    productName: "External Hard Drive 1TB",
    category: "Computer Accessories",
    price: 4599,
    rating: 4.5,
    stock: 28
  },
  {
    id: 10,
    productName: "Ergonomic Office Chair",
    category: "Furniture",
    price: 8999,
    rating: 4.8,
    stock: 10
  }
];

// Output ==> [{name : "Phone"}, {name : "Smart Watches"}]

// Process
    // filter => Computer Accessories
    // Sort by => rating
    // Slice => top 3
    // Map => transform object shape to {name : name}

const topComputerAccessories = rewApiData
  .filter((item) => item.category == "Computer Accessories")
  .sort((a,b) => b.rating - a.rating)
  .slice(0, 2)
  .map((item) => {
  return { name : item.productName}
});
console.log(topComputerAccessories);