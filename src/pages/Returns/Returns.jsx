import styles from "./Returns.module.css";

import {
  FaUndoAlt,
  FaClipboardCheck,
  FaBoxOpen,
  FaMoneyBillWave,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

function Returns() {

  return (

    <section className={styles.returns}>

      <div className={styles.header}>

        <span>🔄 Easy Returns</span>

        <h1>Return & Refund Policy</h1>

        <p>
          We want you to shop with confidence. If you're not completely
          satisfied with your purchase, we're here to help with a simple
          and transparent return process.
        </p>

      </div>

      <div className={styles.grid}>

        <div className={styles.card}>

          <FaClipboardCheck className={styles.icon} />

          <h2>Return Eligibility</h2>

          <p>
            Products can be returned within
            <strong> 7 days </strong>
            of delivery if they are damaged,
            defective or incorrect.
          </p>

        </div>

        <div className={styles.card}>

          <FaBoxOpen className={styles.icon} />

          <h2>Product Condition</h2>

          <p>
            Items must be unused, in their original packaging
            and include all accessories,
            manuals and invoices.
          </p>

        </div>

        <div className={styles.card}>

          <FaUndoAlt className={styles.icon} />

          <h2>Easy Pickup</h2>

          <p>
            Once your return request is approved,
            our delivery partner will arrange
            a doorstep pickup whenever possible.
          </p>

        </div>

        <div className={styles.card}>

          <FaMoneyBillWave className={styles.icon} />

          <h2>Refund Process</h2>

          <p>
            Refunds are processed within
            <strong> 5–7 business days </strong>
            after the returned item passes
            quality inspection.
          </p>

        </div>

      </div>

      <div className={styles.rules}>

        <div className={styles.ruleCard}>

          <h2>

            <FaCheckCircle />

            Eligible Returns

          </h2>

          <ul>

            <li>Damaged product received</li>

            <li>Wrong item delivered</li>

            <li>Manufacturing defects</li>

            <li>Missing accessories</li>

          </ul>

        </div>

        <div className={styles.ruleCard}>

          <h2>

            <FaTimesCircle />

            Non-Returnable Items

          </h2>

          <ul>

            <li>Products damaged by misuse</li>

            <li>Items without original packaging</li>

            <li>Products returned after 7 days</li>

            <li>Customized or personalized products</li>

          </ul>

        </div>

      </div>

    </section>

  );

}

export default Returns;