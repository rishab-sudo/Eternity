import React from 'react'
import HomeBanner from '../components/HomeBanner'
import HomeAbout from '../components/HomeAbout'
import HomeProduct from '../components/HomeProduct'

import OverView from '../components/OverView'
import Customer from '../components/Customer'
import TestDrive from "../components/TestDrive"


const Home = () => {

    const overviewData = [
  {
    img: require("../assets/specification/vf-spf3.jpg"),
    title: "High Strength",
    desc: "Durable panels with excellent structural performance."
  },
  {
    img: require("../assets/specification/vf-spf2.jpg"),
    title: "Weather Resistant",
    desc: "Designed to withstand harsh weather conditions."
  },
  {
    img: require("../assets/specification/vf-spf1.jpg"),
    title: "Fire Safety",
    desc: "Manufactured with high fire resistance standards."
  },
  {
    img: require("../assets/specification/vf-spf4.jpg"),
    title: "Eco Friendly",
    desc: "Sustainable and environmentally safe materials."
  }
];

  return (
    <div>
        <HomeBanner/>
       <HomeAbout/>
       <HomeProduct/>
        <OverView
      title="Product Over View"
      data={overviewData}
    />
       <Customer/>
    <TestDrive/>
    </div>
  )
}

export default Home