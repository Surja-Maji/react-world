
import Home from "./Pages/Home";
import CountryDetail from "./Pages/CountryDetail";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App() {
   

  return (
    <div className="APP">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/countries/:countryCode' element={<CountryDetail/>} />
          <Route path='*' element={<h2>404 error not found</h2>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
