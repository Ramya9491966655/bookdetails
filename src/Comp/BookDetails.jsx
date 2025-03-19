
import React, { useState, useEffect } from 'react';
import { useBookContext } from './BookContext';
import { Link } from 'react-router-dom';
import './BookDetails.css';
const BookDetails = () => {
  const { bookId, selectPage } = useBookContext();
  const [pages, setPages] = useState([]);

  useEffect(() => {
    if (bookId) {
  
      const bookPages = [
        { id: 1, content: `This is the first page content of Book ${bookId}` },
        { id: 2, content: `This is the second page content of Book ${bookId+1}` },
        { id: 3, content: `This is the third page content of Book ${bookId+2}` },
      ];
      setPages(bookPages);
    }
  }, [bookId]);

  const handlePageClick = (pageId) => {
    selectPage(pageId);  
  };

  return (
    <div>
      <h1>Book Details: Book {bookId}</h1>
      <div>
        <h2>Pages</h2>
        <ul>
          {pages.map((page) => (
            <li key={page.id}>
              <h3>Page {page.id}</h3>
              <p>{page.content}</p>
              <Link to={`/book/${bookId}/page/${page.id}`}>
                <button onClick={() => handlePageClick(page.id)}>
                  Go to Page {page.id}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <br />
      <Link to="/">Back to Book List</Link>
    </div>
  );
};

export default BookDetails;
