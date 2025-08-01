import React from 'react'
import { useSelector } from 'react-redux'

const MainContent = () => {
  const {theme}=useSelector(state=>state.data)

  return (
 
        <div className={`px-4 mt-5`} >
            <h2 className='text-xl text-center font-bold'>Lorem Text Generator</h2>
            <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, soluta magnam ab enim aliquid at sapiente, accusamus adipisci beatae, sunt hic numquam. Ullam tempore, non recusandae vel necessitatibus totam velit exercitationem cupiditate hic similique explicabo veritatis perferendis vitae perspiciatis sint dicta cum odit a aliquid voluptatem sunt fugit atque. Magnam vel in consequuntur, dolore quis iusto quia voluptatibus ratione. Hic obcaecati aspernatur architecto impedit perspiciatis maiores a pariatur amet ipsa! Perferendis, quam esse maiores eveniet ab praesentium, nesciunt suscipit, ducimus explicabo ut in vero harum quaerat nihil veritatis aspernatur. Rem doloremque explicabo reiciendis. Minus officiis, placeat reiciendis, perspiciatis voluptates eum suscipit provident eligendi delectus, eveniet ducimus atque dolores quaerat. Maiores similique praesentium repellat possimus cumque velit dolor sunt, illo debitis.</p>
        </div>
  )
}

export default MainContent
