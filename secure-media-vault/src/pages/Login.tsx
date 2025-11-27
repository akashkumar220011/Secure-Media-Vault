import React, { useState } from "react";
import Input from "../components/Input";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import type { AppDispatch } from "../app/store";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
        navigate("/"); // ✔ Login success → Home page redirect
      })
      .catch((err) => {
        console.log("Login error:", err);
      });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl w-full max-w-sm shadow"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <Input
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg"
        >
          Login
        </button>

        <p className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
