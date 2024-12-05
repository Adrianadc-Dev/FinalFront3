
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail"
import Layaut from "./Layauts/Layaut";



function App() {
  return (
      <div className="App">
        
          <Routes>
            <Route path="/" element={<Layaut/>}>
              <Route path="/" element={<Home />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/favs" element={<Favs />}/>
              <Route path="/detail/:id" element={<Detail />}/>
              <Route path="*" element={<h1>Error 404 - not faund</h1>}/>
            </Route>
          </Routes>
          
       
      </div>
  );
}

export default App;
