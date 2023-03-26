import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api_config";

export interface Reservation {
  id: number;
  user_id: number;
  reserve_date: Date;
  status: string;
}

export interface ReservationState {
  reservations: Array<Reservation>;
  reserve: Reservation;
  today_reservation: Reservation;
  status: string;
  error: any;
}

const initialState: ReservationState = {
  reservations: [],
  reserve: {} as Reservation,
  today_reservation: {} as Reservation,
  status: "idle",
  error: null,
};

export const fetchReservations = createAsyncThunk(
  "reservations/fetchReservations",
  async () => {
    const res = await api.get("/reservations");
    return res.data.data;
  }
);

export const getTodaysReservation = createAsyncThunk(
  "reservations/getTodaysReservation",
  async () => {
    const res = await api.get("/reservations/today");
    return res.data;
  }
);

export const createReservation = createAsyncThunk(
  "reservations/createReservation",
  async ({
    reserve_date,
    table_id,
  }: {
    reserve_date: string;
    table_id: number;
  }) => {
    const res = await api.post("/reservations/", { reserve_date, table_id });
    return res.data;
  }
);

export const updateReservation = createAsyncThunk(
  "reservations/updateReservation",
  async ({
    id,
    date,
    status,
  }: {
    id: number;
    date: string;
    status: string;
  }) => {
    const res = await api.put(`/reservations/${id}`, { date, status });
    return res.data;
  }
);

export const deleteReservation = createAsyncThunk(
  "reservations/deleteReservation",
  async (id: number) => {
    const res = await api.delete(`/reservations/${id}`);
    return res.data;
  }
);

export const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    set_default_status: (state) => {
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservations.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchReservations.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.reservations = payload;
      })
      .addCase(fetchReservations.rejected, (state) => {
        state.error = "error";
      })
      .addCase(getTodaysReservation.pending, (state) => {
        state.status = "trying to get reservation open reservation";
      })
      .addCase(getTodaysReservation.fulfilled, (state, { payload }) => {
        state.status = "succeeded in retrieving today's reservation";
        state.reserve = payload;
      })
      .addCase(getTodaysReservation.rejected, (state) => {
        state.error = "error in trying to get reservation of today";
      })
      .addCase(createReservation.pending, (state) => {
        state.status = "reserving...";
      })
      .addCase(createReservation.fulfilled, (state, { payload }) => {
        state.status = "succeeded in creating a new reservation";
        state.reserve = payload;
      })
      .addCase(createReservation.rejected, (state) => {
        state.error = "error in creating a reservation";
      })
      .addCase(updateReservation.pending, (state) => {
        state.status = "tryng to update reserve";
      })
      .addCase(updateReservation.fulfilled, (state, { payload }) => {
        state.status = "succeeded in updating the reserve";
        state.reserve = payload;
      })
      .addCase(updateReservation.rejected, (state) => {
        state.error = "error while trying to update reserve";
      })
      .addCase(deleteReservation.pending, (state) => {
        state.status = "trying to delete reserve";
      })
      .addCase(deleteReservation.fulfilled, (state) => {
        state.status = "reserve deleted successfully";
      })
      .addCase(deleteReservation.rejected, (state) => {
        state.error = "error while trying to delete reserve";
      });
  },
});

export const { set_default_status } = reservationsSlice.actions;

export default reservationsSlice.reducer;
