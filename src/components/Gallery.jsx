import { useEffect, useState } from 'react';
import TourCard from './TourCard';

// Component that fetches tour data and displays a list of tours
const Gallery = ({ tours, setTours, onRemove }) => {
  // State for managing loading and error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect to fetch tour data once when component loads
  useEffect(() => {
    fetch('https://course-api.com/react-tours-project')
      .then((res) => {
        if (!res.ok) throw new Error('Error fetching tours');
        return res.json();
      })
      .then((data) => {
        setTours(data);        // Update tours state with fetched data
        setLoading(false);     // Stop loading once data is fetched
      })
      .catch((err) => {
        setError(err.message); // Set error message if fetching fails
        setLoading(false);     // Stop loading on error as well
      });
  }, [setTours]);

  // Display loading indicator or error message conditionally
  if (loading) return <div className="loading">Loading tours...</div>;
  if (error) return <div className="error">Oops! {error}</div>;

  // Render a TourCard for each fetched tour
  return (
    <div className="gallery">
      {tours.map((tour) => (
        <TourCard key={tour.id} {...tour} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default Gallery;