import styles from "./Newsletter.module.css";
import { FaPaperPlane } from "react-icons/fa";

function Newsletter() {
  return (
    <section className={styles.newsletter}>

      <div className={styles.container}>

        <h2>Stay Updated</h2>

        <p>
          Subscribe to our newsletter and be the first to know about
          exclusive offers, new arrivals, and exciting deals.
        </p>

        <form className={styles.form}>

          <input
            type="email"
            placeholder="Enter your email address"
          />

          <button type="submit">
            <FaPaperPlane />
            Subscribe
          </button>

        </form>

      </div>

    </section>
  );
}

export default Newsletter;