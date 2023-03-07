const SignIn = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mt-48">Login Page</h1>
      <form className="self-center mt-2  w-1/4 h-80 text-3xl text-white flex flex-col items-center bg-black p-2 rounded-xl">
        <span>Email</span>
        <input
          type="email"
          placeholder="Your e-mail goes here!"
          className="w-full text-black text-center"
        />
        <span>Password</span>
        <input
          type="password"
          placeholder="Your password goes here!"
          className="w-full text-black text-center"
        />
        <span className="mt-2 text-base text-left hover:text-gray-400 w-full">
          Don't have an account? Click here!
        </span>
        <div className="mt-8 flex gap-4 justify-center font-bold text-2xl">
          <button className="bg-white hover:bg-gray-300 text-black  px-2 py-1 rounded-xl">
            Login
          </button>
          <button className="bg-white hover:bg-gray-300 text-black px-2 py-1 rounded-xl">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
