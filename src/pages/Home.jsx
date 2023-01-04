import React, { Fragment } from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <Fragment>
        <Announcement />
        <Navbar />
        <Slider />
        <Categories />
        <Products />
        <NewsLetter />
        <Footer />
    </Fragment>
  )
}

export default Home;