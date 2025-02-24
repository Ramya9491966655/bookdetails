
import GrandChildComponent from './GrandChildComponent';
import './ChildComponent.css'
const ChildComponent = ({ book }) => {
  return (
    <div className="child-container">
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <GrandChildComponent publicationYear={book.year} />
    </div>
  );
};

export default ChildComponent;
