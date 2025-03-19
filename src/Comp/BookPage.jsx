
import React, { useEffect, useState } from 'react';
import { useBookContext } from './BookContext';
import { Link } from 'react-router-dom';
import './BookPage.css';
const BookPage = () => {
  const { bookId, pageId } = useBookContext();
  const [pageContent, setPageContent] = useState('');

  useEffect(() => {
    if (bookId && pageId) {
      setPageContent(`This is the content for Book ${bookId} - Page ${pageId}`);
    }
  }, [bookId, pageId]);

  return (
    <div>
      <h1>Book {bookId} - Page {pageId}</h1>
      <p>{pageContent}</p>
      <br />
      <Link to={`/book/${bookId}`}>Back to Book Details</Link>
    </div>
  );
};

export default BookPage;
