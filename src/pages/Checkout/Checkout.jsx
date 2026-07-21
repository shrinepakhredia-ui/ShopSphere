import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

import { placeOrder } from "../../services/orderService";

import styles from "./Checkout.module.css";

function Checkout() {

  const navigate = useNavigate();

  const { currentUser } = useAuth();

  const {

    cartItems,

    totalPrice,

    clearCart,

  } = useCart();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({

    name: currentUser?.displayName || "",

    email: currentUser?.email || "",

    phone: "",

    address: "",

    payment: "Cash On Delivery",

  });

  const tax = Math.round(totalPrice * 0.18);

  const finalTotal = totalPrice + tax;

  function handleChange(e) {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  }

  async function handleSubmit(e) {

    e.preventDefault();

    if (cartItems.length === 0) {

      toast.warning("Cart is Empty");

      return;

    }

    try {

      setLoading(true);

      await placeOrder({

        uid: currentUser.uid,

        name: formData.name,

        email: formData.email,

        phone: formData.phone,

        address: formData.address,

        payment: formData.payment,

        items: cartItems,

        total: finalTotal,

      });

      await clearCart();

      toast.success("Order Placed Successfully 🎉");

      navigate("/orders");

    }

    catch (error) {

      console.log(error);

      toast.error("Failed to Place Order");

    }

    finally {

      setLoading(false);

    }

  }

  return (

    <section className={styles.checkout}>

      <div className={styles.container}>

        <div className={styles.left}>

          <h1>Checkout 🛍</h1>

          <form onSubmit={handleSubmit}>

            <input

              type="text"

              name="name"

              placeholder="Full Name"

              value={formData.name}

              onChange={handleChange}

              required

            />

            <input

              type="email"

              name="email"

              placeholder="Email"

              value={formData.email}

              onChange={handleChange}

              required

            />

            <input

              type="tel"

              name="phone"

              placeholder="Phone Number"

              value={formData.phone}

              onChange={handleChange}

              required

            />

            <textarea

              rows="4"

              name="address"

              placeholder="Shipping Address"

              value={formData.address}

              onChange={handleChange}

              required

            />

            <select

              name="payment"

              value={formData.payment}

              onChange={handleChange}

            >

              <option>Cash On Delivery</option>

              <option>UPI</option>

              <option>Credit / Debit Card</option>

            </select>

            <button disabled={loading}>

              {

                loading

                ?

                "Placing Order..."

                :

                "Place Order"

              }

            </button>

          </form>

        </div>

        <div className={styles.right}>

          <h2>Order Summary</h2>

          <div className={styles.box}>

            <div>

              <span>Items</span>

              <span>{cartItems.length}</span>

            </div>

            <div>

              <span>Subtotal</span>

              <span>₹ {totalPrice.toLocaleString()}</span>

            </div>

            <div>

              <span>Shipping</span>

              <span>Free</span>

            </div>

            <div>

              <span>GST (18%)</span>

              <span>₹ {tax.toLocaleString()}</span>

            </div>

            <hr />

            <div className={styles.total}>

              <span>Total</span>

              <span>₹ {finalTotal.toLocaleString()}</span>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Checkout;