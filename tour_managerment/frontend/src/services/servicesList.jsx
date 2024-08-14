import React from 'react'
import ServicesCard  from './servicesCard'
import {Col} from "reactstrap"
import weatherImg from "../assets/images/weather.png"
import giudeImg from "../assets/images/guide.png"
import customzationImg from "../assets/images/customization.png"

const servicesData=[
        {
            imgUrl: weatherImg,
            title: "Calculate Weather",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
            imgUrl: giudeImg,
            title: "Best Tour Guide",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
            imgUrl: customzationImg,
            title: "Customization",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },

]

const servicesList = () => {
  return (
    <>
    {
        servicesData.map((item,index) => (
            <Col lg="3" key={index}>
                <ServicesCard item={item}/>
            </Col>
        ))
    }
    </>
  )
}

export default servicesList