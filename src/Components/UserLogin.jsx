import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import medicare from "../assets/medicare.jpeg";
import { useAuth } from "../auth/useAuth";
import API from "../Api/Api";

export default function UserLogin() {
  const navigate = useNavigate();
  const { setIsLoggedIn, setRole } = useAuth();

  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleUserSignIn = async () => {
    if (!emailOrMobile || !password) {
      alert("Please enter email and password.");
      return;
    }

    try {
      const response = await API.post("/api/users/login", {
        email: emailOrMobile,
        password: password,
      });

      if (response.data.success === true) {
        setIsLoggedIn(true);
        setRole("user");

        localStorage.setItem("userId", response.data.data.id);
        localStorage.setItem("userRole", "user");

        alert("Login successful");
        navigate("/doctors");
      } else {
        alert(response.data.message || "Invalid credentials");
      }
    } catch (error) {
      console.log(error);
      alert("Login failed. Please check backend.");
    }
  };

  return (
    <div className="login">
      <div className="login-header">
        <img src={medicare} alt="medicare" />
        <h2>Welcome to MEDICARE CONNECT</h2>
      </div>

      <div className="form-card">
        <p className="login-title">Welcome user! Sign in to your OCS account</p>

        <div className="field">
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            value={emailOrMobile}
            onChange={(e) => setEmailOrMobile(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="signin-btn" onClick={handleUserSignIn}>
          Sign In
        </button>

        <p className="new-user">New user?</p>

        <button className="signup-btn" onClick={() => navigate("/signup")}>
          Sign Up / Create an Account
        </button>
      </div>
    </div>
  );
}