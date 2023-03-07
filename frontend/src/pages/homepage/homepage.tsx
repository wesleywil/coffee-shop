const Homepage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-36 self-center flex justify-center gap-2 p-4">
        <div className="mr-16">
          <img src="https://dummyimage.com/600x600" alt="Cup of coffee" />
        </div>
        <div className=" self-center flex flex-col gap-1 w-1/3">
          <h3 className="text-xl">Experience Exceptional Quality</h3>
          <h1 className="my-4 font-bold text-8xl">Discover Your Perfect Cup</h1>
          <p className="">
            Our mission is to bring you the best coffee experience through
            sustainably sourced, hand-picked beans. We are passionate about
            great coffee and believe that every cup should be a journey. Join us
            in our commitment to excellence.
          </p>
          <button className="w-fit mt-12 px-2 py-1 bg-black text-xl text-white float-left  rounded-xl">
            Open the Catalog
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
