import React from 'react'
import EmployeeHeading from './EmployeeHeader'
import Slider from '../students/Slider'
import StudentHome from '../students/StudentHome'
import EmployeeHomeCart from './EmployeeHomeCart'

export default function EmployeeHome() {
    return (
        <>
            <EmployeeHeading />
           <EmployeeHomeCart/>
        </>
    )
}
