import "./App.css";
import Apidata from "./Apidata";
import Header from "./Header";

function App() {
  return (
    <div>
      <Header />
      <div className="container mt-3">
        <Apidata />
      </div>
    </div>
  );
}

export default App;
