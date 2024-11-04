import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Diaries from '../pages/Diaries';
import Layout from './Layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Diaries />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;