import Text from "./Text";
import SearchBox from "./SearchBox";
import CardList from "./CardList";
const tableauRobots = [
  {
    id: 1,
    name: "Sarah",
    email: "sarah@gmail.com",
  },
  {
    id: 2,
    name: "Christelle",
    email: "Christelle@gmail.com",
  },
  {
    id: 3,
    name: "Mechack",
    email: "Mechack@gmail.com",
  },
  {
    id: 4,
    name: "Raven",
    email: "Raven@gmail.com",
  },
  {
    id: 5,
    name: "Sacré",
    email: "Sacré@gmail.com",
  },
  {
    id: 6,
    name: "Christian",
    email: "Christian@gmail.com",
  },
];

function App() {
  return (
    <div className="App">
      <Text />
      <SearchBox />
      <CardList robots={tableauRobots} />
    </div>
  );
}

export default App;
