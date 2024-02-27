import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import Container from '../components/Container'

function Login() {
  return (
    <Container>
      <Navbar />
        <div className='flex-grow'>
          <div className='flex justify-center items-center'>
              <div className='w-[400px] shadow-xl p-10 mt-5 rounded-xl'>
                  <h3 className='text-3xl'>Login</h3>
                  <hr className='my-3' />
                  <form action="">
                      <input className='w-full bg-gray-200 border py-2 px-3 rounded text-lg my-2' type="email" placeholder='Email' />
                      <input className='w-full bg-gray-200 border py-2 px-3 rounded text-lg my-2' type="password" placeholder='Password' />
                      <button className='bg-green-500 text-white border py-2 px-3 rounded text-lg my-2' type='submit'>Sign In</button>
                      <hr className='my-3' />
                      <p>
                        Don't have an account yet? go to 
                        <Link className='text-blue-500 hover:underline' href="/register">Register</Link> 
                        Page
                      </p>
                  </form>
              </div>
          </div>
        </div>
      <Footer />
    </Container>
  )
}

export default Login
