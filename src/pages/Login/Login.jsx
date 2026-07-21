import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
} from "react-icons/fa";

import { toast } from "react-toastify";

import { useAuth } from "../../context/AuthContext";

import styles from "./Login.module.css";

function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const {

    login,

    googleLogin,

    resetPassword,

  } = useAuth();

  const navigate = useNavigate();

  // Email Login

  async function handleSubmit(e) {

    e.preventDefault();

    try {

      setLoading(true);

      await login(email, password);

      toast.success("Welcome Back 🎉");

      navigate("/");

    }

    catch (error) {

      switch (error.code) {

        case "auth/invalid-credential":

          toast.error("Invalid Email or Password");

          break;

        case "auth/user-not-found":

          toast.error("User not found");

          break;

        case "auth/wrong-password":

          toast.error("Wrong Password");

          break;

        case "auth/invalid-email":

          toast.error("Invalid Email");

          break;

        default:

          toast.error(error.message);

      }

    }

    finally {

      setLoading(false);

    }

  }

  // Google Login

  async function handleGoogleLogin() {

    try {

      await googleLogin();

      toast.success("Google Login Successful 🎉");

      navigate("/");

    }

    catch (error) {

      toast.error(error.message);

    }

  }

  // Forgot Password

  async function handleForgotPassword() {

    if (!email) {

      toast.error("Please enter your email first.");

      return;

    }

    try {

      await resetPassword(email);

      toast.success("Password reset email sent 📧");

    }

    catch (error) {

      toast.error(error.message);

    }

  }

  return (

    <section className={styles.login}>

      <div className={styles.card}>

        <h1>Welcome Back 👋</h1>

        <p>

          Login to continue shopping at ShopSphere

        </p>

        <form onSubmit={handleSubmit}>

          <div className={styles.inputBox}>

            <FaEnvelope />

            <input

              type="email"

              placeholder="Email Address"

              value={email}

              onChange={(e)=>setEmail(e.target.value)}

              required

            />

          </div>

          <div className={styles.inputBox}>

            <FaLock />

            <input

              type={showPassword ? "text" : "password"}

              placeholder="Password"

              value={password}

              onChange={(e)=>setPassword(e.target.value)}

              required

            />

            <button

              type="button"

              className={styles.eye}

              onClick={()=>setShowPassword(!showPassword)}

            >

              {

                showPassword

                ?

                <FaEyeSlash/>

                :

                <FaEye/>

              }

            </button>

          </div>

          <div className={styles.options}>

            <label>

              <input type="checkbox"/>

              Remember Me

            </label>

            <button

              type="button"

              className={styles.forgotBtn}

              onClick={handleForgotPassword}

            >

              Forgot Password?

            </button>

          </div>

          <button

            className={styles.loginBtn}

            disabled={loading}

          >

            {

              loading

              ?

              "Logging In..."

              :

              "Login"

            }

          </button>

        </form>

        <div className={styles.divider}>

          OR

        </div>

        <button

          className={styles.googleBtn}

          onClick={handleGoogleLogin}

        >

          <FaGoogle/>

          Continue with Google

        </button>

        <p className={styles.register}>

          Don't have an account?

          <Link to="/register">

            Register

          </Link>

        </p>

      </div>

    </section>

  );

}

export default Login;