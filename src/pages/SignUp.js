import React from 'react'

const SignUp = () => {
  return (
      <div>
      <div className="grid gap-2">
      <h1 className='text-2xl font-bold mb-6'>SIGN-IN</h1>
      <div className='flex flex-col gap-4'>
        <label htmlFor="emailID">Email Address</label>
        <input type="text" className=' outline-none border-gray-400 border-b-2 focus:border-indigo-500 border-solid p-6 w-[26rem] bg-transparent' placeholder='enter email' id='emailID' />
    
       <label htmlFor="emailID">Email Address</label>
                  <input type="text" className=' outline-none border-gray-400 border-b-2 focus:border-indigo-500 border-solid p-6 w-[26rem] bg-transparent' placeholder='enter email' id='emailID' />
                  
       <label htmlFor="emailID">Email Address</label>
                  <input type="text" className=' outline-none border-gray-400 border-b-2 focus:border-indigo-500 border-solid p-6 w-[26rem] bg-transparent' placeholder='enter email' id='emailID' />
                  
       <label htmlFor="emailID">Email Address</label>
            <input type="text" className=' outline-none border-gray-400 border-b-2 focus:border-indigo-500 border-solid p-6 w-[26rem] bg-transparent' placeholder='enter email' id='emailID' />
    
      </div>

      <button className='bg-blue-800 mt-4 text-center text-md text-white p-3 rounded-lg shadow-xl place-self-start mb-5'>REGISTER</button>
      <span className='place-start'>Have an account?<a href="#">Login</a></span>
      </div>
      </div>
  )
}

export default SignUp