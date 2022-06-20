import Task from "./components/Task";
import Thoughts from "./components/Thoughts";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Thoughts/>
        <Task/>  
      </div>
    </div>
  );
}

export default App;
