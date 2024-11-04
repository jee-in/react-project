import React from 'react';
import { useParams } from 'react-router-dom';

const data = [
  { id: 1, content: '오늘 날씨 맑음' },
  { id: 2, content: '오늘 날씨 흐림' },
  { id: 3, content: '오늘 추움' },
  { id: 4, content: '오늘 더움' },
]

function Diary() {
  const param = useParams();
  const diary = data.find((diary) => diary.id === parseInt(param.id));
  return <div>{diary.content}</div>;
}

export default Diary;