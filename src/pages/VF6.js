import React from 'react'

import ProductPageBanner from '../components/ProductPageBanner'
import "./VF6.css"
import OverView from "../components/OverView";

import HomeSpecification from '../components/HomeSpecification'
import Vf6Spec from '../components/Vf6Spec';

const VF6 = () => {

  const overviewData = [
  {
    img: require("../assets/products/vinfast_vf7-01.jpg"),
    title: "High Strength",
    desc: "Durable panels with excellent structural performance."
  },
  {
     img: require("../assets/products/vinfast_vf7-02.jpg"),
    title: "Weather Resistant",
    desc: "Designed to withstand harsh weather conditions."
  },
  {
      img: require("../assets/products/vinfast_vf7-03.jpg"),
    title: "Fire Safety",
    desc: "Manufactured with high fire resistance standards."
  },
  {
      img: require("../assets/products/vinfast_vf7-04.jpg"),
    title: "Eco Friendly",
    desc: "Sustainable and environmentally safe materials."
  },
    {
      img: require("../assets/products/vinfast_vf7-05.jpg"),
    title: "Eco Friendly",
    desc: "Sustainable and environmentally safe materials."
  },
    {
      img: require("../assets/products/vinfast_vf7-06.jpg"),
    title: "Eco Friendly",
    desc: "Sustainable and environmentally safe materials."
  },
    {
      img: require("../assets/products/vinfast_vf7-07.jpg"),
    title: "Eco Friendly",
    desc: "Sustainable and environmentally safe materials."
  },
    {
      img: require("../assets/products/vinfast_vf7-08.jpg"),
    title: "Eco Friendly",
    desc: "Sustainable and environmentally safe materials."
  },
    {
      img: require("../assets/products/vinfast_vf7-09.jpg"),
    title: "Eco Friendly",
    desc: "Sustainable and environmentally safe materials."
  },
];

return (
    <>
   <ProductPageBanner
  image={require("../assets/vf6_Banner.jpg")}
  alt="VF6 Electric Vehicle"
/>
<HomeSpecification
reverse
title="VF 6"
tagline="A compact and stylish electric SUV"
price="₹ 18,50,000"
battery="59.6kWh"
wheel="45cm"
adas="Level 2"
image= {require("../assets/vf6_intro.jpg")}
/>

 <OverView
      title="Product Over View"
      data={overviewData}
    />

<Vf6Spec/>

   

 </>
  )
}

export default VF6