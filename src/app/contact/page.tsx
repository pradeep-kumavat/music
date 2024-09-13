"use client"

import React, {useState, FormEvent} from 'react';
import { Meteors } from "@/components/ui/meteors";


function MeteorsDemo() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState('');

  const handlesubmit = (event: FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    console.log('Submitted:', { email, message });
    setEmail('')
    setMessage('')
    alert('Message Submitted')
  }

  return (
    <div className=" h-screen max-h-[100vh] text-white">
      <div className=" w-full h-screen relative border ">
        <div className="absolute inset-0 h-full w-full  bg-gray-900 " />
        <div className="relative shadow-xl  h-[100vh] border overflow-hidden ">
         
          <div className="text-center flex flex-col justify-center items-center mt-40 ">
            <h1 className='text-lg md:text-5xl font-bold font-serif'>
              Contact Us
            </h1>
            <p className="text-neutral-300 max-w-lg my-2 text-sm text-center">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>

        {/* form section */}
        <div className='mt-4 flex  h-80 w-96'>
        <form onSubmit={handlesubmit} className='flex flex-col items-center  w-full gap-4 mt-4'>
          <input 
          type="email"
          value={email} 
          placeholder='Enter your email'
          onChange={(e) => setEmail(e.target.value)}
          required
          className='w-4/5 rounded-lg text-gray-400 bg-black p-4 text-sm'/>

          <textarea 
          value={message}
          onChange={(e) => setMessage(e.target.value)} 
          placeholder='Your message'
          rows={5}
          required
          className='w-4/5 h-4/5 rounded-lg text-gray-400 p-4 text-sm bg-black'></textarea>

          <div className='flex justify-start items-start w-4/5' >
          <button 
          type='submit'
          className='border p-1 rounded-md  bg-teal-500  focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 text-sm'>Send Message</button>
          </div>
       
          
       </form>
        </div>
      
          </div>
              
          

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
   
  );
 
}

export default MeteorsDemo



