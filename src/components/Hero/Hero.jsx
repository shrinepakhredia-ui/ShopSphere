import { Link } from "react-router-dom";

import styles from "./Hero.module.css";
import heroImage from "../../assets/hero.png";

function Hero() {

  return (

    <section className={styles.hero}>

      <div className={styles.left}>

        <span className={styles.badge}>

          🔥 New Collection 2026

        </span>

        <h1>

          Shop Smart.
          <br />
          Live Better.

        </h1>

        <p>

          Discover premium gadgets, accessories and everyday essentials
          at unbeatable prices. Experience fast delivery, secure payments
          and trusted quality only at <strong>ShopSphere</strong>.

        </p>

        <div className={styles.buttons}>

          <Link
            to="/cart"
            className={styles.shopBtn}
          >

            Shop Now

          </Link>

          <Link
            to="/products"
            className={styles.learnBtn}
          >

            Explore

          </Link>

        </div>

        <div className={styles.features}>

          <div>🚚 Free Shipping</div>

          <div>🔒 Secure Payment</div>

          <div>↩ Easy Returns</div>

          <div>⭐ Premium Quality</div>

        </div>

      </div>

      <div className={styles.right}>

        <img
          src={heroImage}
          alt="ShopSphere Hero"
        />

      </div>

    </section>

  );

}

export default Hero;