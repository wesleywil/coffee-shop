import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../redux/store";
import { updateReservation } from "../../../redux/reservations/reservations";

const ReservationItem = ({ item }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleUpdate = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = event.target.value;

    dispatch(
      updateReservation({
        id: item.id,
        reserve_date: item.reserve_date,
        status: newStatus,
      })
    );
  };
  return (
    <div
      key={item.id}
      className="pb-2 flex flex-col items-center bg-[#F3EFE6] text-[#70351B] font-bold"
    >
      <h1 className="">{item.reserve_date}</h1>
      <div className="px-2 w-full flex  justify-between">
        {item.user.name}
        <select
          className="bg-[#70351B] text-[#F3EFE6]"
          defaultValue={item.status}
          onChange={handleUpdate}
        >
          <option value="pending">Pending</option>
          <option value="aproved">Approved</option>
          <option value="rejected">Rejected</option>
          <option value="closed">Closed</option>
        </select>
      </div>
    </div>
  );
};

export default ReservationItem;
