import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from "./components/Home";
import About from './components/About';
import Music from './components/Music';
import Gallery from './components/Gallery';
import './App.css';


function App() {  
  return (
     <>
       <Routes>
         <Route path='/' element={<Layout />}>
           <Route index element={<Home />}/>
           <Route path='/about' element={<About />}/> 
           <Route path='/music' element={<Music />}/>
           <Route path='/gallery' element={<Gallery />}/>
         </Route>
       </Routes>
     </>
  );
}

export default App;    
