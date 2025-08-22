import { useState } from "react";

function Login({ onLogin }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple authentication (replace with real authentication)
    if (
      credentials.username === "admin" &&
      credentials.password === "password"
    ) {
      onLogin(credentials.username);
    } else {
      setError("Invalid username or password");
    }
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2
            className="mt-6 text-center text-3xl font-extrabold text-gray-900 "
            style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
          >
            تسجيل الدخول إلى حسابك
          </h2>
          <p
            className="mt-2 text-center text-sm text-gray-600 "
            style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
          >
            أدخل بياناتك لتسجيل الدخول
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={credentials.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
              />
            </div>
          </div>

          {error && (
            <div className="text-red-600 text-sm text-center">{error}</div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-[#3861FB] hover:bg-[#1748f8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3861FB]"
              style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
            >
              تسجيل الدخول
            </button>
          </div>

          <div className="text-xs text-center text-gray-500">
            Demo: username: admin, password: password
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
