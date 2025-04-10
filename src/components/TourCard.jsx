import { useState } from 'react';

// Component displaying individual tour details and user interactions
const TourCard = ({ id, name, info, price, image, onRemove }) => {
  // State for toggling between showing more or less tour info
  const [readMore, setReadMore] = useState(false);

  // Render tour information including name, image, price, and toggleable description
  return (
    <div className="tour-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h4>${price}</h4>
      <p>
        {readMore ? info : `${info.substring(0, 150)}...`}
        {/* Button toggles showing full tour info or just a preview */}
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? 'Show Less' : 'Read More'}
        </button>
      </p>
      {/* Button removes the tour from the list when clicked */}
      <button onClick={() => onRemove(id)}>Not Interested</button>
    </div>
  );
};

export default TourCard;