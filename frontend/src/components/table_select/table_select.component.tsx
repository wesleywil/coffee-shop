type TableSelectProps = {
  seats: number;
  status: string;
};
const TableSelect = ({ seats, status }: TableSelectProps) => {
  const handleClick = () => {
    console.log("TEST 123");
  };
  return (
    <button
      onClick={handleClick}
      className={`w-2/3 p-2 mb-2 text-center text-[#F3EFE6] ${
        status === "occupied"
          ? "bg-black/30"
          : "bg-[#D87D4A]/30 hover:bg-[#D87D4A]/60"
      }   rounded`}
      disabled={status === "occupied" ? true : false}
    >
      Seats {seats} - {status}
    </button>
  );
};

export default TableSelect;
