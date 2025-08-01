
import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import { FaRegStar } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addAllCards, changeTheme } from '../features/ThemeSlice';

const Cards = () => {
    const [data,setData]=useState([])
    const [open,setOpen]=useState(false)
    const dispatch=useDispatch()
    const {theme,cardsData,isSidebarOpen}=useSelector(state=>state.data)
    const fetchData=async()=>{
        try{
            setOpen(true)
        const response=await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        if(result?.length){
            setData(result)
            dispatch(addAllCards(result))
        }
        setOpen(false)
        }catch(err){
            console.log("failed to load")
             setOpen(false)
        }

    }
   
  return (
    <>
    <Loader open={open}/>
    <div className={`flex justify-center  mt-6 `}>
        <div className='w-[90%]' >
         <button className={`${theme==='theme2'?"text-blue-950 bg-white ":"bg-blue-900 text-white"} rounded-lg font-bold p-1 px-3 cursor-pointer ${data?.length===0 &&  cardsData?.length===0?"animate-bounce duration-150":""}`}onClick={fetchData}>View Cards</button>
            <h2 className='font-bold text-xl p-1 mt-5'>{`Total Card Found : ${cardsData?.length}`}</h2>
            <div className={`grid ${theme==='theme2'&& !isSidebarOpen?"md:grid-cols-2 lg:grid-cols-2 gap-5 sm:grid-cols-1":"md:grid-cols-2 lg:grid-cols-3 gap-5 sm:grid-cols-1"} `}>
            {cardsData?.map((item)=>{
                const {id,title,price,description,category,image,rating}=item
                return(
                    <div className='shadow-lg hover:scale-105 transition-all duration-100 rounded-md w-[100%] h-auto min-h-[150px] bg-white text-blue-950 relative p-2 px-4'>
                       <div className='grid grid-cols-[30%_70%] gap-1 '>
                       <div >
                        <img src={image} width={80} />
                        </div>
                        <div className='text-start'>
                        <p className='text-sm font-semibold '>{title}</p>
                        <p className='bg-green-700 px-2 gap-2 text-white w-[60px] flex items-center rounded-md mt-1'>
                        <span className='text-sm   font-bold'>{rating?.rate} </span>
                        <span><FaRegStar/></span>
                        </p>
                        <p className='text-xs text-justify mt-2'>{description.length>200?description.substring(0,100)+"...":description}</p>
                        <p className='text-sm font-semibold text-zinc-600 '>{`Quantity : ${rating?.count}`}</p>
                        </div>

                        </div>
                            <div>
                        
                        
                        <p className='bg-[#f27e1f] text-white font-semibold px-3 absolute bottom-0 right-0 rounded-tl-md'>{price} $</p>
                        </div>
                        </div>
                )
                
                

            }
                 
            )
            }
            </div>
        </div>
        </div>
        </>
  )
}

export default Cards
