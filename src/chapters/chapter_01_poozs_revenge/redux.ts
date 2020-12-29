import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

type Scene = string
const adapter = createEntityAdapter<Scene>({
  selectId: (x) => x,
});
const slice = createSlice({
  name: 'chapter01',
  initialState: adapter.getInitialState(),
  reducers: {
    addOne: adapter.addOne,
  }
});

export const { addOne } = slice.actions

export default slice.reducer;