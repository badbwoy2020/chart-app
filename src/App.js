import "./App.css";
import { Sidebar, Widgets } from "./components/index";

function App() {
  return (
    <div className="app__body">
      <Sidebar />
      <Widgets />
    </div>
  );
}

export default App;
