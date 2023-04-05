import { Link } from "react-router-dom";
import HomeImg from "../../assets/coffee.jpeg";

const Homepage = () => {
  return (
    <div className="flex flex-row xl:flex-col justify-center items-center">
      <div className="mt-12 md:mt-36 self-center flex flex-col-reverse xl:flex-row justify-center gap-2 p-4">
        <div className="xl:mr-16 mx-auto">
          <img src={HomeImg} alt="Cup of coffee" className="rounded-xl" />
        </div>
        <div className=" self-center flex flex-col gap-1  text-center md:w-2/3 xl:w-1/3 mx-auto">
          <h3 className="md:text-xl text-[#F3EFE6]">
            Experience Exceptional Quality
          </h3>
          <h1 className="my-4 font-bold text-5xl md:text-8xl text-[#F3EFE6]">
            Discover Your Perfect Cup
          </h1>
          <p className="text-[#F3EFE6] md:text-2xl xl:text-base hidden md:block ">
            Our mission is to bring you the best coffee experience through
            sustainably sourced, hand-picked beans. We are passionate about
            great coffee and believe that every cup should be a journey. Join us
            in our commitment to excellence.
          </p>
          <Link
            to="/catalog"
            className="w-fit mx-auto md:mt-12 px-2 py-1 bg-[#D87D4A] font-bold text-xl text-[#F3EFE6] float-left  rounded-xl"
          >
            Open the Catalog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
