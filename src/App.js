import 'animate.css';
import './App.css';
import './styles/header.css';
import About from '../src/components/about';
import Contact from '../src/components/contact';
import Footer from '../src/components/footer';
import Header from './components/header';
import Portfolio from '../src/components/portfolio';
import Resume from '../src/components/resume';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Profilepic from "./images/Profilepic.jpg";

function App() {
  // <h1 class="animate_animated animate__fadeIn">Welcome Friend!</h1>
  return (
    <div className="App">
      {/* <h1 class="animate_animated animate__fadeIn">Welcome Friend!</h1> */}
      <BrowserRouter>
      <Header></Header>     
      <img className='smile' src={Profilepic} alt = "Handsome Man"/>
      <h1 class="animate__fadeIn">Welcome Friend!</h1>
      <Routes>
        <Route path = '/' element={<About/>}></Route>
        <Route path = '/Contact' element={<Contact/>}></Route>
        <Route path = '/Portfolio' element={<Portfolio/>}></Route>
        <Route path = '/Resume' element={<Resume/>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
