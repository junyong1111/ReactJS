import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import Detail from './routes/Detail';
import './App.css';
function App() {
  return(
    <div>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/movie/:id' element={<Detail/>}></Route>
       </Routes>
       </BrowserRouter>

    </div>
  )
}

export default App;
