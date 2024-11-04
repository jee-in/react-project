import React from "react";
import { Link, useParams } from 'react-router-dom';

const data = [
  { id: 1, content: '오늘 날씨 맑음' },
  { id: 2, content: '오늘 날씨 흐림' },
  { id: 3, content: '오늘 추움' },
  { id: 4, content: '오늘 더움' },
]

const Diaries = () => {
  return (
    <div>
      {data.map((diary) => {
        return (
          <div key={diary.id}>
            <div>일기: {diary.id}</div>
            <Link to={`/diaries/${diary.id}`}>
              <span style={{ cursor: 'pointer' }}> - Go to: {diary.content}</span>
            </Link>
          </div>
        );
      })}
    </div>
  )
};

export default Diaries;