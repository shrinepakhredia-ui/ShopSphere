import styles from "./Footer.module.css";

import { Link } from "react-router-dom";

import {
  FaLinkedinIn,
  FaGithub,
  FaArrowUp
} from "react-icons/fa";

function Footer() {

  return (

    <footer className={styles.footer}>

      <div className={styles.container}>

        {/* Company */}

        <div className={styles.column}>

          <h2>ShopSphere</h2>

          <p>
            Your trusted destination for premium electronics,
            gadgets and accessories at the best prices.
          </p>

        </div>

        {/* Quick Links */}

        <div className={styles.column}>

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/products">Products</Link>

          <Link to="/wishlist">Wishlist</Link>

          <Link to="/cart">Cart</Link>

        </div>

        {/* Company */}

        <div className={styles.column}>

          <h3>Company</h3>

          <Link to="/about">About Us</Link>

          <Link to="/faqs">FAQs</Link>

          <Link to="/shipping">Shipping</Link>

          <Link to="/returns">Returns</Link>

        </div>

        {/* Social */}

        <div className={styles.column}>

          <h3>Follow Us</h3>

          <div className={styles.social}>

            <a
              href="https://github.com/shrinepakhredia-ui"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/shrine-pakhredia-57a75632a/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>


          </div>

        </div>

      </div>

      <hr />

      <div className={styles.bottom}>

        <p>
          © {new Date().getFullYear()} ShopSphere. All Rights Reserved.
        </p>

        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <FaArrowUp />
        </button>

      </div>

    </footer>

  );

}

export default Footer;