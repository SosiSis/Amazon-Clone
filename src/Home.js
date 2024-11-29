import React from 'react'
import "./Home.css"
import Product from './Product'
import banner from './assets/banner.jpg'
import item1 from './assets/item1.jpg'
import item2 from './assets/item2.jpg'
import item3 from './assets/item3.jpg'
import item4 from './assets/item4.jpg'
import item5 from './assets/item5.jpg'




function Home() {
  return (
    <div className='home'>
        <div className='home__container'>

            <img  className='home__image'alt="Delightful deals for everyone" src={banner} />
                <div className='home__row'>
                  <Product 
                    id='123455'
                    title="The Lean  startup"
                    price={11.96}
                    rating={5}
                    image={item1}
                    initialPrice={11.96}
                  />
                  <Product 
                  id='223455'
                  title="The Lean  startup"
                  price={9.96}
                  rating={5}
                  image={item2}
                  
                  initialPrice={9.96}
                />
                  
                </div>
                <div className='home__row'>
                  <Product
                  id='123355'
                  title="The Lean  startup"
                  price={119}
                  rating={5}
                  image={item2}
                  initialPrice={119}
                   />
                  <Product 
                  id='133455'
                  title="The Lean  startup"
                  price={11.96}
                  rating={3}
                  image={item3}
                  initialPrice={11.96}
                   />
                  <Product
                  id='123455'
                  title="The Lean  startup"
                  price={796}
                  rating={3}
                  image={item4}
                  initialPrice={796}
                   />
                </div>
                <div className='home__row'>
                  <Product
                  id='523455'
                  title="The Lean  startup"
                  price={116}
                  rating={2}
                  image={item5}
                  initialPrice={116}
                   />
                 
                </div>
        </div>
    </div>
  )
}

export default Home
