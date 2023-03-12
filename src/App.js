import NavBar from './components/navBar/Navbar'
import{Routes,Route} from 'react-router-dom'
import About from './components/pages/About';
import Home from './components/pages/Home';
import Error from './components/pages/Error';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
