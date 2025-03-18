import React from 'react'
import list from "../../public/list.json"
import Cards from './Cards'
import { Link } from 'react-router-dom';


function Course() {

  const PaidBooks = list.filter((data)=> data.type ==="Paid");
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
      <div className='mt-28 items-center justify-center text-center '>
        <h1 className='text-2xl font-semibold md:text-4xl '>Discover, dream, and dive into stories that stay with you <span className='text-blue-800'>forever!</span>📖🌟
        </h1>
        <p className='mt-5'>Welcome to your ultimate reading haven! 📚✨ Whether you're chasing mysteries, unraveling history, or mastering new skills, every book here holds an adventure waiting to unfold. Turn the page and step into worlds beyond imagination—because every great journey begins with a story. Are you ready to discover yours?</p>
      </div>
      <div className="flex flex-col items-center mt-4">
<Link to="/">
<button className='relative overflow-hidden rounded-md  border-2 border-black bg-white text-black px-4 py-1 
    transition-all duration-500 ease-in-out 
    before:absolute before:top-0 before:left-0 
    before:w-0 before:h-full before:bg-black 
    hover:before:w-full 
    before:transition-all before:duration-500 before:ease-in-out 
    before:z-0 z-10 flex items-center justify-center 
    hover:text-white'> 
    <span className='relative z-10'>Back</span>
  </button>
</Link>
</div>
</div>
<div className='mt-12 grid grid-cols-4'>
  {
    PaidBooks.map((item)=>(
      
      <Cards key={item.id} item={item}/>
    ))
  }
</div>
    </>
  )
}

export default Course
