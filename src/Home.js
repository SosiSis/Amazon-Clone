import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>

            <img  className='home__image'alt="Delightful deals for everyone" src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71j8damPo5L._SX3000_.jpg" />
                <div className='home__row'>
                  <Product 
                    id='123455'
                    title="The Lean  startup"
                    price={11.96}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v5._SY608_CB573698005_.jpg'
                    initialPrice={11.96}
                  />
                  <Product 
                  id='223455'
                  title="The Lean  startup"
                  price={9.96}
                  rating={5}
                  image='	https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/41X4x4lFQBL._SR270,360_.jpg
                  '
                  initialPrice={9.96}
                />
                  
                </div>
                <div className='home__row'>
                  <Product
                  id='123355'
                  title="The Lean  startup"
                  price={119}
                  rating={5}
                  image='https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/41ZTAIZANUL._SR270,360_.jpg
                  '
                  initialPrice={119}
                   />
                  <Product 
                  id='133455'
                  title="The Lean  startup"
                  price={11.96}
                  rating={3}
                  image='	https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/41sxkAKd+6L._SR270,360_.jpg
                  '
                  initialPrice={11.96}
                   />
                  <Product
                  id='123455'
                  title="The Lean  startup"
                  price={796}
                  rating={3}
                  image='https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/41cVuXdM8TL._SR270,360_.jpg'
                  initialPrice={796}
                   />
                </div>
                <div className='home__row'>
                  <Product
                  id='523455'
                  title="The Lean  startup"
                  price={116}
                  rating={2}
                  image='https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/41cPkLyz2WL._SR270,360_.jpg'
                  initialPrice={116}
                   />
                 
                </div>
        </div>
    </div>
  )
}

export default Home
