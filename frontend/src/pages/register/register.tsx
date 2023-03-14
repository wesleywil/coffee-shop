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
      <h1 className="mt-8 md:mt-48 text-4xl text-[#F3EFE6] font-bold ">
        Register
      </h1>
      <form
        onSubmit={handleRegister}
        className="self-center mt-2 w-11/12 md:w-1/2 xl:w-1/4 bg-[#F3EFE6] text-3xl text-[#70351B] flex flex-col items-center px-2 pb-4 rounded-xl"
      >
        <span>Name</span>
        <input
          type="text"
          name="name"
          className="w-full bg-[#70351B] text-[#F3EFE6] text-center rounded"
        />
        <span>Email</span>
        <input
          type="email"
          name="email"
          className="w-full bg-[#70351B] text-[#F3EFE6] text-center rounded"
        />
        <span>Password</span>
        <input
          type="password"
          name="password"
          className="w-full bg-[#70351B] text-[#F3EFE6] text-center rounded"
        />
        <span>Confirm Password</span>
        <input
          type="password"
          name="password2"
          className="w-full bg-[#70351B] text-[#F3EFE6] text-center rounded"
        />
        <Link
          to="/login"
          className="mt-2 text-base text-left hover:text-gray-400 w-full"
        >
          Already have an Account? Click here to Login
        </Link>
        <div className="mt-8 flex gap-4 justify-center font-bold text-2xl">
          <button className="bg-[#70351B] hover:bg-[#D87D4A] text-[#F3EFE6]  px-2 py-1 rounded-xl">
            Register
          </button>
          <button
            type="button"
            className="bg-[#70351B] hover:bg-[#D87D4A] text-[#F3EFE6] px-2 py-1 rounded-xl"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
