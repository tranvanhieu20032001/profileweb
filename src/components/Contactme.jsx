import React from 'react'

const Contactme = () => {
  return (
    <div name="contact" className="w-full md:h-screen pt-28">
    <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
      <div>
        <h3 className="text-4xl font-bold text-black-ct dark:text-lime-200 inline border-b-4 border-gray-500 main-text">
          Contact me
        </h3>
        <p className="py-6 dark:text-lime-100 main-text">Liên hệ với tôi nếu bạn muốn</p>
      </div>

      <div className='flex justify-center items-center'>
        <form action="https://getform.io/f/dc101700-ab99-4cb6-878c-69eae5639b33" method='POST' className='flex flex-col mx-auto w-full md:w-1/2 dark:text-lime-100'>
            <input type="text" name ='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md focus:outline-none'/>
            <input type="text" name ='email' placeholder='Enter your email' className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none'/>

            <textarea name='message' placeholder='Enter your message' rows='10' className='p-2 bg-transparent border-2 rounded-md focus:outline-none'/>
            <button className='text-white bg-gradient-to-b from-cyan-500 to to-blue-500 px-6 py-2 my-8 mx-auto fl items-center rounded-md hover:scale-105 duration-200'>Send</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Contactme