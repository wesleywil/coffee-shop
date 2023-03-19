import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import { select_table, set_select_table_hidden } from "../../redux/utils/utils";

type TableSelectProps = {
  id: number;
  seats: number;
  status: string;
};
const TableSelect = ({ id, seats, status }: TableSelectProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    dispatch(set_select_table_hidden(false));
    dispatch(select_table({ id, seats }));
    console.log("TEST ID=> ", id);
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
