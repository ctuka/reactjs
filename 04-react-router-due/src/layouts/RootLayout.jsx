import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <Container className='root-layout'>
        <Header />
        <div className='outlet-container'>
            <Outlet />
            </div>
            
        <Footer />
    </Container>
  )
}
