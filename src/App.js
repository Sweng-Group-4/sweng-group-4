import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Search from './pages/Searchbar.jsx';
import Contact from './pages/Contact.jsx';
import FileUpload from './pages/FileUpload.jsx';
import ProductList from './pages/ProductList.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
          <Route path="/fileupload" element={<FileUpload />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;