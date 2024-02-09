import React from 'react'

const Ads = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
            <div className="col-md-3 col-xs-12"></div>
            <div className="col-md-6 col-xs-12 bg-light rounded-2 adss">
                <div className="ads pt-4 pb-2">
                <p className='text-center'>Advertisement</p>
                <p className='text-center fw-bold'>You can Place Ads</p>
                <p className='text-center'>750x100</p>
                </div>
            </div>
            <div className="col-md-3 col-xs-12"></div>
        </div>
      </div> 
    </>
  )
}

export default Ads;
