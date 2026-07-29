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

  const [showProfile, setShowProfile] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);

  const { totalItems } = useCart();

  const { wishlistItems } = useWishlist();

  const { theme, toggleTheme } = useTheme();

  const { currentUser, logout } = useAuth();

  async function handleLogout() {

    try {

      await logout();

      toast.success("Logged Out Successfully 👋");

      setShowProfile(false);

      setMobileMenu(false);

    }

    catch {

      toast.error("Something went wrong!");

    }

  }

  function closeEverything(){

    setShowProfile(false);

    setMobileMenu(false);

  }

  return(

    <>

    <nav className={styles.navbar}>

      {/* LEFT */}

      <div className={styles.leftSection}>

        <button

          className={styles.menuBtn}

          onClick={()=>setMobileMenu(!mobileMenu)}

        >

          {

            mobileMenu

            ?

            <FaTimes/>

            :

            <FaBars/>

          }

        </button>

        <div className={styles.logo}>

          <Link to="/" onClick={closeEverything}>

            🛒 ShopSphere

          </Link>

        </div>

      </div>

      {/* RIGHT */}

      <ul className={styles.navLinks}>

        <li className={styles.desktopOnly}>

          <Link to="/">Home</Link>

        </li>

        <li className={styles.desktopOnly}>

          <Link to="/products">Products</Link>

        </li>

        <li>

          <Link

            to="/wishlist"

            className={styles.iconLink}

          >

            <FaHeart/>

            {

              wishlistItems.length>0 &&

              <span className={styles.badge}>

                {wishlistItems.length}

              </span>

            }

          </Link>

        </li>

        <li>

          <Link

            to="/cart"

            className={styles.iconLink}

          >

            <FaShoppingCart/>

            {

              totalItems>0 &&

              <span className={styles.badge}>

                {totalItems}

              </span>

            }

          </Link>

        </li>

        <li>

          <button

            className={styles.themeBtn}

            onClick={toggleTheme}

          >

            {

              theme==="light"

              ?

              <FaMoon/>

              :

              <FaSun/>

            }

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

                onClick={() => setShowProfile(!showProfile)}

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

                showProfile &&

                (

                  <div className={styles.dropdown}>

                    <h4>

                      {

                        currentUser.displayName ||

                        "ShopSphere User"

                      }

                    </h4>

                    <p>{currentUser.email}</p>

                    <hr />

                    <Link

                      to="/profile"

                      onClick={() => setShowProfile(false)}

                    >

                      <FaUser />

                      My Profile

                    </Link>

                    <Link

                      to="/wishlist"

                      onClick={() => setShowProfile(false)}

                    >

                      <FaHeart />

                      Wishlist

                    </Link>

                    <Link

                      to="/cart"

                      onClick={() => setShowProfile(false)}

                    >

                      <FaShoppingCart />

                      Cart

                    </Link>

                    <Link

                      to="/orders"

                      onClick={() => setShowProfile(false)}

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

    {mobileMenu && (
      <div className={styles.mobileLinks}>

        <Link to="/" onClick={closeEverything}>
          🏠 Home
        </Link>

        <Link to="/products" onClick={closeEverything}>
          🛍 Products
        </Link>

        <Link to="/wishlist" onClick={closeEverything}>
          ❤️ Wishlist
          {wishlistItems.length > 0 && (
            <span className={styles.badge}>
              {wishlistItems.length}
            </span>
          )}
        </Link>

        <Link to="/cart" onClick={closeEverything}>
          🛒 Cart
          {totalItems > 0 && (
            <span className={styles.badge}>
              {totalItems}
            </span>
          )}
        </Link>

        <button
          className={styles.mobileThemeBtn}
          onClick={toggleTheme}
        >
          {theme === "light" ? (
            <>
              <FaMoon /> Dark Mode
            </>
          ) : (
            <>
              <FaSun /> Light Mode
            </>
          )}
        </button>

        {!currentUser ? (
          <Link to="/login" onClick={closeEverything}>
            👤 Login
          </Link>
        ) : (
          <Link to="/profile" onClick={closeEverything}>
            👤 Profile
          </Link>
        )}

      </div>
    )}

    </>

  );

}

export default Navbar;