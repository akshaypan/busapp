import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const Addbus = () => {
    const [data,changeData]=useState(
        {"model":"","company":"","price":""}
    )


    const inputHandler=(event)=>{
changeData({...data,[event.target.name]:event.target.value})
    }

    const readValues=()=>{
        console.log(data)
        alert("bus data submitted successfuly")
        changeData(    {"model":"","company":"","price":""})
    }
  return (
    <div>
        <NavigationBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Bus model</label>
                            <input type="text" className="form-control" name="model" value={data.model} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Bus company</label>
                            <input type="text" className="form-control" name="company" value={data.company} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Bus price</label>
                            <input type="number"  className="form-control" name="price" value={data.price} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValues}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Addbus