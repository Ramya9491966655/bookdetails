
import React, { createContext, useState, useContext } from 'react';

const BookContext = createContext();

export const useBookContext = () => useContext(BookContext);

export const BookProvider = ({ children }) => {
  const [bookId, setBookId] = useState(null);  
  const [pageId, setPageId] = useState(null);  
  
  const selectBook = (id) => setBookId(id);  
  const selectPage = (id) => setPageId(id);  

  return (
    <BookContext.Provider value={{ bookId, pageId, selectBook, selectPage }}>
      {children}
    </BookContext.Provider>
  );
};
