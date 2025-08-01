import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Cards from "./components/Cards";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import { useDispatch, useSelector, } from "react-redux";
import { store } from "./features/Store";
import Sidebar from "./components/Sidebar";
import { changeTheme } from "./features/ThemeSlice";

function App() {
  const dispatch=useDispatch()
 const {theme,isSidebarOpen}=useSelector(state=>state.data)
 useEffect(()=>{
dispatch(changeTheme(localStorage.getItem('theme') || 'theme1'))
 },[])
  return (
   <div className={`${theme==='theme2'?"font-pacifico":"font-serif"} ${theme==='theme3'?"bgImage ":""} `}>
        <BrowserRouter>
          { theme==="theme2"?<div className="flex  h-screen -mt-6">
          <Sidebar/>
          <div className={`flex-1 ${!isSidebarOpen?"ml-48":"-ml-14"}  overflow-y-auto p-6 h-screen bg-blue-950 text-white`}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <MainContent />
                  <Cards />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          </div>
          </div>
          :
          <>
   <Header />
    <Routes>
            <Route
              path="/"
              element={
                <>
                  <MainContent />
                  <Cards />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
   </>
          }
        </BrowserRouter>
   </div>
  );
}

export default App;
