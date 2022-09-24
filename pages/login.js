import Head from "next/head";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <>
      <Head>
        <title>Admin Login</title>
      </Head>

      <LoginForm />
    </>
  );
}
