function SignUp() {
  return (
    <form className="mt-20 mx-auto max-w-md p-6 bg-cyan-500 border-4 border-red-200 rounded-lg text-white font-serif">
      <div className="grid gap-4">
        <h1 className="text-3xl text-center">Signup Page</h1>

        <div className="grid gap-2">
          <label className="text-lg">Name:</label>
          <input
            type="text"
            placeholder="Enter your Name"
            className="p-2 rounded text-black"
          />
        </div>

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

        <div className="grid gap-2">
          <label className="text-lg">Confirm Password:</label>
          <input
            type="password"
            placeholder="Confirm your Password"
            className="p-2 rounded text-black"
          />
        </div>

        <div className="flex justify-between  rounded py-2 lg:py-4 grid grid-cols-2 gap-4">
     <input
    type="submit"
    value="Submit"
    className="text-white cursor-pointer bg-slate-500 rounded  py-2"
  />
  <input
    type="reset"
    value="Reset"
    className="text-white cursor-pointer bg-slate-500 rounded  py-2"
  />
</div>


        <div className="text-center text-lg mt-2">
          Already have an account? <a href="./login" className="text-blue-600">Sign In</a>
        </div>
      </div>
    </form>
  );
}

export default SignUp;
