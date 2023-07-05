import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function StudentLogout() {
    const navigate=useNavigate()
    useEffect(()=>{
        localStorage.clear()
        navigate("/")
    })
  return (
    null
  )
}
