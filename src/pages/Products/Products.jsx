import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import styles from "./Products.module.css";

import products from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";

function Products() {

  const [searchParams] = useSearchParams();

  const initialCategory =
    searchParams.get("category") || "All";

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState(initialCategory);

  const [sort, setSort] = useState("default");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  let filteredProducts = products.filter((product) => {

    const searchMatch =

      product.name
        .toLowerCase()
        .includes(search.toLowerCase())

      ||

      product.brand
        .toLowerCase()
        .includes(search.toLowerCase());

    const categoryMatch =

      category === "All"

      ||

      product.category === category;

    return searchMatch && categoryMatch;

  });

  switch (sort) {

    case "priceLow":

      filteredProducts.sort(

        (a, b) => a.price - b.price

      );

      break;

    case "priceHigh":

      filteredProducts.sort(

        (a, b) => b.price - a.price

      );

      break;

    case "rating":

      filteredProducts.sort(

        (a, b) => b.rating - a.rating

      );

      break;

    case "name":

      filteredProducts.sort((a, b) =>

        a.name.localeCompare(b.name)

      );

      break;

    default:

      break;

  }

  return (

    <section className={styles.container}>

      <div className={styles.header}>

        <div>

          <h1>All Products</h1>

          <p className={styles.count}>

            Showing {filteredProducts.length} Products

          </p>

        </div>

        <div className={styles.controls}>

          <div className={styles.searchBox}>

            <FaSearch />

            <input

              type="text"

              placeholder="Search Products..."

              value={search}

              onChange={(e) =>

                setSearch(e.target.value)

              }

            />

          </div>

          <select

            className={styles.select}

            value={category}

            onChange={(e) =>

              setCategory(e.target.value)

            }

          >

            {

              categories.map((cat) => (

                <option

                  key={cat}

                  value={cat}

                >

                  {cat}

                </option>

              ))

            }

          </select>

          <select

            className={styles.select}

            value={sort}

            onChange={(e) =>

              setSort(e.target.value)

            }

          >

            <option value="default">

              Sort By

            </option>

            <option value="priceLow">

              Price : Low → High

            </option>

            <option value="priceHigh">

              Price : High → Low

            </option>

            <option value="rating">

              Highest Rated

            </option>

            <option value="name">

              A → Z

            </option>

          </select>

        </div>

      </div>

      <div className={styles.grid}>

        {

          filteredProducts.length > 0

            ?

            filteredProducts.map((product) => (

              <ProductCard

                key={product.id}

                product={product}

              />

            ))

            :

            <h2 className={styles.empty}>

              No Products Found 😔

            </h2>

        }

      </div>

    </section>

  );

}

export default Products;