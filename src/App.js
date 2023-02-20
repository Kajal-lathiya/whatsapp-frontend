
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Home/Navbar';

import RouterApi from './Components/Routers/Router';


function App() {
  return (
    <div className="App">
      <Routes>
        {RouterApi.map((navrt) => {
          return (
            <Route key={navrt.id} path={navrt.path} element={navrt.element} />
          )
        })}
      </Routes>
   <Navbar/>
  
    </div>
  );
}

export default App;
