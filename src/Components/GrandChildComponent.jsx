
import './GrandChildComponent.css'
const GrandChildComponent = ({ publicationYear }) => {
  return (
    <div className="GrandChild-container">
      <p>Publication Year: {publicationYear}</p>
    </div>
  );
};

export default GrandChildComponent;
