import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [robots, setRobots] = useState([]);
  const [robotsCopy, setrobotsCopy] = useState([]);

  useEffect(() => {
    const fectchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      const dataFiltered = await data.map(({ id, name, email }) => ({
        id,
        name,
        email,
      }));

      setRobots([...dataFiltered]);
      setrobotsCopy([...dataFiltered]);
    };
    fectchData();
  }, []);

  return [robots, robotsCopy, setrobotsCopy];
};

export { useFetch };
