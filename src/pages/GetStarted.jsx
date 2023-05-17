import React from 'react'
import Navbar from '../components/Navbar'

const GetStarted = () => {
    return (
        <>
            <Navbar />
            <div className='d-flex justify-content-center align-items-center' style={{ height: "92vh" }} >
                <h3 className='border border-danger bg-danger rounded-pill px-5 py-2 text-white '>Get Started</h3>
            </div>
        </>
    )
}

export default GetStarted
