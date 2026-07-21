import styles from "./FeaturedProducts.module.css";

import ProductCard from "../ProductCard/ProductCard";

import products from "../../data/products";

function FeaturedProducts() {

  const featuredProducts = products.slice(0, 8);

  return (

    <section className={styles.products}>

      <div className={styles.heading}>

        <span>⭐ Best Sellers</span>

        <h2>Featured Products</h2>

        <p>
          Explore our hand-picked collection of premium gadgets,
          accessories and smart devices loved by thousands of customers.
        </p>

      </div>

      <div className={styles.grid}>

        {

          featuredProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))

        }

      </div>

    </section>

  );

}

export default FeaturedProducts;