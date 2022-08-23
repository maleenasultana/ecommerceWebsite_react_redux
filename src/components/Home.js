import React from 'react'
import "../components/Home.css";
import Products from './Products';

function Home() {
  return (
    <div className='hero'>
      <div className="card bg-dark text-white border-0">
  <img src="https://th.bing.com/th/id/OIP.oZgDj2WUkwzG0A1Il8yucwHaE6?w=261&h=180&c=7&r=0&o=5&pid=1.7 " width="800px" height="400px" className="card-img" alt="background image"/>
  <div className="card-img-overlay d-flex flex-column justify-content-center">
    <div className='container'>
      <h5 className="card-title display-3 fw-border mb-0 ">BEST COLLECTION</h5>
   
    <p className="card-text lead fs-2">CHECKOUT ALL THE LATEST BRANDS AND TRENDS</p>
    <p className="card-text">World's Best Collection For Best People... </p>
    
  </div>
</div>
     </div> 
     <Products/>   
    </div>
  )
}

export default Home