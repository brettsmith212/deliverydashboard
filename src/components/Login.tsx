import React, { useState } from "react";
import { supabase } from "../supabaseClient";

const Login: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const { user, session, error } = await supabase.auth.signIn({
        email: values.email,
        password: values.password,
      });
      console.log("USER: ", user);
      console.log("SESSION: ", session);

      if (error) throw error;
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center bg-gray-200 text-slate-700 pb-64">
      <div className="flex flex-col items-center gap-8 p-8 border-2">
        <h2 className="text-6xl font-semibold">Log In</h2>
        <div className="bg-white p-4 rounded-md shadow-lg w-96">
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <label className="flex flex-col text-lg">
              Email Address
              <input
                className="border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </label>
            <label className="flex flex-col text-lg">
              Password
              <input
                className="border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
            </label>
            <button
              disabled={loading}
              className="bg-blue-900 text-white px-2 py-3 rounded-md hover:bg-blue-500"
            >
              {loading ? <span>Loading</span> : <span>Login</span>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
