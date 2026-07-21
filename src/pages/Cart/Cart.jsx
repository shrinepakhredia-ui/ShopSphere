import { useNavigate } from "react-router-dom";

import styles from "./Cart.module.css";

import { FaTrash } from "react-icons/fa";

import { useCart } from "../../context/CartContext";

function Cart() {

  const navigate = useNavigate();

  const {

    cartItems,

    increaseQuantity,

    decreaseQuantity,

    removeFromCart,

    clearCart,

    totalItems,

    totalPrice,

  } = useCart();

  if (cartItems.length === 0) {

    return (

      <div className={styles.empty}>

        <h1>Your Cart is Empty 🛒</h1>

        <p>Add some amazing products.</p>

      </div>

    );

  }

  return (

    <section className={styles.container}>

      <h1>Shopping Cart</h1>

      {

        cartItems.map((item) => (

          <div
            className={styles.card}
            key={item.id}
          >

            <img
              src={item.image}
              alt={item.name}
            />

            <div className={styles.info}>

              <h2>{item.name}</h2>

              <p>{item.brand}</p>

              <h3>

                ₹ {item.price.toLocaleString()}

              </h3>

            </div>

            <div className={styles.quantity}>

              <button
                onClick={() =>
                  decreaseQuantity(item.id)
                }
              >

                -

              </button>

              <span>

                {item.quantity}

              </span>

              <button
                onClick={() =>
                  increaseQuantity(item.id)
                }
              >

                +

              </button>

            </div>

            <button

              className={styles.remove}

              onClick={() =>
                removeFromCart(item.id)
              }

            >

              <FaTrash />

            </button>

          </div>

        ))

      }

      <div className={styles.summary}>

        <h2>

          Total Items : {totalItems}

        </h2>

        <h1>

          ₹ {totalPrice.toLocaleString()}

        </h1>

        <button

          onClick={() => navigate("/checkout")}

        >

          Proceed To Checkout

        </button>

        <button

          className={styles.clear}

          onClick={clearCart}

        >

          Clear Cart

        </button>

      </div>

    </section>

  );

}

export default Cart;