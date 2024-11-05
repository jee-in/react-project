import { createSlice } from '@reduxjs/toolkit';

const diariesSlice = createSlice({
  name: 'diaries',
  initialState: [
      { id: 1, date: '2024년 10월 5일', title: '오늘 날씨 맑음', content: '자전거를 탔다.' },
      { id: 2, date: '2024년 10월 10일', title: '오늘 날씨 흐림', content: '2시에 잠깐 비가 왔다.' },
      { id: 3, date: '2024년 10월 25일', title: '오늘 추움', content: '패딩을 입어야 할 날씨이다.' },
      { id: 4, date: '2024년 11월 4일', title: '오늘 더움', content: '가을이 아닌 것처럼 더웠다.' },
    ],
  reducers: {
    setDiaries: (state, action) => {
      return action.payload; // API에서 받아온 일기 목록으로 상태 업데이트
    },
    addDiary: (state, action) => {
      state.push(action.payload); // 새 일기 추가
    },
    deleteDiary: (state, action) => {
      const idToDelete = action.payload;
      return state.filter((diary) => diary.id !== idToDelete);
    },
    updateDiary: (state, action) => {
      const { id, date, title, content } = action.payload;

      return state.map(diary => 
        diary.id === id 
          ? { ...diary, date, title, content } // 업데이트된 일기 반환
          : diary // 기존 일기 반환
      );
    }
  },
});

export const { setDiaries, addDiary, deleteDiary, updateDiary } = diariesSlice.actions;
export default diariesSlice.reducer;
