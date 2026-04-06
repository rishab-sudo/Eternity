import React from 'react'
import ProductPageBanner from '../components/ProductPageBanner'
import "./VF6.css"
import OverView from "../components/OverView";

import HomeSpecification from '../components/HomeSpecification'
import Vf7Spec from "../components/Vf7Spec"
import TestDrive from '../components/TestDrive';

const VF7 = () => {

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
  images={[
    { src: require("../assets/banner/vf7-banner1.png"), alt: "Banner 1" },
   { src: require("../assets/banner/vf7-banner2.png"), alt: "Banner 2" },
     { src: require("../assets/banner/vf7-banner3.png"), alt: "Banner 3" },
  ]}
/>

<HomeSpecification
  reverse
  title="VF 7"
  tagline="A modern and sporty 5-Seater eSUV"
  price="₹ 21,89,000"
  battery="70 kWh"
  wheel="48.26 cm"
  adas="Level 2"
  image={require("../assets/vf7-intro.png")}
/>

 <OverView
      title="Product Over View"
      data={overviewData}
    />

<Vf7Spec/>

    <TestDrive/>

 </>
  )
}

export default VF7;