import Link from 'next/link'
import React from 'react'
const Header = () => {
  return (
    <div className='flex justify-around  p-4 bg-blue-600 w-full'>
        <div className='max-w-2xl bg-blue-400 mx-auto'>
        <Link href="/" className='px-2 py-2 border-1 bg-white text-blue-600 font-bold' >Home</Link> 
      
 
 <Link href="/todos" className='px-2 py-2  bg-white text-blue-600 font-bold' >Todos</Link> 
</div>

    </div>
  )
}

export default Header
