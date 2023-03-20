import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store";
import { fetchTables } from "../../redux/tables/tables";
import { set_default_status } from "../../redux/reservations/reservations";

import TableSelect from "../../components/table_select/table_select.component";
import ReserveBox from "../../components/reserve_box/reserve_box.component";

import coffeeShopMapImage from "../../assets/tables_template_vertical.png";

const Tables = () => {
  const tables = useSelector((state: RootState) => state.tables.tables);
  const status = useSelector((state: RootState) => state.tables.status);
  const created_status = useSelector(
    (state: RootState) => state.reservations.status
  );
  const select_table_hidden = useSelector(
    (state: RootState) => state.utils.select_table_hidden
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log("AAH");
    console.log("STATUS RESERVATION => ", created_status);
    if (
      created_status === "succeeded in creating a new reservation" ||
      status === "idle"
    ) {
      dispatch(set_default_status());
      dispatch(fetchTables());
    }
  }, [tables, select_table_hidden, status, created_status]);

  return (
    <div className="flex flex-col items-center pb-4">
      <div className="mt-8  md:mt-48">
        <h1 className="text-4xl text-[#F3EFE6] font-bold ">
          Coffee Shop Tables
        </h1>
      </div>
      {select_table_hidden ? "" : <ReserveBox />}
      <div className="mt-2 md:w-11/12 flex flex-col-reverse md:flex-row justify-center gap-2">
        <div className="w-11/12 mx-auto">
          <img
            src={coffeeShopMapImage}
            alt="tables layout"
            className="rounded float-right"
          />
        </div>

        <div className="w-full flex flex-col items-center p-4 self-center">
          {tables.length
            ? tables
                .slice() // make a copy of the array to avoid modifying the original array
                .sort((a, b) => a.seats - b.seats) // sort the array by the seats property from lower to higher
                .map((item) => (
                  <TableSelect
                    key={item.id}
                    id={item.id}
                    seats={item.seats}
                    status={item.status}
                  />
                ))
            : "No Tables Yet"}
        </div>
      </div>
    </div>
  );
};

export default Tables;
