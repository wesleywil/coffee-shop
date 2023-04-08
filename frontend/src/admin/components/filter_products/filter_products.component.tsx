const FilterProducts = () => {
  return (
    <div className="mb-4 md:text-xl flex justify-center gap-2">
      <button className="py-2 md:py-0 px-2 bg-[#D87D4A] hover:bg-[#D87D4A]/50 text-[#F3EFE6] rounded">
        All
      </button>
      <button className="py-2 md:py-0 px-2 bg-[#D87D4A] hover:bg-[#D87D4A]/50 text-[#F3EFE6] rounded">
        Coffee
      </button>
      <button className="py-2 md:py-0 px-2 bg-[#D87D4A] hover:bg-[#D87D4A]/50 text-[#F3EFE6] rounded">
        Tea
      </button>
      <button className="py-2 md:py-0 px-2 bg-[#D87D4A] hover:bg-[#D87D4A]/50 text-[#F3EFE6] rounded">
        Treats And Sweets
      </button>
    </div>
  );
};

export default FilterProducts;
