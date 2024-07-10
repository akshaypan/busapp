import React from 'react'

const Home = () => {
  return (
    
    <div>

      
      <div className="container">
      

        {/*secondrow*/}
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
      </div>
      <br />
      

          
    </div>
        
        

  )
}

export default Home