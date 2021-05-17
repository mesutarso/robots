import { useFetch } from "./hooks/useFetch";
import CardList from "./components/CardList/CardList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import Title from "./components/Text/Title";
import { URL } from "./utils/api";
import Loading from "./components/Loading/Loading";
import NoFoundText from "./components/SearchBox/NoFoundText";

function App() {
  const [robots, robotsCopy, isLoading, setrobotsCopy] = useFetch(URL);

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
      {isLoading ? (
        <Loading />
      ) : robotsCopy.length === 0 ? (
        <NoFoundText />
      ) : (
        <CardList robots={robotsCopy} />
      )}
    </div>
  );
}

export default App;
