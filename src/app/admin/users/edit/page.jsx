import React from 'react'
import AdminNav from '../../components/AdminNav'
import Footer from '../../components/Footer'
import Link from 'next/link'
import Container from '../../components/Container'

function AdminEditPage() {
  return (
    <Container>
      <AdminNav />
        <div className="flex-grow">
          <div className='container mx-auto shadow-xl my-10 p-10 rounded-xl'>
              <Link href="/admin/users" className='bg-gray-500 inline-block text-white border py-2 px-3 rounded my-2'>Go back</Link>
              <hr className='my-3' />
              <h3 className='text-3xl'>Admin Edit User Data Page</h3>
              <form action="">
                  <input type="text" className='w-[300px] block bg-gray-200 text-gray-400 border py-2 px-3 rounded text-lg my-2' 
                          placeholder='Username' value="Username"
                  />
                  <input type="email" className='w-[300px] block bg-gray-200 text-gray-400 border py-2 px-3 rounded text-lg my-2' 
                          placeholder='Email' value="Email"
                  />
                  
                  <input type="password" className='w-[300px] block bg-gray-200 text-gray-400 border py-2 px-3 rounded text-lg my-2' 
                          placeholder='Password' value="Password"
                  />
                  <button type='submit' className='bg-green-500 text-white border py-2 px-3 rounded text-lg my-2'>Update User</button>
              </form>
          </div>
        </div>
      <Footer />
    </Container>
  )
}

export default AdminEditPage
