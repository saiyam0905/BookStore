import React from 'react'

function Cards({item}) {
console.log(item)
  return (
    <>
    <div className='mt-4 my-1 p-3 '>
    <div className="card bg-base-100 w-[300px] h-[520px] shadow-lg flex flex-col hover:scale-105 duration-200 dark:bg-slate-950 dark:text-white border-2 border-white ">
  <figure>
    <img 
      src={item.image}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.type}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className=" rounded-md border border-black bg-white text-black px-4 py-1">${item.price}
</div>

<div className="relative overflow-hidden cursor-pointer rounded-md border border-black bg-white text-black px-4 py-1 
    transition-all duration-500 ease-in-out 
    before:absolute before:top-0 before:left-0 
    before:w-0 before:h-full before:bg-black 
    hover:before:w-full 
    before:transition-all before:duration-500 before:ease-in-out 
    before:z-0 z-10 flex items-center justify-center 
    hover:text-white">
  <span className="relative z-10">Buy Now</span>
</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards



