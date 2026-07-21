import { useParams, Link } from "react-router-dom";
import { useState } from "react";

import styles from "./ProductDetails.module.css";
import products from "../../data/products";

import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";

import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

import {
    FaHeart,
    FaRegHeart,
    FaShoppingCart,
    FaStar,
    FaTruck,
    FaShieldAlt,
    FaArrowLeft,
} from "react-icons/fa";

    function ProductDetails() {

    const { id } = useParams();

    const product = products.find(
    (item) => item.id === Number(id)
    );

    const [quantity, setQuantity] = useState(1);

    const { addToCart } = useCart();

    const {
    wishlistItems,
    toggleWishlist,
    } = useWishlist();

  // Product na mile to pehle return
    if (!product) {

    return (

        <section className={styles.notFound}>

        <h1>Product Not Found</h1>

        <Link to="/products">

            Go Back

        </Link>

        </section>

    );

    }

  // Ab product available hai
    const isWishlisted = wishlistItems.some(
    (item) => item.id === product.id
    );

    return (

        <>
        <section className={styles.container}>

        {/* LEFT */}

        <div className={styles.imageSection}>

            <img
            src={product.image}
            alt={product.name}
            />

        </div>

        {/* RIGHT */}

        <div className={styles.details}>

            <p className={styles.brand}>
            {product.brand}
            </p>

            <h1>{product.name}</h1>

            <div className={styles.rating}>

            <FaStar />

            <span>{product.rating}</span>

            </div>

            <h2>
            ₹ {product.price.toLocaleString()}
            </h2>

            <p className={styles.stock}>

            {product.stock
                ? "✅ In Stock"
                : "❌ Out of Stock"}

            </p>

            <p className={styles.description}>
            {product.description}
            </p>

            {/* EXTRA INFO */}

            <div className={styles.features}>

            <div>

                <FaTruck />

                <span>Free Delivery</span>

            </div>

            <div>

                <FaShieldAlt />

                <span>1 Year Warranty</span>

            </div>

            </div>

            {/* QUANTITY */}

            <div className={styles.quantitySection}>

            <h3>Quantity</h3>

            <div className={styles.quantity}>

                <button
                onClick={() =>
                    quantity > 1 &&
                    setQuantity(quantity - 1)
                }
                >
                -
                </button>

                <span>{quantity}</span>

                <button
                onClick={() =>
                    setQuantity(quantity + 1)
                }
                >
                +
                </button>

            </div>

            </div>

            {/* BUTTONS */}

            <div className={styles.buttons}>

            <button

                className={styles.cartBtn}

                onClick={() =>
                addToCart(product)
                }
            >

                <FaShoppingCart />

                Add to Cart

            </button>

            <button

            className={styles.wishlistBtn}

            onClick={()=>toggleWishlist(product)}

            >

            {

            isWishlisted

            ?

            <FaHeart/>

            :

            <FaRegHeart/>

            }

            </button>

            </div>

            {/* BACK */}

            <Link
            to="/products"
            className={styles.back}
            >

            <FaArrowLeft />

            Continue Shopping

            </Link>

        </div>

        </section>
        <RelatedProducts
            currentProduct={product}
            />

            </>
    );
    }

export default ProductDetails;