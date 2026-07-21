import styles from "./RelatedProducts.module.css";

import ProductCard from "../ProductCard/ProductCard";

import products from "../../data/products";

function RelatedProducts({ currentProduct }) {

  const relatedProducts = products.filter(
    (item) =>
      item.category === currentProduct.category &&
      item.id !== currentProduct.id
  );

  if (relatedProducts.length === 0) {
    return null;
  }

  return (

    <section className={styles.section}>

      <h2>Related Products</h2>

      <div className={styles.grid}>

        {relatedProducts.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </section>

  );

}

export default RelatedProducts;