function Login() {
  return (
    <form className="mt-20 mx-auto max-w-sm p-6 bg-cyan-500 border-4 border-red-200 rounded-lg text-white font-serif">
      <div className="grid gap-4">
        <h1 className="text-3xl text-center">Login Page</h1>
        
        <div className="grid gap-2">
          <label className="text-lg">Email:</label>
          <input
            type="email"
            placeholder="Enter your Email"
            className="p-2 rounded text-black"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-lg">Password:</label>
          <input
            type="password"
            placeholder="Enter your Password"
            className="p-2 rounded text-black"
          />
        </div>

        <div className="bg-slate-500 rounded text-center py-2">
          <input
            type="submit"
            value="Submit"
            className="text-white cursor-pointer "
          />
        </div>

        <div className="text-center text-lg mt-2">
          Don't have an account? <a href="./signup" className="text-blue-600">Sign Up</a>
        </div>
      </div>
    </form>
  );
}

export default Login;