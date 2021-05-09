import { useState, useEffect } from "react";
import CardList from "./components/CardList/CardList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import Title from "./components/Text/Title";
import { Switch, Route } from "react-router-dom";

function App() {
  const [robots, setrobots] = useState([]);
  const [robotsCopy, setrobotsCopy] = useState([]);

  const robotSearch = (event) => {
    let query = event.target.value;
    let regexp = new RegExp(query, "");
    let SearchRobots = robots.filter((item) =>
      regexp.test(item.name.toLowerCase())
    );
    setrobotsCopy(SearchRobots);
  };
  useEffect(async () => {
    let result = await fetch("http://jsonplaceholder.typicode.com/users");
    result = await result.json();
    result = await result.map(({ id, name, email }) => ({
      id,
      name,
      email,
    }));
    setrobots([...result]);
    setrobotsCopy([...result]);
  }, []);

  return (
    <div className="App">
      <Title />
      <SearchBox onChange={robotSearch} />
      <CardList robots={robotsCopy} />
    </div>
  );
}

export default App;
