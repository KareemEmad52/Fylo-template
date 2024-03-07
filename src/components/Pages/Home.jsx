import React from 'react'
import Landing from '../Landing/Landing'
import Features from '../Features/Features'
import StayProductive from '../StayProductive/Stayproductive'
import Testimonials from '../Testimonial/Testimonial'
import GetStarted from '../GetStarted/GetStarted'

export default function Home() {
    return (
        <>
            <Landing />
            <Features />
            <StayProductive />
            <Testimonials />
            <GetStarted />
        </>
    )
}
