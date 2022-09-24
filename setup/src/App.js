// Required imports
import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

// URL to fetch data from
const url = "https://course-api.com/react-tours-project";

// Main function
function App() {
  // Declare states
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  // Function to fetch data from URL
  const fetchTours = async () => {
    setLoading(true);

    // Try-catch in-case of error fetching data
    try {
      // Fetch JSON data
      const response = await fetch(url);
      const tours = await response.json();
      // If data is fetched, set states
      setLoading(false);
      setTours(tours);
    } catch (error) {
      // If error caught
      setLoading(false);
      console.log(error);
    }
  };

  // Perform this function only once immediately after rendering page
  useEffect(() => {
    fetchTours();
  }, []);

  // If Loading state is true, tell user that data is still being fetched
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  // Else, display the tours rendered
  return (
    <main>
      <Tours />
    </main>
  );
}

export default App;
