import React, { useEffect, useState } from 'react'
import logo from "../assets/pngtree-creative-company-logo-png-image_1197025.jpg"
import { Link, NavLink } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../features/ThemeSlice'
import { FaBars } from "react-icons/fa";
const Header = () => {
    const value=localStorage.getItem('theme')||'theme1'
    const {theme}=useSelector(state=>state.data)
    console.log("theme in header ", theme)
    const [selectedTheme,setSelectedTheme]=useState(value)
    const [screenWidth,setScreenWidth]=useState(window.innerWidth)
    const [openSlider,setSlider]=useState(false)
    const dispatch=useDispatch()
    useEffect(()=>{
dispatch(changeTheme(value))
const handleResize=()=>{
  setScreenWidth(window.innerWidth)
  console.log("iner widt  ", window.innerWidth)
}
window.addEventListener('resize',handleResize)
return ()=>{
  window.removeEventListener('resize',handleResize)
}
    },[])
    console.log("selected theme is ",localStorage.getItem('theme')||'theme1')
  return (
    <>
    <div className={` h-[50px]  px-2 ${theme==="theme3"?"bg-blue-900 text-white": "bg-[#C5BFC9] "} flex justify-between items-center `}>
        
        
        {screenWidth<650&& 
        <section className={`${openSlider?"rotate-90":""} cursor-pointer duration-700`}>
          <FaBars style={{fontWeight:"bold",fontSize:"30px"}} onClick={()=>setSlider(!openSlider)}/>
        </section>
        }
      
       
       {screenWidth>650 &&  <>
       <section className='flex gap-3'>
          <span className='font-bold text-xl'>ShopEase</span>
            <img src={logo} width={30}/>
        </section>
       <section className='flex gap-4 font-bold'>
            <span>
                <NavLink to="/" className={({isActive})=>isActive?"text-blue-700 font-bold":""}>Home</NavLink>
            
        </span>
        <span>
            <NavLink to="/about" className={({isActive})=>isActive?"text-blue-700 font-bold":""}>About</NavLink>
            
        </span>
        <span>
             <NavLink to="/contact" className={({isActive})=>isActive?"text-blue-700 font-bold":""}>Contact</NavLink>
            
        </span>
        </section>
        </>}
        <section className='flex gap-4 items-center'>
      <select value={selectedTheme} className={`${theme==="theme3"?"bg-blue-200 text-black":"bg-white"} p-1.5 rounded-lg font-semibold`} onChange={(e)=>{setSelectedTheme(e.target.value);localStorage.setItem('theme',e.target.value); dispatch(changeTheme(e.target.value))}}>
        <option value='theme1'>Theme-1</option>
         <option value='theme2'>Theme-2</option>
          <option value='theme3'>Theme-3</option>
      </select>
        </section>
      </div>
  { screenWidth<650 && <div className={`h-auto ${openSlider?"translate-y-[0%]":"translate-y-[-200%]"} absolute duration-700 z-10 overflow-hidden  bg-white w-full`}>
  <section className='flex  flex-col gap-4 font-bold items-start px-6 py-2'>
            <span>
                <NavLink to="/" className={({isActive})=>isActive?"text-blue-700 font-bold":""}>Home</NavLink>
            
        </span>
        <span>
            <NavLink to="/about" className={({isActive})=>isActive?"text-blue-700 font-bold":""}>About</NavLink>
            
        </span>
        <span>
             <NavLink to="/contact" className={({isActive})=>isActive?"text-blue-700 font-bold":""}>Contact</NavLink>
            
        </span>
        </section>
          </div>}
          </>
  

  )
}

export default Header
