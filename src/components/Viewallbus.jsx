import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const Viewallbus = () => {
  var [data,changeData]=useState(
    [
      {"Model":"Volvo GTR 7","Brand":"Volvo","price":700000,"image":"https://imgs.search.brave.com/7n1YO7qkyw0R19gC5WncBbgFt_uMFW3dV4huAdYllL0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXNp/bmVzcy1zd2VkZW4u/aW1hZ2V2YXVsdC5t/ZWRpYS9wdWJsaXNo/ZWRtZWRpYS8wbWpx/cm5tbGlmOXA3bTJm/bjR0Yy9Wb2x2b19C/dXNlc19jYXNlXzEu/anBn"},
      {"Model":"Volvo GTR 4","Brand":"Volvo","price":100000,"image":"https://imgs.search.brave.com/Xfc_U2J0aOZ0r6bLZK4gygg-tbdkyje4qvvjA7710mo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM2/NTIxNzQ4L3Bob3Rv/L2J1cy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9MGVSQVcw/U1ByNHRtN1N6M1Y3/MkV2RGtOM2VEdXJi/dmRSekNCN2VVLV9r/ST0"},
      {"Model":"Bajaj 750","Brand":"Bajaj","price":650000,"image":"https://imgs.search.brave.com/7n1YO7qkyw0R19gC5WncBbgFt_uMFW3dV4huAdYllL0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXNp/bmVzcy1zd2VkZW4u/aW1hZ2V2YXVsdC5t/ZWRpYS9wdWJsaXNo/ZWRtZWRpYS8wbWpx/cm5tbGlmOXA3bTJm/bjR0Yy9Wb2x2b19C/dXNlc19jYXNlXzEu/anBn"},
      {"Model":"Tata 600","Brand":"Tata","price":900000,"image":"https://imgs.search.brave.com/7n1YO7qkyw0R19gC5WncBbgFt_uMFW3dV4huAdYllL0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXNp/bmVzcy1zd2VkZW4u/aW1hZ2V2YXVsdC5t/ZWRpYS9wdWJsaXNo/ZWRtZWRpYS8wbWpx/cm5tbGlmOXA3bTJm/bjR0Yy9Wb2x2b19C/dXNlc19jYXNlXzEu/anBn"},
      {"Model":"Volvo GTR 900","Brand":"Volvo","price":300000,"image":"https://imgs.search.brave.com/7n1YO7qkyw0R19gC5WncBbgFt_uMFW3dV4huAdYllL0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXNp/bmVzcy1zd2VkZW4u/aW1hZ2V2YXVsdC5t/ZWRpYS9wdWJsaXNo/ZWRtZWRpYS8wbWpx/cm5tbGlmOXA3bTJm/bjR0Yy9Wb2x2b19C/dXNlc19jYXNlXzEu/anBn"},
      {"Model":"Volvo GTR 900","Brand":"Volvo","price":300000,"image":"https://imgs.search.brave.com/7n1YO7qkyw0R19gC5WncBbgFt_uMFW3dV4huAdYllL0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXNp/bmVzcy1zd2VkZW4u/aW1hZ2V2YXVsdC5t/ZWRpYS9wdWJsaXNo/ZWRtZWRpYS8wbWpx/cm5tbGlmOXA3bTJm/bjR0Yy9Wb2x2b19C/dXNlc19jYXNlXzEu/anBn"},
      {"Model":"Volvo GTR 900","Brand":"Volvo","price":300000,"image":"https://imgs.search.brave.com/7n1YO7qkyw0R19gC5WncBbgFt_uMFW3dV4huAdYllL0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXNp/bmVzcy1zd2VkZW4u/aW1hZ2V2YXVsdC5t/ZWRpYS9wdWJsaXNo/ZWRtZWRpYS8wbWpx/cm5tbGlmOXA3bTJm/bjR0Yy9Wb2x2b19C/dXNlc19jYXNlXzEu/anBn"},
      {"Model":"Volvo GTR 900","Brand":"Volvo","price":300000,"image":"https://imgs.search.brave.com/7n1YO7qkyw0R19gC5WncBbgFt_uMFW3dV4huAdYllL0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXNp/bmVzcy1zd2VkZW4u/aW1hZ2V2YXVsdC5t/ZWRpYS9wdWJsaXNo/ZWRtZWRpYS8wbWpx/cm5tbGlmOXA3bTJm/bjR0Yy9Wb2x2b19C/dXNlc19jYXNlXzEu/anBn"},
      {"Model":"Volvo GTR 900","Brand":"Volvo","price":300000,"image":"https://imgs.search.brave.com/7n1YO7qkyw0R19gC5WncBbgFt_uMFW3dV4huAdYllL0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXNp/bmVzcy1zd2VkZW4u/aW1hZ2V2YXVsdC5t/ZWRpYS9wdWJsaXNo/ZWRtZWRpYS8wbWpx/cm5tbGlmOXA3bTJm/bjR0Yy9Wb2x2b19C/dXNlc19jYXNlXzEu/anBn"}
    ]
  )
  return (
    <div>
        <NavigationBar/>
     <div className="container">
      <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row g-3">
          
            {data.map(
              (value,index)=>{
                return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                <div class="card">
                  <img src={value.image} class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">{value.Model}</h5>
                    <p class="card-text">{value.Brand}</p>
                    <p class="card-text">Rs.{value.price}</p>
                    <a href="#" class="btn btn-primary">Buy now</a>
                  </div>
                </div>
    
                </div>
              }
            )}
            
            
            
            

           
            
          </div>
        </div>
  
      
      </div>
    </div>

    </div>
  )
}

export default Viewallbus