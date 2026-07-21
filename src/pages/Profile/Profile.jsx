import {
  FaUserCircle,
  FaEnvelope,
  FaCheckCircle,
  FaCalendarAlt,
  FaSignOutAlt,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { useAuth } from "../../context/AuthContext";

import styles from "./Profile.module.css";

function Profile() {

  const { currentUser, logout } = useAuth();

  const navigate = useNavigate();

  async function handleLogout() {

    try {

      await logout();

      toast.success("Logged Out Successfully 👋");

      navigate("/login");

    }

    catch {

      toast.error("Something went wrong!");

    }

  }

  return (

    <section className={styles.profile}>

      <div className={styles.card}>

        {

          currentUser?.photoURL ?

          <img
            src={currentUser.photoURL}
            alt="Profile"
            className={styles.image}
          />

          :

          <FaUserCircle className={styles.avatar}/>

        }

        <h2>

          {

            currentUser?.displayName ||

            "ShopSphere User"

          }

        </h2>

        <p className={styles.email}>

          <FaEnvelope />

          {currentUser?.email}

        </p>

        <div className={styles.status}>

          <FaCheckCircle />

          {

            currentUser?.emailVerified

            ?

            "Verified Account"

            :

            "Email Verified"

          }

        </div>

        <div className={styles.info}>

          <div>

            <FaCalendarAlt />

            <span>

              Joined ShopSphere

            </span>

          </div>

          <div>

            <strong>UID</strong>

            <span>

              {currentUser?.uid.slice(0,12)}...

            </span>

          </div>

        </div>

        <button

          className={styles.logoutBtn}

          onClick={handleLogout}

        >

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </section>

  );

}

export default Profile;