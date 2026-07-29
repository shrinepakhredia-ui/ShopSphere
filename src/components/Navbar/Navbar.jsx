import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaShoppingCart,
  FaHeart,
  FaMoon,
  FaSun,
  FaSignOutAlt,
  FaUser,
  FaUserCircle,
  FaChevronDown,
  FaBoxOpen,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { toast } from "react-toastify";

import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";

import styles from "./Navbar.module.css";

function Navbar() {

  const [showMenu, setShowMenu] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);

  const { totalItems } = useCart();

  const { wishlistItems } = useWishlist();

  const { theme, toggleTheme } = useTheme();

  const { currentUser, logout } = useAuth();

  async function handleLogout() {

    try {

      await logout();

      toast.success("Logged Out Successfully 👋");

      setShowMenu(false);

      setMobileMenu(false);

    }

    catch {

      toast.error("Something went wrong!");

    }

  }

  return (

    <nav className={styles.navbar}>

      {/* Left */}

      <div className={styles.leftSection}>

        <button
          className={styles.menuBtn}
          onClick={() => setMobileMenu(true)}
        >

          <FaBars />

        </button>

        <div className={styles.logo}>

          <Link to="/">🛒 ShopSphere</Link>

        </div>

      </div>

      {/* Mobile Drawer */}

      <div
        className={`${styles.mobileMenu} ${mobileMenu ? styles.showMenu : ""}`}
      >

        <div className={styles.mobileHeader}>

          <h2>Menu</h2>

          <button
            onClick={() => setMobileMenu(false)}
            className={styles.closeBtn}
          >

            <FaTimes />

          </button>

        </div>

        <Link
          to="/"
          onClick={() => setMobileMenu(false)}
        >

          Home

        </Link>

        <Link
          to="/products"
          onClick={() => setMobileMenu(false)}
        >

          Products

        </Link>

        <Link
          to="/about"
          onClick={() => setMobileMenu(false)}
        >

          About Us

        </Link>

        <Link
          to="/faqs"
          onClick={() => setMobileMenu(false)}
        >

          FAQs

        </Link>

        <Link
          to="/shipping"
          onClick={() => setMobileMenu(false)}
        >

          Shipping Policy

        </Link>

        <Link
          to="/returns"
          onClick={() => setMobileMenu(false)}
        >

          Returns Policy

        </Link>

      </div>

      {mobileMenu && (

        <div
          className={styles.overlay}
          onClick={() => setMobileMenu(false)}
        />

      )}

      {/* Right */}

      <ul className={styles.navLinks}>

        <li className={styles.desktopLink}>

          <Link to="/">Home</Link>

        </li>

        <li className={styles.desktopLink}>

          <Link to="/products">Products</Link>

        </li>

        <li>

          <Link
            to="/wishlist"
            className={styles.iconLink}
          >

            <FaHeart />

            {wishlistItems.length > 0 && (

              <span className={styles.badge}>

                {wishlistItems.length}

              </span>

            )}

          </Link>

        </li>

        <li>

          <Link
            to="/cart"
            className={styles.iconLink}
          >

            <FaShoppingCart />

            {totalItems > 0 && (

              <span className={styles.badge}>

                {totalItems}

              </span>

            )}

          </Link>

        </li>

        <li>

          <button
            className={styles.themeBtn}
            onClick={toggleTheme}
          >

            {theme === "light"
              ? <FaMoon />
              : <FaSun />}

          </button>

        </li>

        {

          !currentUser ?

            (

              <li>

                <Link to="/login">

                  <FaUser />

                </Link>

              </li>

            )

            :

            (

              <li className={styles.profileContainer}>

                <button
                  className={styles.profileBtn}
                  onClick={() => setShowMenu(!showMenu)}
                >

                  {

                    currentUser.photoURL ?

                      (

                        <img
                          src={currentUser.photoURL}
                          alt="profile"
                          className={styles.avatar}
                        />

                      )

                      :

                      (

                        <FaUserCircle />

                      )

                  }

                  <FaChevronDown />

                </button>

                {

                  showMenu && (

                    <div className={styles.dropdown}>

                      <h4>

                        {

                          currentUser.displayName ||

                          "ShopSphere User"

                        }

                      </h4>

                      <p>

                        {currentUser.email}

                      </p>

                      <hr />

                      <Link
                        to="/profile"
                        onClick={() => setShowMenu(false)}
                      >

                        <FaUser />

                        My Profile

                      </Link>

                      <Link
                        to="/wishlist"
                        onClick={() => setShowMenu(false)}
                      >

                        <FaHeart />

                        Wishlist

                      </Link>

                      <Link
                        to="/cart"
                        onClick={() => setShowMenu(false)}
                      >

                        <FaShoppingCart />

                        Cart

                      </Link>

                      <Link
                        to="/orders"
                        onClick={() => setShowMenu(false)}
                      >

                        <FaBoxOpen />

                        My Orders

                      </Link>

                      <button onClick={handleLogout}>

                        <FaSignOutAlt />

                        Logout

                      </button>

                    </div>

                  )

                }

              </li>

            )

        }

      </ul>

    </nav>

  );

}

export default Navbar;