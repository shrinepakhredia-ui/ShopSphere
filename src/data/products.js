import iphone from "../assets/Products/iphone.png";
import samsung from "../assets/Products/samsung.png";
import macbook from "../assets/Products/macbook.png";
import laptop from "../assets/Products/laptop.png";
import headphones from "../assets/Products/headphones.png";
import smartwatch from "../assets/Products/smartwatch.png";
import keyboard from "../assets/Products/keyboard.png";
import mouse from "../assets/Products/mouse.png";
import speaker from "../assets/Products/speaker.png";

import ipad from "../assets/Products/ipad.png";
import tv from "../assets/Products/tv.png";
import fridge from "../assets/Products/fridge.png";
import airpods from "../assets/Products/airpods.png";
import boat from "../assets/Products/boat.png";
import ps5 from "../assets/Products/ps5.png";
import xbox from "../assets/Products/xbox.png";
import controller from "../assets/Products/controller.png";
import rog from "../assets/Products/rog.png";
import galaxywatch from "../assets/Products/galaxywatch.png";
import firebolt from "../assets/Products/firebolt.png";
import noise from "../assets/Products/noise.png";

const products = [

  // Electronics

  {
    id: 1,
    name: "iPhone 16 Pro",
    brand: "Apple",
    category: "Electronics",
    price: 129999,
    rating: 4.9,
    image: iphone,
    stock: true,
    description:
      "Apple flagship smartphone with A18 Pro chip and advanced camera system.",
  },

  {
    id: 2,
    name: "Galaxy S25 Ultra",
    brand: "Samsung",
    category: "Electronics",
    price: 119999,
    rating: 4.8,
    image: samsung,
    stock: true,
    description:
      "Samsung premium flagship smartphone with AI powered camera.",
  },

  {
    id: 3,
    name: "iPad Pro M4",
    brand: "Apple",
    category: "Electronics",
    price: 99999,
    rating: 4.9,
    image: ipad,
    stock: true,
    description:
      "Ultra powerful iPad Pro with M4 chip and Liquid Retina display.",
  },

  {
    id: 4,
    name: "Samsung Smart TV 55\"",
    brand: "Samsung",
    category: "Electronics",
    price: 69999,
    rating: 4.7,
    image: tv,
    stock: true,
    description:
      "Crystal 4K UHD Smart TV with HDR and Dolby Audio.",
  },

  // Laptops

  {
    id: 5,
    name: "MacBook Air M4",
    brand: "Apple",
    category: "Laptops",
    price: 139999,
    rating: 4.9,
    image: macbook,
    stock: true,
    description:
      "Ultra-light Apple laptop powered by M4 processor.",
  },

  {
    id: 6,
    name: "HP Victus Gaming",
    brand: "HP",
    category: "Laptops",
    price: 89999,
    rating: 4.7,
    image: laptop,
    stock: true,
    description:
      "Gaming laptop powered by RTX graphics and Ryzen processor.",
  },

  {
    id: 7,
    name: "ASUS ROG Zephyrus",
    brand: "ASUS",
    category: "Laptops",
    price: 164999,
    rating: 4.8,
    image: rog,
    stock: true,
    description:
      "Premium gaming laptop built for creators and gamers.",
  },

  {
    id: 8,
    name: "LG Double Door Refrigerator",
    brand: "LG",
    category: "Electronics",
    price: 54999,
    rating: 4.6,
    image: fridge,
    stock: true,
    description:
      "Energy efficient refrigerator with Smart Inverter technology.",
  },

  // Audio

  {
    id: 9,
    name: "Sony WH-1000XM5",
    brand: "Sony",
    category: "Audio",
    price: 29999,
    rating: 4.9,
    image: headphones,
    stock: true,
    description:
      "Industry leading wireless noise cancelling headphones.",
  },

  {
    id: 10,
    name: "AirPods Pro 2",
    brand: "Apple",
    category: "Audio",
    price: 24999,
    rating: 4.8,
    image: airpods,
    stock: true,
    description:
      "Premium ANC earbuds with spatial audio support.",
  },

    {
    id: 11,
    name: "boAt Rockerz 550",
    brand: "boAt",
    category: "Audio",
    price: 2999,
    rating: 4.6,
    image: boat,
    stock: true,
    description:
      "Wireless over-ear headphones with immersive bass and long battery life.",
  },

  {
    id: 12,
    name: "JBL Flip 6",
    brand: "JBL",
    category: "Audio",
    price: 8999,
    rating: 4.7,
    image: speaker,
    stock: true,
    description:
      "Portable Bluetooth speaker with powerful sound and waterproof design.",
  },

  // Gaming

  {
    id: 13,
    name: "PlayStation 5",
    brand: "Sony",
    category: "Gaming",
    price: 54999,
    rating: 4.9,
    image: ps5,
    stock: true,
    description:
      "Next-generation gaming console with lightning-fast SSD and ray tracing.",
  },

  {
    id: 14,
    name: "Xbox Series X",
    brand: "Microsoft",
    category: "Gaming",
    price: 52999,
    rating: 4.8,
    image: xbox,
    stock: true,
    description:
      "Powerful Xbox console delivering true 4K gaming performance.",
  },

  {
    id: 15,
    name: "Logitech G Pro Wireless",
    brand: "Logitech",
    category: "Gaming",
    price: 9999,
    rating: 4.8,
    image: mouse,
    stock: true,
    description:
      "Professional wireless gaming mouse with HERO sensor.",
  },

  {
    id: 16,
    name: "Xbox Wireless Controller",
    brand: "Microsoft",
    category: "Gaming",
    price: 5499,
    rating: 4.7,
    image: controller,
    stock: true,
    description:
      "Ergonomic wireless controller compatible with Xbox and PC.",
  },

  // Smart Watches

  {
    id: 17,
    name: "Apple Watch Series 10",
    brand: "Apple",
    category: "Smart Watches",
    price: 49999,
    rating: 4.9,
    image: smartwatch,
    stock: true,
    description:
      "Premium smartwatch with health tracking and fitness features.",
  },

  {
    id: 18,
    name: "Samsung Galaxy Watch Ultra",
    brand: "Samsung",
    category: "Smart Watches",
    price: 39999,
    rating: 4.8,
    image: galaxywatch,
    stock: true,
    description:
      "Rugged premium smartwatch with WearOS and advanced health monitoring.",
  },

  {
    id: 19,
    name: "Fire-Boltt Ninja Call Pro",
    brand: "Fire-Boltt",
    category: "Smart Watches",
    price: 2999,
    rating: 4.5,
    image: firebolt,
    stock: true,
    description:
      "Affordable smartwatch with Bluetooth calling and SpO2 monitoring.",
  },

  {
    id: 20,
    name: "Noise ColorFit Pro 6",
    brand: "Noise",
    category: "Smart Watches",
    price: 4499,
    rating: 4.6,
    image: noise,
    stock: true,
    description:
      "Feature-rich smartwatch with AMOLED display and long battery life.",
  }

];

export default products;