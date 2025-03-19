
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BookProvider } from './Comp/BookContext';
import BookList from './Comp/BookList';
import BookDetails from './Comp/BookDetails';
import BookPage from './Comp/BookPage';
import './App.css';
const App = () => {
  return (
    <BookProvider>
      <Router>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/book/:bookId" element={<BookDetails />} />
          <Route path="/book/:bookId/page/:pageId" element={<BookPage />} />
        </Routes>
      </Router>
    </BookProvider>
  );
};

export default App;
