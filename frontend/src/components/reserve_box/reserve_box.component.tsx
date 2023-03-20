import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import { set_select_table_hidden } from "../../redux/utils/utils";
import { createReservation } from "../../redux/reservations/reservations";
import React from "react";

const ReserveBox = () => {
  const today = new Date().toISOString().slice(0, 10);

  const reserve = useSelector((state: RootState) => state.utils.select_table);
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      reserve_date: today,
      table_id: reserve.id,
    };
    dispatch(createReservation(data));
    dispatch(set_select_table_hidden(true));
  };
  return (
    <div className="bg-[#70351B]/70 backdrop-blur-sm p-2 px-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded">
      <div className="flex flex-col items-center text-xl text-[#F3EFE6]">
        <h1>Reservation</h1>
        <form onSubmit={handleSubmit} className="flex flex-col ">
          <h1>Selected Table - Seats {reserve.seats}</h1>
          <span>Reserve Date</span>
          <input
            type="date"
            className="text-[#F3EFE6] bg-[#D87D4A] rounded"
            disabled
            defaultValue={today}
          />
          <div className="mt-4 flex gap-4 justify-center font-bold text-[#F3EFE6]">
            <button className="bg-[#D87D4A] hover:bg-[#F3EFE6] hover:text-[#70351B] px-2 rounded">
              Reserve
            </button>
            <button
              onClick={() => dispatch(set_select_table_hidden(true))}
              className="bg-[#D87D4A] hover:bg-[#F3EFE6] hover:text-[#70351B] px-2 rounded"
              type="button"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReserveBox;
