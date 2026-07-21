import styles from "./ProductCard.module.css";

import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

function ProductCard({ product }) {

  const { addToCart } = useCart();

  const {
    wishlistItems,
    toggleWishlist,
  } = useWishlist();

  const isWishlisted = wishlistItems.some(
    (item) => item.id === product.id
  );

  return (

    <Link
      to={`/product/${product.id}`}
      className={styles.link}
    >

      <div className={styles.card}>

        <div className={styles.imageContainer}>

          <img
            src={product.image}
            alt={product.name}
          />

        </div>

        <h3>{product.name}</h3>

        <p className={styles.brand}>

          {product.brand}

        </p>

        <div className={styles.rating}>

          <FaStar />

          <span>{product.rating}</span>

        </div>

        <h2>

          ₹ {product.price.toLocaleString()}

        </h2>

        <div className={styles.buttons}>

          <button

            className={styles.wishlistBtn}

            onClick={(e) => {

              e.preventDefault();

              toggleWishlist(product);

            }}

          >

            {

              isWishlisted

                ?

                <FaHeart />

                :

                <FaRegHeart />

            }

          </button>

          <button

            className={styles.cartBtn}

            onClick={(e) => {

              e.preventDefault();

              addToCart(product);

            }}

          >

            <FaShoppingCart />

          </button>

        </div>

      </div>

    </Link>

  );

}

export default ProductCard;