
import ChildComponent from './ChildComponent';
import './ParentComponent.css'
const ParentComponent = () => {

  const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }
  ];

  return (
    <div className="parent-container">
      <h1>Book List</h1>
      {books.map((book, index) => (
        <ChildComponent key={index} book={book} />
      ))}
    </div>
  );
};

export default ParentComponent;
