import { createSlice } from "@reduxjs/toolkit";

const boardSlice = createSlice({
  name: "board",
  initialState: {
    lists: [],
  },
  reducers: {
    addList: (state, action) => {
      state.lists.push({ id: Date.now(), title: action.payload, cards: [] });
    },
    addCard: (state, action) => {
      const { listId, cardText } = action.payload;
      const list = state.lists.find((list) => list.id === listId);
      list.cards.push({ id: Date.now(), text: cardText });
    },
  },
});

export const { addList, addCard } = boardSlice.actions;
export default boardSlice.reducer;
