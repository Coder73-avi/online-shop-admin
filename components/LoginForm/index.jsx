import React, { useState } from "react";
import css from "./style.module.css";
import Image from "next/image";

// components

// images
import logo from "images/logo.png";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginAdmin = (e) => {
    try {
      e.preventDefault();
      const obj = { email, password };
    } catch (error) {
      alert("Your not Admin");
    }
  };

  return (
    <div className={css.container}>
      <div className="grid md:grid-cols-2 p-4 w-full lg:w-[90%]">
        {/* logo */}
        <div className="flex flex-col justify-center items-center p-20">
          <div className="relative h-40 w-60">
            <Image
              src={logo}
              alt="ower-logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        {/* login form */}
        <form method="post" className={css.form} onSubmit={LoginAdmin}>
          <h1 className={css.form__heading}>Welcome</h1>
          <h3 className={css.form__subheading}>
            Please login to admin dashboard
          </h3>

          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            autoComplete="off"
          />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
