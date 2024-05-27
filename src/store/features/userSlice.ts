import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface UserState {
  data: Array<IUser>;
  user: IUser;
  isLoading: boolean;
}

const initialState: any = {
  data: [],
  user: {},
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;
export default userSlice.reducer;
