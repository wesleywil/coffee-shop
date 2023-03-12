import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { Link } from "react-router-dom";
import { registerUser } from "../../redux/accounts/accounts";

interface CustomElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  password: HTMLInputElement;
  password2: HTMLInputElement;
}

interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleRegister = (e: React.FormEvent<CustomForm>) => {
    e.preventDefault();
    const target = e.currentTarget.elements;

    if (target.password.value !== target.password2.value) {
      console.log("Password fields doesn't match!");
    } else {
      const data = {
        name: target.name.value,
        email: target.email.value,
        password: target.password.value,
      };
      dispatch(registerUser(data));
    }
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mt-48">Register</h1>
      <form
        onSubmit={handleRegister}
        className="self-center mt-2  w-1/4 text-3xl text-white flex flex-col items-center bg-black px-2 pb-4 rounded-xl"
      >
        <span>Name</span>
        <input
          type="text"
          name="name"
          placeholder="Your name goes here!"
          className="w-full text-black text-center rounded"
        />
        <span>Email</span>
        <input
          type="email"
          name="email"
          placeholder="Your e-mail goes here!"
          className="w-full text-black text-center rounded"
        />
        <span>Password</span>
        <input
          type="password"
          name="password"
          placeholder="Your password goes here!"
          className="w-full text-black text-center rounded"
        />
        <span>Confirm Password</span>
        <input
          type="password"
          name="password2"
          placeholder="confirm your password here!"
          className="w-full text-black text-center rounded"
        />
        <Link
          to="/login"
          className="mt-2 text-base text-left hover:text-gray-400 w-full"
        >
          Already have an Account? Click here to Login
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

export default Register;
