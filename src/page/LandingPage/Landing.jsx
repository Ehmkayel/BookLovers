import React from 'react'
import Hero from '../../components/Hero/Hero'
import Trending from '../../components/Trending/Trending'
import Deals from '../../components/Deals/Deals'
import Contact from '../../components/Contact/Contact'
import Categories from '../../components/Categories/Categories'
import Wishlist from '../../components/Wishlist/Wishlist'

const Landing = () => {
  return (
    <>
        <Hero/>
        <Trending/>
        <Deals/>
        <Categories/>
        <Wishlist/>
        <Contact/>
    </>
  )
}

export default Landing