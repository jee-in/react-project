import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Button from "../components/Button"
import styled from "styled-components";
import { addDiary } from '../redux/diariesSlice';

const CreateDiary = () => {

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const diaries = useSelector((state) => state.diaries);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate 훅 사용
  
  const isFormValid = title && date && content; // 모든 필드가 채워졌는지 확인

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title.length < 10) {
      alert("제목을 10글자 이상 입력해 주세요.");
      return;
    };

    if (!isFormValid) {
      alert("모든 필드를 채워주세요.");
      return;
    }

    dispatch(
      addDiary({
        id: diaries.length + 1,
        title,
        date,
        content
      })
    );

    alert("일기 쓰기 성공!");
    navigate('/');
  };

  return (
    <StFormContainer>
      <form onSubmit={onSubmitHandler}>
        <StInputBox>
          <label>일기의 제목을 입력해 주세요.</label>
          <StInput 
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </StInputBox>
        <StInputBox>
        <label>일기의 날짜를 입력해 주세요.</label>
          <StInput 
            type="text"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </StInputBox>
        <StInputBox>
          <label>일기의 내용을 입력해 주세요.</label>
          <StInput 
            type="text"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </StInputBox>
        <Button className={"btn btn-add"} disabled={!isFormValid}>추가하기</Button>
      </form>
    </StFormContainer>
  );
}

export default CreateDiary;

const StFormContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 30px;
`;

const StInputBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 50px 0;
`;

const StInput = styled.input`
  border: 2px solid #eee;
  margin: 0 24px;
  height: 25px;
  width: 500px;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
`;