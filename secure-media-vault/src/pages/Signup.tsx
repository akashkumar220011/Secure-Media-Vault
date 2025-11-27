import React, { useState } from "react";
import Input from "../components/Input";
import { useDispatch } from "react-redux";
import { signup } from "../features/auth/authSlice";
import type { AppDispatch } from "../app/store";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(signup({ name, email, password }))
      .unwrap()
      .then(() => {
        navigate("/login"); // redirect after successful signup
      })
      .catch((err) => {
        console.log("Signup error:", err);
        alert("Signup failed");
      });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSignup}
        className="bg-white p-8 rounded-xl w-full max-w-sm shadow"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <Input label="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit" className="w-full py-2 bg-green-600 text-white rounded-lg">
          Create Account
        </button>

        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
