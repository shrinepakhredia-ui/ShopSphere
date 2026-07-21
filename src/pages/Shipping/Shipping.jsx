import styles from "./Shipping.module.css";

import {
  FaTruck,
  FaBoxOpen,
  FaMapMarkedAlt,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";

function Shipping() {

  return (

    <section className={styles.shipping}>

      <div className={styles.header}>

        <span>🚚 Shipping Information</span>

        <h1>Shipping Policy</h1>

        <p>
          We aim to deliver every order quickly, safely and securely.
          Below you'll find everything you need to know about shipping
          with ShopSphere.
        </p>

      </div>

      <div className={styles.grid}>

        <div className={styles.card}>

          <FaTruck className={styles.icon} />

          <h2>Fast Delivery</h2>

          <p>
            Orders are usually processed within
            <strong> 24 hours </strong>
            and delivered within
            <strong> 3–7 business days</strong>,
            depending on your location.
          </p>

        </div>

        <div className={styles.card}>

          <FaMapMarkedAlt className={styles.icon} />

          <h2>Delivery Coverage</h2>

          <p>
            We currently deliver across most major cities and towns
            throughout India using trusted logistics partners.
          </p>

        </div>

        <div className={styles.card}>

          <FaBoxOpen className={styles.icon} />

          <h2>Order Processing</h2>

          <p>
            Every order is carefully verified, packed and quality checked
            before it leaves our warehouse.
          </p>

        </div>

        <div className={styles.card}>

          <FaClock className={styles.icon} />

          <h2>Tracking Orders</h2>

          <p>
            Once your order has been shipped,
            you'll receive a tracking ID through your
            registered email.
          </p>

        </div>

        <div className={styles.card}>

          <FaShieldAlt className={styles.icon} />

          <h2>Secure Packaging</h2>

          <p>
            Every product is packed using protective materials
            to ensure it reaches you safely and in perfect condition.
          </p>

        </div>

        <div className={styles.card}>

          <FaTruck className={styles.icon} />

          <h2>Shipping Charges</h2>

          <p>
            ShopSphere provides
            <strong> FREE Shipping </strong>
            on all eligible orders.
            No hidden delivery charges.
          </p>

        </div>

      </div>

    </section>

  );

}

export default Shipping;