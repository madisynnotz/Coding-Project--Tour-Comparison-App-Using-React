import { useState } from 'react';
import Gallery from './components/Gallery';
import './styles/styles.css';

// Root component: Manages state for the entire app and renders Gallery component
function App() {
  // State to hold tours data fetched from API
  const [tours, setTours] = useState([]);

  // Callback function to remove a tour when user clicks 'Not Interested'
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  // Render the Gallery component and pass necessary props (state and callback)
  return (
    <div className="app">
      <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />
    </div>
  );
}

export default App;
