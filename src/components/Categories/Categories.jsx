import { useNavigate } from "react-router-dom";
import styles from "./Categories.module.css";

const categories = [
  {
    title: "Electronics",
    icon: "📱",
    value: "Electronics",
  },
  {
    title: "Laptops",
    icon: "💻",
    value: "Laptops",
  },
  {
    title: "Gaming",
    icon: "🎮",
    value: "Gaming",
  },
  {
    title: "Audio",
    icon: "🎧",
    value: "Audio",
  },
  {
    title: "Smart Watches",
    icon: "⌚",
    value: "Smart Watches",
  },
  {
    title: "Home",
    icon: "🏠",
    value: "All",
  },
];

function Categories() {

  const navigate = useNavigate();

  function handleCategory(category) {

    if (category === "All") {

      navigate("/products");

      return;

    }

    navigate(`/products?category=${encodeURIComponent(category)}`);

  }

  return (

    <section className={styles.categories}>

      <h2>Shop By Category</h2>

      <div className={styles.grid}>

        {

          categories.map((item) => (

            <div

              key={item.title}

              className={styles.card}

              onClick={() => handleCategory(item.value)}

              style={{ cursor: "pointer" }}

            >

              <span>{item.icon}</span>

              <h3>{item.title}</h3>

            </div>

          ))

        }

      </div>

    </section>

  );

}

export default Categories;