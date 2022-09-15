import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLoginForm.css";
import { auth, currentUser, signInWithEmailAndPassword } from "../firebase";

function AdminLoginForm() {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const submitButtonHandler = async (e) => {
    // Handling of success login and error
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, username, password);
      navigate('/dashboard');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form>
      <div className="login_container">
        <div className="input_section">
          <h3>UserID</h3>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type={Text}
            required
          />
        </div>
        <div className="input_section">
          <h3>Password</h3>
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            type={Text}
            required
          />
        </div>
        <button
          className="admin"
          disabled={!(username.length > 0 && password.length > 0)}
          type="submit"
          onClick={submitButtonHandler}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default AdminLoginForm;
