import { Router,  Route, Routes} from "react-router-dom"
import Login from "./components/Login.js";
import Header from "./components/Header.js";
import './App.css';

function App() {
  return (
    <div className="App">
        <Header></Header>
      <Router>
        <Routes>
          <Route path='/' element={<Login></Login>}>
           
          </Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
