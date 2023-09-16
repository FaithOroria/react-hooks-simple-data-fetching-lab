// create your App component here
import React, { useEffect, useState } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    // Fetch the random dog image
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        // Set the dog image in the state
        setDogImage(data.message);
      })
      .catch((error) => {
        console.error('Error fetching dog image:', error);
      });
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="App">
      <h1>Random Dog Image</h1>
      {!dogImage ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;

