import Image from 'next/image'
import React from 'react'
import technologies from '../layout/technologies'
import { useRouter } from 'next/router'


const CustomCard = ({name, description, img, link}) => {
    
    const router = useRouter()
    
    return (
        <div className="card swiper-slide" onClick={()=> router.push(link)}>
            <div className="image-content">
                <span className="overlay"></span>
                <div className="card-image">
                    <Image src={img} fill alt='asf.svg' className='w-100 h-100 card-img' />
                </div>
            </div>
            <div className="card-content">
                <h2 className="name text-gradient-primary">{name}</h2>
                <p className="description text-black">{description}</p>
            </div>
        </div>
    )
}

export default CustomCard