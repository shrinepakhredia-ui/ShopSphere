import styles from "./Wishlist.module.css";

import { FaHeart, FaShoppingCart, FaTrash } from "react-icons/fa";

import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";

function Wishlist() {

  const {

    wishlistItems,

    removeFromWishlist,

    clearWishlist,

  } = useWishlist();

  const { addToCart } = useCart();

  if (wishlistItems.length === 0) {

    return (

      <div className={styles.empty}>

        <FaHeart className={styles.emptyIcon} />

        <h1>Your Wishlist is Empty</h1>

        <p>Save your favourite products here ❤️</p>

      </div>

    );

  }

  return (

    <section className={styles.container}>

      <div className={styles.header}>

        <h1>My Wishlist ❤️</h1>

        <button

          className={styles.clearBtn}

          onClick={clearWishlist}

        >

          Clear Wishlist

        </button>

      </div>

      <div className={styles.grid}>

        {wishlistItems.map((product) => (

          <div

            key={product.id}

            className={styles.card}

          >

            <img

              src={product.image}

              alt={product.name}

            />

            <h3>{product.name}</h3>

            <p>{product.brand}</p>

            <h2>

              ₹ {product.price.toLocaleString()}

            </h2>

            <div className={styles.buttons}>

              <button

                className={styles.cartBtn}

                onClick={() => addToCart(product)}

              >

                <FaShoppingCart />

              </button>

              <button

                className={styles.removeBtn}

                onClick={() => removeFromWishlist(product.id)}

              >

                <FaTrash />

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Wishlist;