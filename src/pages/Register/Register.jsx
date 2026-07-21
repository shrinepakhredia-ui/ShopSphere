import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";

import styles from "../Login/Login.module.css";

function Register() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const { register } = useAuth();

  const navigate = useNavigate();

  async function handleSubmit(e) {

    e.preventDefault();

    console.log("Name :", name);
    console.log("Email :", email);
    console.log("Password :", password);

    if (!name.trim()) {
      toast.error("Enter your name");
      return;
    }

    if (!email.trim()) {
      toast.error("Enter your email");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    try {

      setLoading(true);

      await register(name, email.trim(), password);

      toast.success("Account Created Successfully 🎉");

      navigate("/login");

    }

    catch (error) {

      console.log(error);
      console.log("Error Code :", error.code);
      console.log("Error Message :", error.message);

      switch (error.code) {

        case "auth/email-already-in-use":
          toast.error("Email already registered");
          break;

        case "auth/invalid-email":
          toast.error("Invalid Email Address");
          break;

        case "auth/weak-password":
          toast.error("Password should be at least 6 characters");
          break;

        case "auth/network-request-failed":
          toast.error("Network Error");
          break;

        default:
          toast.error(error.message);

      }

    }

    finally {

      setLoading(false);

    }

  }

  return (

    <section className={styles.login}>

      <div className={styles.card}>

        <h1>Create Account 🚀</h1>

        <p>

          Join ShopSphere and start shopping today

        </p>

        <form onSubmit={handleSubmit}>

          <div className={styles.inputBox}>

            <FaUser />

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

          </div>

          <div className={styles.inputBox}>

            <FaEnvelope />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />

          </div>

          <div className={styles.inputBox}>

            <FaLock />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              required
            />

            <button
              type="button"
              className={styles.eye}
              onClick={() => setShowPassword(!showPassword)}
            >

              {showPassword ? <FaEyeSlash /> : <FaEye />}

            </button>

          </div>

          <button
            className={styles.loginBtn}
            disabled={loading}
          >

            {loading ? "Creating Account..." : "Register"}

          </button>

        </form>

        <p className={styles.register}>

          Already have an account?

          <Link to="/login">

            Login

          </Link>

        </p>

      </div>

    </section>

  );

}

export default Register;