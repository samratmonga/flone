import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import './Assets/Styles/Main.css'
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Outlet/>
      <Footer/>
      
    </div>
  );
}

export default App;
