
import React from 'react';
import { useBookContext } from './BookContext';
import { Link } from 'react-router-dom';
import './BookList.css';
const BookList = () => {
  const { selectBook } = useBookContext();

  const books = [
    { id: 1, title: 'Book 1' },
    { id: 2, title: 'Book 2' },
    { id: 3, title: 'Book 3' },
  ];

  const handleClick = (bookId) => {
    selectBook(bookId);  
  };

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`} onClick={() => handleClick(book.id)}>
              <button>{book.title}</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
