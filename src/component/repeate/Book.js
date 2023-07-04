import React from 'react'
import Heading from './Heading'
import OurBook from './OurBook'
import OurBook2 from './OurBook2'
import OurBook3 from './OurBook3'
import OurBook4 from './OurBook4'
import Slider from '../students/Slider'
import BookCard from './BookCard'

export default function Book() {
    return (
        <>
            {/* <Heading />
            <OurBook />
            <OurBook2 />
            <OurBook3 />
            <OurBook4 /> */}
            <Heading />
            
            <Slider/>
            
            <BookCard/>

        </>
    )
}
