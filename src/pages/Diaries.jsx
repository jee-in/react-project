import React from "react";
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { setDiaries, addDiary, updateDiary, deleteDiary } from '../redux/diariesSlice';

import styled from "styled-components";
import Button from "../components/Button";

const Diaries = () => {
  const dispatch = useDispatch();
  const diaries = useSelector((state) => state.diaries);
  const navigate = useNavigate();

  function NavBar() {
    return (
      <div style={{display: 'flex', alignItems: 'center', width: '100%', height: '50px'}}>
        <Button className={"btn"} onClick={() => navigate(`/diaries/create-page`)}>일기 쓰기</Button>
        <div style={{margin: '0 10px'}}>일기 총 수: {diaries.length}</div>
      </div>
    );
  }

  return (
    <>
      <NavBar />
      {diaries.map((diary) => {
        return (
          <StDiary key={diary.id}>
            <StDiaryElem style={{border: 'none'}}>번호: {diary.id}</StDiaryElem>
            <StDiaryElem>날짜: {diary.date}</StDiaryElem>
            <StDiaryElem>
              <Link to={`/diaries/${diary.id}`}>
                <span style={{ cursor: 'pointer' }}>제목: {diary.title}</span>
              </Link>
            </StDiaryElem>
            <StDiaryElem>내용: {diary.content}</StDiaryElem>
            <StDiaryElem style={{justifyContent: 'center'}}>
              <Button className={"btn btn-update"} onClick={() => navigate(`/diaries/${diary.id}/edit-page`)}>수정</Button>
              <Button className={"btn btn-delete"} onClick={() => {dispatch(deleteDiary(diary.id))}}>삭제</Button>
            </StDiaryElem>
          </StDiary>
        );
      })}
    </>
  )
};

export default Diaries;

const StDiary = styled.div`
  border: 1px solid #ddd;
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 12px;
`;

const StDiaryElem = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  border-top: 1px solid #ddd;
  padding: 20px;
  width: 100%;
`;