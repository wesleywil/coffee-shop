import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import { set_select_table_hidden } from "../../redux/utils/utils";
import { createReservation } from "../../redux/reservations/reservations";

const ReserveBox = () => {
  const today = new Date().toISOString().slice(0, 10);

  const reserve = useSelector((state: RootState) => state.utils.select_table);
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = () => {
    const data = {
      reserve_date: today,
      table_id: reserve.id,
    };
    dispatch(createReservation(data));
    dispatch(set_select_table_hidden(true));
  };
  return (
    <div className="mt-2 bg-[#F3EFE6] text-[#70351B] text-xl font-bold px-2 py-1 flex flex-col shadow-lg items-center rounded">
      <h1>Confirm reserve to {today}?</h1>
      <h1>Table - {reserve.seats}</h1>
      <h1>
        <button
          onClick={handleSubmit}
          className="bg-[#70351B] hover:bg-[#70351B]/40 text-[#F3EFE6] px-2"
        >
          YES
        </button>{" "}
        |{" "}
        <button
          onClick={() => dispatch(set_select_table_hidden(true))}
          className="bg-[#70351B] hover:bg-[#70351B]/40 text-[#F3EFE6] px-2"
        >
          NO
        </button>{" "}
      </h1>
    </div>
  );
};

export default ReserveBox;
