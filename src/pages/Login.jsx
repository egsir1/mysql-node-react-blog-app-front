import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [registerUsers, setRegsiterUsers] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setRegsiterUsers((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", registerUsers);
      navigate("/login");
      console.log("🚀 ~ file: Register.jsx:20 ~ handleSubmit ~ res:", res);
    } catch (err) {
      setError(err.response.data);
      console.log(err);
    }
  };
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>
          Don't you have an account <Link to={"/register"}>Register</Link>{" "}
        </span>
      </form>
    </div>
  );
};

export default Login;
