
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import {Footer} from "./Components/Footer"
import { Navbar } from './Components/Navbar';
import Allroutes from './routes/Allroutes';

function App() {

  const [visibleNav, setVisibleNav ] = useState(true);
  const [visibleFooter, setVisibleFooter ] = useState(true);
  const location  = useLocation();
    // console.log("location",location)

    useEffect(()=>{

      if(location){
    
        if(location.pathname === "/register" || location.pathname === "/login" || location.pathname === "/checkout" || location.pathname === "/admin"  ){
          setVisibleNav(false);
          setVisibleFooter(false);
        }
        else if(location.pathname==="/cart"){
          setVisibleNav(true);
          setVisibleFooter(false);
        }
        else{
          setVisibleNav(true);
          setVisibleFooter(true);
        }
      }
    },[location])

  return (
    <div className="App">
      { visibleNav && <Navbar />}
       <Allroutes />
      { visibleFooter && <Footer />} 
    </div>
  );

}

export default App;
