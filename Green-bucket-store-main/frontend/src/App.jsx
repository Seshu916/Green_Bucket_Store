import React from "react";
import Body from "./Components/Body";
import "./App.css"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
const App=()=>{
  return(<>
  <div className="app-container">
  <Header/>
  <Body/>
  <Footer/>
  </div>
  
  </>)
}
export default App;