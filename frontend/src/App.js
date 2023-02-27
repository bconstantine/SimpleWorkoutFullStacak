import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Browser Router wraps everywhere when we use the router
//routes wrap all the route
//route is for individual route

//pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className = "pages">
          <Routes>
            <Route 
              path = "/" /* what is the path for this route? / means it is a homepage */
              element = {<Home/>} /* what element do you want to render on this route? */
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
