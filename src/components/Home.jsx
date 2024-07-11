import React from 'react'
import NavigationBar from './NavigationBar'

const Home = () => {
  return (
    
    <div>
      <NavigationBar/>
       <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div id="carouselExample" class="carousel slide">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://imgs.search.brave.com/v1TowNFDl_eJ2zL_0qyxxBrRUxdbJpXVdwWAmqz6YG0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lbmdp/bmVlcmluZ2xlYXJu/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8wNy9Db2Fj/aC1CdXMtMTAyNHg1/MzUuanBn" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="https://imgs.search.brave.com/Yiu4DcpcdxDqNLoZ2XulsJS9VZSCZzN4sZ1OALAVXSw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sZW1v/bmJpbi5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMDMv/dHlwZXMtb2YtYnVz/LmpwZw" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="https://imgs.search.brave.com/05XnjkgFsj9UW-09xBFDFpJy4QgCYl7l5Qgjuzhpj58/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YnVzcmF0ZXMuY29t/L3N0YXRpYy9waWMv/YnVzMS5qcGc" class="d-block w-100" alt="..." />
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="row g-3">
          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

          <div class="card">
              <img src="https://etimg.etb2bimg.com/photo/63331381.cms" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Tata buses</h5>
                <a href="#" class="btn btn-primary">Buy now</a>
              </div>
            </div>
          
          </div>
          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

          <div class="card">
              <img src="https://content.jdmagicbox.com/rep/b2b/diesel-driver-only-bus/diesel-driver-only-bus-px9rZCGg.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Bajaj buses</h5>
                <a href="#" class="btn btn-primary">Buy now</a>
              </div>
            </div>

          </div>
        </div>
      </div>
      

          
    </div>
        
        

  )
}

export default Home