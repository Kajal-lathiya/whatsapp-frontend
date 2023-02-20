
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Home/Navbar';

import RouterApi from './Components/Routers/Router';
import Sidebar from './Components/Sidebar/SideBar';


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
   <Sidebar/>
    </div>
  );
}

export default App;
