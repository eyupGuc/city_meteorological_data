
import './App.css';
import Card from "./components/Card";
import data from "./data";


function App() {
  console.log(data)
  return (
    <div className="App">
      <Card data={data}/>
    </div>
  );
}

export default App;
