import './App.scss';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header> <NavBar/> </header>

      <div className='home' id='div-home'> <Home/> </div>
      <br/>
      
      <div className='about' id='div-about'> About </div>
      <br/>

      <div className='languages' id='div-languages'> Languages </div>
      <br/>

      <div className='projects' id='div-projects'> Projects </div>
      <br/>

      <div className='contact' id='div-contact'> Contact </div>
      <br/>
      
    </div>
  );
}

export default App;
