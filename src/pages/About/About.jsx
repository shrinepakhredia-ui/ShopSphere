import styles from "./About.module.css";

import {
  FaLaptopCode,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaShoppingBag,
  FaShieldAlt,
  FaTruck,
  FaRocket,
  FaUserGraduate,
} from "react-icons/fa";

function About() {
  return (
    <section className={styles.about}>

      <div className={styles.hero}>

        <span className={styles.badge}>
          🚀 About ShopSphere
        </span>

        <h1>
          Modern E-Commerce Experience
        </h1>

        <p>
          ShopSphere is a modern full-stack e-commerce platform developed
          to provide a clean shopping experience with authentication,
          wishlist, cart management and secure order placement.
          The project focuses on both beautiful UI design and real-world
          functionality.
        </p>

      </div>

      <div className={styles.grid}>

        <div className={styles.card}>

          <FaShoppingBag className={styles.icon} />

          <h2>Our Mission</h2>

          <p>
            Deliver a fast, responsive and user-friendly shopping
            experience while keeping the interface clean,
            modern and simple.
          </p>

        </div>

        <div className={styles.card}>

          <FaShieldAlt className={styles.icon} />

          <h2>Secure Shopping</h2>

          <p>
            Firebase Authentication keeps user accounts secure while
            Firestore stores wishlist, cart and order information safely.
          </p>

        </div>

        <div className={styles.card}>

          <FaTruck className={styles.icon} />

          <h2>Fast Experience</h2>

          <p>
            Optimized React components, reusable architecture and
            responsive layouts ensure a smooth shopping journey.
          </p>

        </div>

      </div>

      <div className={styles.section}>

        <h2>💻 Technologies Used</h2>

        <div className={styles.techGrid}>

          <div className={styles.tech}>
            <FaReact />
            <span>React JS</span>
          </div>

          <div className={styles.tech}>
            <FaNodeJs />
            <span>JavaScript</span>
          </div>

          <div className={styles.tech}>
            <FaDatabase />
            <span>Firebase</span>
          </div>

          <div className={styles.tech}>
            <FaLaptopCode />
            <span>CSS Modules</span>
          </div>

          <div className={styles.tech}>
            <FaGithub />
            <span>Git & GitHub</span>
          </div>

        </div>

      </div>

      <div className={styles.section}>

        <h2>✨ Features</h2>

        <div className={styles.features}>

          <div>✅ User Authentication</div>

          <div>✅ Dark / Light Theme</div>

          <div>✅ Product Search</div>

          <div>✅ Category Filter</div>

          <div>✅ Wishlist</div>

          <div>✅ Shopping Cart</div>

          <div>✅ Checkout System</div>

          <div>✅ Order History</div>

          <div>✅ Responsive UI</div>

          <div>✅ Product Details Page</div>

        </div>

      </div>

      <div className={styles.creator}>

        <FaUserGraduate className={styles.creatorIcon} />

        <h2>Developed By</h2>

        <h3>Shrine Pakhredia</h3>

        <p>
          B.Tech Artificial Intelligence & Machine Learning Student
        </p>

        <p>
          Interested in Artificial Intelligence, Machine Learning, and building projects that combine intelligent systems with practical applications.
        </p>

      </div>

      <div className={styles.bottom}>

        <FaRocket />

        <p>
          Thank you for visiting ShopSphere ❤️
          <br />
          We hope you enjoy exploring this project.
        </p>

      </div>

    </section>
  );
}

export default About;