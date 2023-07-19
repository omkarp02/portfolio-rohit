import Image from 'next/image'
import React from 'react'
import LinkedInImage from '@/public/linkedin.svg'
import GithubImage from '@/public/github.svg'
import InstagramImage from '@/public/instagram.svg'
import { useRouter } from 'next/router'

const Footer = () => {
  
    const router = useRouter()
  
    return (
    <footer className='my-4 text-white d-flex justify-content-center'>
        <Image className='h-100 mx-3 cursor-pointer' onClick={()=> router.push('https://linkedin.com/in/opwebdev')} style={{width: '3rem'}} src={LinkedInImage} alt='linkedin' />
        <Image className='h-100 mx-3 cursor-pointer' onClick={()=> router.push('https://github.com/omkarp02')} style={{width: '3rem'}} src={GithubImage} alt='linkedin' />
        <Image className='h-100 mx-3 cursor-pointer' onClick={()=> router.push('https://www.instagram.com/pawar_omkar__/')} style={{width: '3rem'}} src={InstagramImage} alt='linkedin' />
    </footer>
  )
}

export default Footer