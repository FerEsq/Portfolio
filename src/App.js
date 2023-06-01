import './App.scss';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Languages from './components/Languages';

function App() {

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  
  return (
    <div className="App">
      <header> <NavBar/> </header>

      <div id='div-home'> <Home/> </div>
      <br/>
      
      <div id='div-about'> <About/> </div>
      <br/>

      <div id='div-languages'> <Languages/> </div>
      <br/>

      <div className='projects' id='div-projects'> Projects </div>
      <br/>

      <div className='contact' id='div-contact'> Contact </div>
      <br/>
      
    </div>
  );
}

export default App;
