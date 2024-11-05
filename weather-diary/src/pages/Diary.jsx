import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Diary = () => {
  const { id } = useParams();
  const diaries = useSelector((state) => state.diaries);
  const diary = diaries.find((diary) => diary.id === parseInt(id)); // id를 숫자로 변환

  return (
    <div>
      {diary ? (
        <div>
          <h2>{diary.title}</h2>
          <p>{diary.content}</p>
        </div>
      ) : (
        <p>일기를 찾을 수 없습니다.</p>
      )}
    </div>
  );
}

export default Diary;