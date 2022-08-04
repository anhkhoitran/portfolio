import React from 'react'

const Home = () => {
  return (
    <div name="home" className='bg-slate-800 w-full h-screen'>
        <div className='max-w-[1000px] px-6 mx-auto flex flex-col justify-center h-full'>
            <p className='text-white text-2xl'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl text-[#ccd6f6] font-bold'>Tran Anh Khoi</h1>
            <h2 className='text-4xl sm:text-7xl text-[#8892b0] font-bold'>I'm a front-end developer.</h2>
            {/* <p className='text-[#8892b0] py-4'>blah blah</p> */}
        </div>
    </div>
  )
}

export default Home