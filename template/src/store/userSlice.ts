/*
 * @Author: your name
 * @Date: 2020-12-16 15:08:39
 * @LastEditTime: 2020-12-23 20:48:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-app/src/store/user.js
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from './data';

const initialState: User = {
  name: 'tang',
  age: 18,
};

const sliceVal = {
  name: 'user',
  initialState,
  reducers: {
    addAge: (state: User) => {
      state.age++;
    },
    reName: (state: User, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
};
const userSlice = createSlice(sliceVal);
export const { addAge, reName } = userSlice.actions;
export const selectUser = (state: { user: User }) => state.user;

export default userSlice.reducer;
