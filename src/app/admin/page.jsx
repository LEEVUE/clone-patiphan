import React from 'react'
import AdminNav from './components/AdminNav'
import Footer from './components/Footer'
import SideNav from './components/SideNav'
import Content from './components/Content'
import Container from '../components/Container'

function Admin() {
  return (
    <Container>
      <AdminNav />
        <div className="flex-grow">
          <div className='container mx-auto'>
              <div className='flex justify-between mt-10'>
                  <SideNav />
                  <Content />
              </div>
          </div>
        </div>
      <Footer />
    </Container>
  )
}

export default Admin
