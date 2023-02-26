import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { MainRoute } from './Routes/MainRoutes';

function App() {

  const [visibleNav, setVisibleNav ] = useState(true);
  const [visibleFooter, setVisibleFooter ] = useState(true);
  const location  = useLocation();
    // console.log("location",location)

    useEffect(()=>{

      if(location){
    
        if(location.pathname === "/register" || location.pathname === "/login" ){
          setVisibleNav(false);
          setVisibleFooter(false);
        }else{
          setVisibleNav(true);
          setVisibleFooter(true);
        }
      }
    },[location])

  return (
    <div className="App">
      { visibleNav && <Navbar />}
       <MainRoute />
      { visibleFooter && <Footer />} 
    </div>
  );
}

export default App;
