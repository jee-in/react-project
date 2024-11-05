import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Diaries from '../pages/Diaries';
import Diary from '../pages/Diary';
import EditDiary from '../pages/EditDiary';
import CreateDiary from '../pages/CreateDiary';
import Layout from './Layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Diaries />} />
          // Dynamic routes
          <Route path="diaries/:id" element={<Diary />} />
          <Route path="diaries/:id/edit-page" element={<EditDiary />} />
          <Route path="diaries/create-page" element={<CreateDiary />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;