import React from 'react'
import { Link } from 'wouter'

export const Header = () => {
  return (
    <div className="container mx-auto px-4 ">
    <h1 className="flex justify-center items-center py-4 font-bold text-4xl text-white bg-indigo-500 rounded gap-x-10"><button className="flex  my-5 text-indigo-500 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
      <Link to={"/"}>Home</Link>
    </button>Recetarium </h1>
    
  </div>
  )
}
