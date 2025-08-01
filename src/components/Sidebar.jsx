import React, { useState } from 'react'
import logo from "../assets/pngtree-creative-company-logo-png-image_1197025.jpg"
import { Link, NavLink } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme, setSideBarOpen } from '../features/ThemeSlice'
import { RxCross2 } from "react-icons/rx";
import { FaCircleArrowRight } from "react-icons/fa6";
const Sidebar = () => {
   const value=localStorage.getItem('theme')||'theme1'
    const {theme,isSidebarOpen}=useSelector(state=>state.data)
    const [selectedTheme,setSelectedTheme]=useState(value)
    console.log("sidebaropen ", isSidebarOpen)
    const dispatch=useDispatch()
  return (<>

    <div className={`lg:w-1/5 w-full shadow-lg bg-blue-100 absolute left-0 h-screen z-50 py-10 ${isSidebarOpen?"-translate-x-[100%]":"translate-x-[0%]"} duration-300`}>
        <div className='relative'>
     <span className='absolute right-2 -top-8'>
        <RxCross2 style={{fontSize:"30px",color:"#162456",fontWeight:"bolder"}} onClick={()=>dispatch(setSideBarOpen(!isSidebarOpen))}/>
        </span>   
        
    <div className='flex flex-col gap-10  items-center'>
        <section className='flex gap-2'>
         <img src={logo} width={30}/>
         <span className='text-blue-950 font-bold text-xl'>ShopEase</span>
        </section>
        <section className='flex flex-col gap-4 font-bold text-blue-950'>
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
        <section className=''>
      <select value={selectedTheme}  className={`${theme==="theme3"?"bg-blue-200 text-blue-950":"bg-white"} p-1.5 rounded-lg font-semibold`} 
      onChange={(e)=>{setSelectedTheme(e.target.value);localStorage.setItem('theme',e.target.value); dispatch(changeTheme(e.target.value))}}
      >
        <option value='theme1'>Theme-1</option>
         <option value='theme2'>Theme-2</option>
          <option value='theme3'>Theme-3</option>
      </select>
        </section>
      </div>
      </div>
      </div>
      <p className='animate-pulse duration-150 py-3'  onClick={()=>dispatch(setSideBarOpen(!isSidebarOpen))}>
        <FaCircleArrowRight style={{fontSize:"30px", fontWeight:"bolder",color:"white"}}/>
      </p>
        </>
  )
}

export default Sidebar
