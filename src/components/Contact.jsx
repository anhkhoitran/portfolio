import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-slate-800 flex justify-center items-center'>
        <form action="" className='flex flex-col max-w-[600px] items-center w-full'>
            <h1 className='text-4xl font-bold inline border-b-4 text-gray-300 my-4'>Contact</h1>
            <div className='px-4'>
                <input className='p-2 w-full rounded-md' type="text" placeholder='Name' name='name' />
                <input className='p-2 my-2 w-full rounded-md' type="email" placeholder='Email' name='email' />
                <textarea className='w-full p-2 rounded-md' name="message" cols="30" rows="10" placeholder='Your message'></textarea>
            </div>
            <button className='px-4 py-2 bg-white text-gray-700 rounded-lg my-4 hover:bg-black hover:text-white font-bold '>Submit</button>
        </form>
    </div>
  )
}

export default Contact