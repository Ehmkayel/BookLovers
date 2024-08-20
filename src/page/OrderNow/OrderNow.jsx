import React, { useEffect, useState } from 'react'
import Modal from '../../components/Reusable/Modal'
import Landing from '../LandingPage/Landing'
import OrderForm from './OrderForm'



const OrderNow = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const closeModal = () => {
        setIsModalOpen(false)
    }
    useEffect(() => {
        setIsModalOpen(true)
    }, [])
  return (
    <main className='order-now'>
        <Landing/>
       
        <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        title="Order your Favorite Book on BookLovers">
            <div className=''>
                <OrderForm/>
            </div>
        </Modal>
    </main>
  )
}

export default OrderNow