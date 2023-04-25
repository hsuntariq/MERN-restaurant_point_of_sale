import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AddProduct from './pages/admin/AddProduct';
import Home from './pages/user/Home';
import ViewProduct from './pages/admin/ViewProduct';

function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/add-product" element={<AddProduct/>} />
          <Route path="/view-product" element={<ViewProduct/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
