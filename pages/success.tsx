import React from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Success = () => {

const router = useRouter();
useEffect(() => {
    setTimeout(() => {
        router.push('/');
    }, 3000)
}, [])
    
return (
    <div>
        <h1>Success</h1>
    </div>
  )
}

export default Success