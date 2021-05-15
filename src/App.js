import { useFetch } from "./hooks/useFetch";
import CardList from "./components/CardList/CardList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import Title from "./components/Text/Title";
import { URL } from "./utils/api";
import { Switch, Route } from "react-router-dom";

function App() {
  const [robots, robotsCopy, setrobotsCopy] = useFetch(URL);

  const robotSearch = (event) => {
    let query = event.target.value;
    let regexp = new RegExp(query, "");
    let SearchRobots = robots.filter((item) =>
      regexp.test(item.name.toLowerCase())
    );
    setrobotsCopy(SearchRobots);
  };

  return (
    <div className="App">
      <Title />
      <SearchBox onChange={robotSearch} />
      <CardList robots={robotsCopy} />
    </div>
  );
}

export default App;
