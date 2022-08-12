import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: 1,
        title: "Learn React",
      },
      {
        id: 2,
        title: "Read a book",
      },
    ],
  },
  reducers: {},
});

export default todosSlice.reducer;
