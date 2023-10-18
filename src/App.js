import {BrowserRouter, Routes, Route} from 'react-router-dom';
import  Home from './pages/Home';
import Hobbies from './pages/Hobbies';
import NoPage from './pages/NoPage';
import Professor from './pages/Professor';
import Experimental from './pages/Experimental'
function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/ >} />
            <Route path="/home" element={<Home/ >} />
            <Route path="/hobbies" element={<Hobbies/ >}/>
            <Route path='/professor' element={<Professor/>}/>
            <Route path='/experimental' element={<Experimental/>}/>
            <Route path="*" element={<NoPage/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;
  