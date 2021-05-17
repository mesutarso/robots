import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [robots, setRobots] = useState([]);
  const [robotsCopy, setrobotsCopy] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      setIsLoading(false);
    };
    fectchData();
  }, []);

  return [robots, robotsCopy, isLoading, setrobotsCopy];
};

export { useFetch };
