import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { Link } from "react-router-dom";
import { loginUser } from "../../redux/accounts/accounts";

interface CustomElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

const SignIn = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleLogin = (e: React.FormEvent<CustomForm>) => {
    e.preventDefault();
    const target = e.currentTarget.elements;

    const data = {
      email: target.email.value,
      password: target.password.value,
    };
    dispatch(loginUser(data));
  };
  return (
    <div className="flex flex-col items-center">
      <div className="mt-48">
        <h1 className="text-4xl font-bold ">Login Page</h1>
      </div>

      <form
        onSubmit={handleLogin}
        className="self-center mt-2  w-1/4 h-80 text-3xl text-white flex flex-col items-center bg-black p-2 rounded-xl"
      >
        <span>Email</span>
        <input
          type="email"
          name="email"
          placeholder="Your e-mail goes here!"
          className="w-full text-black text-center"
        />
        <span>Password</span>
        <input
          type="password"
          name="password"
          placeholder="Your password goes here!"
          className="w-full text-black text-center"
        />
        <Link
          to="/register"
          className="mt-2 text-base text-left hover:text-gray-400 w-full"
        >
          Don't have an account? Click here!
        </Link>
        <div className="mt-8 flex gap-4 justify-center font-bold text-2xl">
          <button className="bg-white hover:bg-gray-300 text-black  px-2 py-1 rounded-xl">
            Login
          </button>
          <button
            type="button"
            className="bg-white hover:bg-gray-300 text-black px-2 py-1 rounded-xl"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
