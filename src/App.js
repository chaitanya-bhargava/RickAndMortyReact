import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Characters from './pages/Characters';
import Episodes from './pages/Episodes';
import Home from './pages/Home';
import Locations from './pages/Locations';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='characters' element={<Characters/>}/>
          <Route path='locations' element={<Locations/>}/>
          <Route path='episodes' element={<Episodes/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
